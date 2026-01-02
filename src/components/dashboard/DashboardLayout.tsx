import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Bell,
  Search,
  Settings,
  User,
  Menu,
  X,
  Home,
  FileText,
  Users,
  BarChart3,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useTheme } from "~/components/theme-provider";
import { SignOutButton } from "~/components/sign-out-button";
import { cn } from "~/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const navigation = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Posts", href: "/dashboard/posts", icon: FileText },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-black">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform border-r border-gray-800 bg-gray-950 transition-transform duration-300 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center gap-2 border-b border-gray-800 px-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 text-white font-bold">
              TS
            </div>
            <span className="text-lg font-semibold text-white">Dashboard</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-4 py-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-all hover:bg-gray-900/50 hover:text-white"
                activeProps={{
                  className:
                    "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-white border border-cyan-500/20",
                }}
              >
                <item.icon className="h-5 w-5 transition-colors group-hover:text-cyan-400" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User info */}
          <div className="border-t border-gray-800 p-4">
            <div className="flex items-center gap-3 rounded-lg px-3 py-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white text-sm font-medium">
                JD
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
              <SignOutButton />
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950">
          <div className="flex h-16 items-center gap-4 px-4 sm:gap-6 sm:px-6">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-400 hover:text-white hover:bg-gray-900"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex-1">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-400 hover:text-white hover:bg-gray-900"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-400 hover:text-white hover:bg-gray-900"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-900"
              >
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 sm:pt-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
