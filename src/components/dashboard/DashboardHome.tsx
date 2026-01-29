import { FileText, Users, Eye, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { StatsCard, Sparkline } from "./StatsCard";
import { ContentTable } from "./ContentTable";
import { ViewsLineChart, CategoryBarChart, UserRolePieChart } from "./AnalyticsChart";
import { ActivityFeed } from "./ActivityFeed";
import { DashboardLayout } from "./DashboardLayout";
import { mockPosts, mockUsers, mockAnalytics } from "~/lib/mock-data";
import { cn } from "~/lib/utils";

// Colored icon wrapper component
interface ColoredIconProps {
  icon: LucideIcon;
  color: "cyan" | "emerald" | "purple" | "amber";
}

function ColoredIcon({ icon: Icon, color }: ColoredIconProps) {
  const colorClasses = {
    cyan: "text-cyan-400",
    emerald: "text-emerald-400",
    purple: "text-purple-400",
    amber: "text-amber-400",
  };
  return <Icon className={cn("h-5 w-5", colorClasses[color])} />;
}

export function DashboardHome() {
  const totalPosts = mockPosts.length;
  const publishedPosts = mockPosts.filter((p) => p.status === "published").length;
  const totalUsers = mockUsers.length;
  const activeUsers = mockUsers.filter((u) => u.status === "active").length;
  const totalViews = mockPosts.reduce((sum, p) => sum + p.views, 0);
  const avgEngagement = Math.round((mockPosts.reduce((sum, p) => sum + p.likes, 0) / totalPosts) * 100) / 100;

  const recentViewsData = mockAnalytics.slice(-7).map((a) => a.views);

  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Page header with animated gradient background */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 border border-gray-800/50 p-8 sm:p-10">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 translate-y-1/2 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 p-1">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">Live Dashboard</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Overview
            </h1>
            <p className="text-gray-400 max-w-lg">
              Welcome back! Here's your real-time content performance at a glance.
            </p>
          </div>
        </div>

        {/* Stats cards with enhanced design */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Posts"
            value={totalPosts}
            change={12}
            icon={<ColoredIcon icon={FileText} color="cyan" />}
            description={`${publishedPosts} published`}
            className="border-cyan-500/10 hover:border-cyan-500/20 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)]"
          />
          <StatsCard
            title="Active Users"
            value={totalUsers}
            change={8}
            icon={<ColoredIcon icon={Users} color="emerald" />}
            description={`${activeUsers} active members`}
            className="border-emerald-500/10 hover:border-emerald-500/20 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)]"
          />
          <StatsCard
            title="Total Views"
            value={totalViews.toLocaleString()}
            change={23}
            icon={<ColoredIcon icon={Eye} color="purple" />}
            description="Last 30 days"
            className="border-purple-500/10 hover:border-purple-500/20 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]"
          />
          <StatsCard
            title="Engagement"
            value={avgEngagement}
            change={5}
            trend="up"
            icon={<ColoredIcon icon={TrendingUp} color="amber" />}
            description="Likes per post"
            className="border-amber-500/10 hover:border-amber-500/20 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.15)]"
          />
        </div>

        {/* Charts section with enhanced glassmorphism */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/20 hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative space-y-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="text-lg font-semibold text-white">Views Over Time</h3>
              </div>
              <p className="text-sm text-gray-400">Last 14 days performance</p>
            </div>
            <div className="relative mt-6">
              <ViewsLineChart />
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/20 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative space-y-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                <h3 className="text-lg font-semibold text-white">Content by Category</h3>
              </div>
              <p className="text-sm text-gray-400">Distribution of published posts</p>
            </div>
            <div className="relative mt-6">
              <CategoryBarChart />
            </div>
          </div>
        </div>

        {/* Main content grid with enhanced styling */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Content table with glassmorphism */}
          <div className="lg:col-span-2 group">
            <div className="relative overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm transition-all duration-500 hover:border-gray-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative p-6">
                <ContentTable />
              </div>
            </div>
          </div>

          {/* Activity feed with enhanced design */}
          <div className="lg:col-span-1 group">
            <div className="relative overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/20 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                </div>
                <ActivityFeed />
              </div>
            </div>
          </div>
        </div>

        {/* Additional charts with premium glassmorphism design */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* User Distribution Chart */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/20 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative space-y-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <h3 className="text-lg font-semibold text-white">User Distribution</h3>
              </div>
              <p className="text-sm text-gray-400">Users by role</p>
            </div>
            <div className="relative mt-6">
              <UserRolePieChart />
            </div>
          </div>

          {/* Quick Actions with enhanced button design */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-6 backdrop-blur-sm transition-all duration-500 hover:border-rose-500/20 hover:shadow-[0_0_40px_-10px_rgba(244,63,94,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative space-y-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
                <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
              </div>
              <p className="text-sm text-gray-400 -mt-4 mb-4">Common tasks</p>
            </div>
            <div className="relative space-y-3">
              <button className="group/btn w-full relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-r from-gray-900/50 to-gray-900/30 p-4 text-left transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.2)] hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 p-2.5 text-cyan-400 ring-1 ring-cyan-500/20 group-hover/btn:ring-cyan-500/40 transition-all">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white group-hover/btn:text-cyan-100 transition-colors">Create New Post</p>
                    <p className="text-xs text-gray-400 group-hover/btn:text-gray-300 transition-colors">Start writing a new article</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-cyan-500/30 group-hover/btn:bg-cyan-400 transition-colors" />
                </div>
              </button>

              <button className="group/btn w-full relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-r from-gray-900/50 to-gray-900/30 p-4 text-left transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)] hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 p-2.5 text-emerald-400 ring-1 ring-emerald-500/20 group-hover/btn:ring-emerald-500/40 transition-all">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white group-hover/btn:text-emerald-100 transition-colors">Invite Users</p>
                    <p className="text-xs text-gray-400 group-hover/btn:text-gray-300 transition-colors">Add new team members</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-500/30 group-hover/btn:bg-emerald-400 transition-colors" />
                </div>
              </button>

              <button className="group/btn w-full relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gradient-to-r from-gray-900/50 to-gray-900/30 p-4 text-left transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.2)] hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 p-2.5 text-purple-400 ring-1 ring-purple-500/20 group-hover/btn:ring-purple-500/40 transition-all">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white group-hover/btn:text-purple-100 transition-colors">View Analytics</p>
                    <p className="text-xs text-gray-400 group-hover/btn:text-gray-300 transition-colors">Detailed performance report</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-purple-500/30 group-hover/btn:bg-purple-400 transition-colors" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
