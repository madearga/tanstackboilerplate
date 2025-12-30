import { FileText, Users, Eye, TrendingUp } from "lucide-react";
import { StatsCard, Sparkline } from "./StatsCard";
import { ContentTable } from "./ContentTable";
import { ViewsLineChart, CategoryBarChart, UserRolePieChart } from "./AnalyticsChart";
import { ActivityFeed } from "./ActivityFeed";
import { DashboardLayout } from "./DashboardLayout";
import { mockPosts, mockUsers, mockAnalytics } from "~/lib/mock-data";

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
      <div className="space-y-8">
        {/* Page header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-gray-400">
            Welcome back! Here's what's happening with your content today.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Posts"
            value={totalPosts}
            change={12}
            icon={<FileText className="h-5 w-5" />}
            description={`${publishedPosts} published`}
          />
          <StatsCard
            title="Active Users"
            value={totalUsers}
            change={8}
            icon={<Users className="h-5 w-5" />}
            description={`${activeUsers} active members`}
          />
          <StatsCard
            title="Total Views"
            value={totalViews.toLocaleString()}
            change={23}
            icon={<Eye className="h-5 w-5" />}
            description="Last 30 days"
          />
          <StatsCard
            title="Avg. Engagement"
            value={avgEngagement}
            change={5}
            trend="up"
            icon={<TrendingUp className="h-5 w-5" />}
            description="Likes per post"
          />
        </div>

        {/* Charts section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm p-6">
            <div className="mb-6 space-y-1">
              <h3 className="text-lg font-semibold text-white">Views Over Time</h3>
              <p className="text-sm text-gray-400">Last 14 days performance</p>
            </div>
            <ViewsLineChart />
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm p-6">
            <div className="mb-6 space-y-1">
              <h3 className="text-lg font-semibold text-white">Content by Category</h3>
              <p className="text-sm text-gray-400">Distribution of published posts</p>
            </div>
            <CategoryBarChart />
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Content table */}
          <div className="lg:col-span-2">
            <ContentTable />
          </div>

          {/* Activity feed */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm p-6">
              <ActivityFeed />
            </div>
          </div>
        </div>

        {/* Additional charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm p-6">
            <div className="mb-6 space-y-1">
              <h3 className="text-lg font-semibold text-white">User Distribution</h3>
              <p className="text-sm text-gray-400">Users by role</p>
            </div>
            <UserRolePieChart />
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm p-6">
            <div className="mb-6 space-y-1">
              <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
              <p className="text-sm text-gray-400">Common tasks</p>
            </div>
            <div className="space-y-3">
              <button className="w-full rounded-xl border border-gray-800 bg-gray-900/30 p-4 text-left transition-all hover:border-gray-700 hover:bg-gray-900/50 group">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Create New Post</p>
                    <p className="text-xs text-gray-400">Start writing a new article</p>
                  </div>
                </div>
              </button>
              <button className="w-full rounded-xl border border-gray-800 bg-gray-900/30 p-4 text-left transition-all hover:border-gray-700 hover:bg-gray-900/50 group">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Invite Users</p>
                    <p className="text-xs text-gray-400">Add new team members</p>
                  </div>
                </div>
              </button>
              <button className="w-full rounded-xl border border-gray-800 bg-gray-900/30 p-4 text-left transition-all hover:border-gray-700 hover:bg-gray-900/50 group">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">View Analytics</p>
                    <p className="text-xs text-gray-400">Detailed performance report</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
