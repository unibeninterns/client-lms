import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { getToken, saveTokens, removeTokens } from "./indexdb";

// Configure base API settings
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

interface LoginResponse {
  access: string;
  refresh: string;
  user: {
    pk: number;
    email: string;
    first_name: string;
    last_name: string;
    role?: "admin" | "student"; // Add role to response type
  };
}

interface UserProfile {
  pk: number;
  email: string;
  first_name: string;
  last_name: string;
  role?: "admin" | "student"; // Add role to profile type
}

interface UserData {
  id: number;
  url: string;
  first_name: string;
  last_name: string;
  email: string;
  is_verified: boolean;
  username: string;
  role?: "admin" | "student"; // Add role to user data type
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegistrationData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface PasswordChangeData {
  old_password: string;
  new_password1: string;
  new_password2: string;
}

interface PasswordResetData {
  email: string;
}

interface PasswordResetConfirmData {
  uid: string;
  token: string;
  new_password1: string;
  new_password2: string;
}

interface GoogleAuthData {
  access_token: string;
}

interface EmailVerificationData {
  key: string;
}

interface ResendEmailData {
  email: string;
}

interface CustomRequestConfig extends InternalAxiosRequestConfig {
  _retry: boolean;
}

// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});

// Track refresh attempts to prevent loops
let isRefreshing = false;
let refreshPromise: Promise<string | null> | null = null;

// Request interceptor to add auth token
api.interceptors.request.use(
  async (config) => {
    // Skip adding token for auth endpoints that don't need it
    const authEndpoints = [
      "/auth/registration/",
      "/auth/login/",
      "/auth/password/reset/",
      "/auth/password/reset/confirm/",
      "/auth/registration/verify-email/",
      "/auth/registration/resend-email/",
      "/auth/google/",
      "/admin-login/", // Add admin login to skip list
    ];

    const skipAuth = authEndpoints.some((endpoint) =>
      config.url?.includes(endpoint)
    );

    if (!skipAuth) {
      try {
        const token = await getToken("accessToken");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error("Error getting token for request:", error);
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    // Check if this is a 401 error and we have an original request
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !(originalRequest as CustomRequestConfig)._retry
    ) {
      // Skip refresh for auth endpoints
      const authEndpoints = [
        "/auth/registration/",
        "/auth/login/",
        "/auth/password/reset/",
        "/auth/password/reset/confirm/",
        "/auth/registration/verify-email/",
        "/auth/registration/resend-email/",
        "/auth/google/",
        "/admin-login/", // Add admin login to skip list
      ];

      const isAuthEndpoint = authEndpoints.some((endpoint) =>
        originalRequest.url?.includes(endpoint)
      );

      if (isAuthEndpoint) {
        return Promise.reject(error);
      }

      // Mark this request as retried
      (originalRequest as CustomRequestConfig)._retry = true;

      // If we're already refreshing, wait for the existing refresh
      if (isRefreshing && refreshPromise) {
        try {
          const newToken = await refreshPromise;
          if (newToken) {
            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
            return api(originalRequest);
          }
        } catch (refreshError) {
          console.error("Failed to wait for token refresh:", refreshError);
          await handleAuthFailure();
          return Promise.reject(error);
        }
      }

      // Start the refresh process
      if (!isRefreshing) {
        isRefreshing = true;
        refreshPromise = refreshAccessToken();

        try {
          const newToken = await refreshPromise;
          if (newToken) {
            originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
            return api(originalRequest);
          } else {
            await handleAuthFailure();
            return Promise.reject(error);
          }
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);
          await handleAuthFailure();
          return Promise.reject(error);
        } finally {
          isRefreshing = false;
          refreshPromise = null;
        }
      }
    }

    return Promise.reject(error);
  }
);

// Refresh access token using refresh token
export const refreshAccessToken = async (): Promise<string | null> => {
  try {
    console.log("Attempting to refresh access token");

    const refreshToken = await getToken("refreshToken");
    if (!refreshToken) {
      console.log("No refresh token found");
      return null;
    }

    // Create a new axios instance without interceptors for refresh
    const refreshApi = axios.create({
      baseURL: API_URL,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });

    const response = await refreshApi.post("/auth/token/refresh/", {
      refresh: refreshToken,
    });

    if (response.data.access) {
      console.log("Token refresh successful");
      await saveTokens(response.data.access, refreshToken);
      return response.data.access;
    }

    console.log("No access token in refresh response");
    return null;
  } catch (error) {
    console.error("Token refresh failed:", error);
    return null;
  }
};

// Handle authentication failure
const handleAuthFailure = async () => {
  console.log("Handling authentication failure - clearing tokens");
  await removeTokens();

  // Only redirect if we're in the browser
  if (typeof window !== "undefined") {
    window.location.href = "/login";
  }
};

// API Methods

// Authentication endpoints
export const authApi = {
  // Register new user
  register: async (data: RegistrationData): Promise<UserProfile> => {
    const response = await api.post("/auth/registration/", data);
    return response.data;
  },

  // Login user (regular login)
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await api.post("/auth/login/", credentials);

    if (response.data.access && response.data.refresh) {
      await saveTokens(response.data.access, response.data.refresh);
    }

    return response.data;
  },

  // Admin login (NEW - separate endpoint)
  adminLogin: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await api.post("/admin-login/", credentials);

    if (response.data.access && response.data.refresh) {
      await saveTokens(response.data.access, response.data.refresh);
    }

    return response.data;
  },

  // Logout user
  logout: async (): Promise<void> => {
    try {
      await api.post("/auth/logout/");
    } catch (error) {
      console.error("Logout API call failed:", error);
    } finally {
      await removeTokens();
    }
  },

  // Verify email
  verifyEmail: async (
    data: EmailVerificationData
  ): Promise<{ detail: string }> => {
    const response = await api.post("/auth/registration/verify-email/", data);
    return response.data;
  },

  // Resend verification email
  resendVerificationEmail: async (
    data: ResendEmailData
  ): Promise<{ detail: string }> => {
    const response = await api.post("/auth/registration/resend-email/", data);
    return response.data;
  },

  // Change password
  changePassword: async (
    data: PasswordChangeData
  ): Promise<{ detail: string }> => {
    const response = await api.post("/auth/password/change/", data);
    return response.data;
  },

  // Reset password
  resetPassword: async (
    data: PasswordResetData
  ): Promise<{ detail: string }> => {
    const response = await api.post("/auth/password/reset/", data);
    return response.data;
  },

  // Confirm password reset
  confirmPasswordReset: async (
    data: PasswordResetConfirmData
  ): Promise<{ detail: string }> => {
    const response = await api.post("/auth/password/reset/confirm/", data);
    return response.data;
  },

  // Get current user
  getUser: async (): Promise<UserProfile> => {
    const response = await api.get("/auth/user/");
    return response.data;
  },

  // Update current user (full update)
  updateUser: async (data: Partial<UserProfile>): Promise<UserProfile> => {
    const response = await api.put("/auth/user/", data);
    return response.data;
  },

  // Update current user (partial update)
  patchUser: async (data: Partial<UserProfile>): Promise<UserProfile> => {
    const response = await api.patch("/auth/user/", data);
    return response.data;
  },

  // Google OAuth login
  googleLogin: async (data: GoogleAuthData): Promise<LoginResponse> => {
    const response = await api.post("/auth/google/", data);

    if (response.data.access && response.data.refresh) {
      await saveTokens(response.data.access, response.data.refresh);
    }

    return response.data;
  },

  // Verify current token
  verifyToken: async (): Promise<{ user: UserProfile }> => {
    const response = await api.post("/auth/token/verify/");
    return response.data;
  },
};

// User management endpoints (FIXED PATH - using /account/users/ as per README)
export const userApi = {
  // Get all users
  getUsers: async (): Promise<UserData[]> => {
    const response = await api.get("/account/users/");
    return response.data;
  },

  // Get user by ID
  getUser: async (id: number): Promise<UserData> => {
    const response = await api.get(`/account/users/${id}/`);
    return response.data;
  },

  // Update user by ID (full update)
  updateUser: async (
    id: number,
    data: Partial<UserData>
  ): Promise<UserData> => {
    const response = await api.put(`/account/users/${id}/`, data);
    return response.data;
  },

  // Update user by ID (partial update)
  patchUser: async (id: number, data: Partial<UserData>): Promise<UserData> => {
    const response = await api.patch(`/account/users/${id}/`, data);
    return response.data;
  },

  // Delete user by ID
  deleteUser: async (id: number): Promise<void> => {
    await api.delete(`/account/users/${id}/`);
  },
};

export default api;
