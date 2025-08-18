"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { authApi, refreshAccessToken } from "../services/api";
import { getToken, removeTokens } from "../services/indexdb";

interface User {
  pk: number;
  email: string;
  first_name: string;
  last_name: string;
  role?: 'admin' | 'student';
  isAuthenticated: boolean;
}

interface AuthContextType {
  adminLogin: (email: string, password: string) => Promise<boolean>;
  studentLogin: (email: string, password: string) => Promise<boolean>;
  register: (data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }) => Promise<boolean>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isStudent: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
  checkAuth: () => Promise<boolean>;
  clearError: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  console.log("AuthProvider initialized");

  const checkAuth = useCallback(async (): Promise<boolean> => {
    console.log("Checking authentication...");
    try {
      setLoading(true);
      setError(null);

      const token = await getToken('accessToken');

      if (!token) {
        console.log("No token found, user not authenticated");
        setUser(null);
        setLoading(false);
        return false;
      }

      try {
        // First check if the current token is valid
        console.log("Verifying token with server...");
        const response = await authApi.getUser();

        setUser({
          ...response,
          isAuthenticated: true,
          // Role should come from the backend response now
          role: response.role || 'student', // Default to student if role not provided
        });
        return true;
      } catch (error: unknown) {
        console.error("Token verification failed:", error);

        // Try refreshing the token
        if ((error as { response?: { status: number } })?.response?.status === 401) {
          console.log("Attempting to refresh token after failed verification");
          const newToken = await refreshAccessToken();

          if (newToken) {
            console.log("Token refreshed successfully, verifying again");
            try {
              const response = await authApi.getUser();
              setUser({
                ...response,
                isAuthenticated: true,
                role: response.role || 'student',
              });
              return true;
            } catch (verifyError) {
              console.error("Verification after refresh failed:", verifyError);
              await removeTokens();
              setUser(null);
              setError("Session expired. Please login again.");
              return false;
            }
          } else {
            console.log("Token refresh failed, clearing tokens");
            await removeTokens();
          }
        }

        setUser(null);
        setError(error instanceof Error ? error.message : "Authentication failed");
        return false;
      }
    } catch (error: unknown) {
      console.error("Auth check failed:", error);
      setUser(null);
      setError("Authentication check failed");
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Run auth check on initial load
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const adminLogin = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      // Use the dedicated admin login endpoint
      const data = await authApi.adminLogin({ email, password });
      
      // The backend should validate admin role and return appropriate user data
      setUser({
        ...data.user,
        isAuthenticated: true,
        role: data.user.role || "admin", // Backend should set this
      });
      return true;
    } catch (error: unknown) {
      console.error("Admin login failed:", error);
      const errorMessage = (error as { response?: { data?: { detail?: string; message?: string; }; }; message?: string; }).response?.data?.detail || 
                          (error as { response?: { data?: { detail?: string; message?: string; }; }; message?: string; }).response?.data?.message || 
                          (error as Error).message || 
                          "Admin login failed";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const studentLogin = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      // Use the regular login endpoint for students
      const data = await authApi.login({ email, password });
      setUser({
        ...data.user,
        isAuthenticated: true,
        role: data.user.role || "student", // Backend should set this
      });
      return true;
    } catch (error: unknown) {
      console.error("Student login failed:", error);
      const errorMessage = (error as { response?: { data?: { detail?: string; message?: string; }; }; message?: string; }).response?.data?.detail || 
                          (error as { response?: { data?: { detail?: string; message?: string; }; }; message?: string; }).response?.data?.message || 
                          (error as Error).message || 
                          "Student login failed";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      await authApi.register(data);
      return true;
    } catch (error: unknown) {
      console.error("Registration failed:", error);
      const errorMessage = (error as { response?: { data?: { detail?: string; message?: string; }; }; message?: string; }).response?.data?.detail || 
                          (error as { response?: { data?: { detail?: string; message?: string; }; }; message?: string; }).response?.data?.message || 
                          (error as Error).message || 
                          "Registration failed";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setLoading(true);
    try {
      console.log("Logging out...");
      await authApi.logout();
      console.log("Logout API call successful");
    } catch (error: unknown) {
      console.error("Logout API call failed:", error);
      setError((error instanceof Error ? error.message : "Logout failed"));
    } finally {
      console.log("Removing local tokens");
      await removeTokens();
      setUser(null);
      setError(null);
      setLoading(false);
      router.push("/");
    }
  };

  const clearError = (): void => {
    setError(null);
  };

  const contextValue: AuthContextType = {
    user,
    loading,
    error,
    adminLogin,
    studentLogin,
    register,
    logout,
    checkAuth,
    clearError,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
    isStudent: user?.role === "student",
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// HOC for protecting routes that require authentication
export function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function AuthProtected(props: P) {
    const { user, loading, error, checkAuth } = useAuth();
    const router = useRouter();
    const [retryCount, setRetryCount] = useState(0);
    const MAX_RETRIES = 1;

    useEffect(() => {
      // If initial auth check failed but we haven't retried yet, try again
      if (!loading && !user && error && retryCount < MAX_RETRIES) {
        const retryAuth = async () => {
          console.log("Retrying authentication...");
          setRetryCount((prev) => prev + 1);
          const success = await checkAuth();
          if (!success) {
            console.log("Auth retry failed, redirecting to login");
            router.push("/login");
          }
        };
        retryAuth();
      } else if (!loading && !user && retryCount >= MAX_RETRIES) {
        console.log("Max retries reached, redirecting to login");
        router.push("/login");
      }
    }, [user, loading, error, router, checkAuth, retryCount]);

    if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    if (!user) return null;

    return <Component {...props} />;
  };
}

// HOC for protecting admin routes
export function withAdminAuth<P extends object>(Component: React.ComponentType<P>) {
  return function AdminProtected(props: P) {
    const { user, loading, error, isAdmin, checkAuth } = useAuth();
    const router = useRouter();
    const [retryCount, setRetryCount] = useState(0);
    const MAX_RETRIES = 1;

    useEffect(() => {
      if (!loading && !user && error && retryCount < MAX_RETRIES) {
        const retryAuth = async () => {
          setRetryCount((prev) => prev + 1);
          const success = await checkAuth();
          if (!success || !isAdmin) {
            router.push("/admin-login");
          }
        };
        retryAuth();
      } else if (!loading) {
        if (!user) {
          router.push("/admin-login");
        } else if (!isAdmin) {
          router.push("/");
        }
      }
    }, [user, loading, isAdmin, error, router, checkAuth, retryCount]);

    if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    if (!user || !isAdmin) return null;

    return <Component {...props} />;
  };
}

// HOC for protecting student routes
export function withStudentAuth<P extends object>(Component: React.ComponentType<P>) {
  return function StudentProtected(props: P) {
    const { user, loading, error, isStudent, checkAuth } = useAuth();
    const router = useRouter();
    const [retryCount, setRetryCount] = useState(0);
    const MAX_RETRIES = 1;

    useEffect(() => {
      if (!loading && !user && error && retryCount < MAX_RETRIES) {
        const retryAuth = async () => {
          setRetryCount((prev) => prev + 1);
          const success = await checkAuth();
          if (!success || !isStudent) {
            router.push("/student-login");
          }
        };
        retryAuth();
      } else if (!loading) {
        if (!user) {
          router.push("/student-login");
        } else if (!isStudent) {
          router.push("/");
        }
      }
    }, [user, loading, isStudent, error, router, checkAuth, retryCount]);

    if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    if (!user || !isStudent) return null;

    return <Component {...props} />;
  };
}