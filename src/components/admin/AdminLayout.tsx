"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  BookOpen,
  Video,
  MessageSquare,
  FolderOpen,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const navigationItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "My Classroom",
    href: "/classroom",
    icon: BookOpen,
  },
  {
    name: "Live Sessions",
    href: "/sessions",
    icon: Video,
  },
  {
    name: "Student's Forum",
    href: "/forum",
    icon: MessageSquare,
  },
  {
    name: "Resources",
    href: "/resources",
    icon: FolderOpen,
  },
]

const bottomItems = [
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    name: "Logout",
    href: "/logout",
    icon: LogOut,
  },
]

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
          isCollapsed ? "w-16" : "w-64",
        )}
      >
        {/* Header with Logo and Toggle */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-purple-600 rounded-xs"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-purple-600">DRID</span>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setIsCollapsed(!isCollapsed)} className="p-1 h-8 w-8">
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex flex-col justify-between p-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive ? "bg-purple-50 text-purple-600" : "text-gray-700 hover:bg-gray-100",
                    isCollapsed && "justify-center",
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              )
            })}
          </nav>

          <nav className="space-y-2">
            {bottomItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive ? "bg-purple-50 text-purple-600" : "text-gray-700 hover:bg-gray-100",
                    isCollapsed && "justify-center",
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
