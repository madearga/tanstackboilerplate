import { FileText, User, Settings, Clock } from "lucide-react";
import { mockActivity, type ActivityItem } from "~/lib/mock-data";
import { cn } from "~/lib/utils";

const iconMap = {
  post: FileText,
  user: User,
  system: Settings,
};

const colorMap = {
  post: "text-cyan-400 bg-cyan-500/10",
  user: "text-emerald-400 bg-emerald-500/10",
  system: "text-amber-400 bg-amber-500/10",
};

export function ActivityFeed() {
  const getTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - time.getTime()) / 60000);

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-bold tracking-tight text-white mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {mockActivity.map((activity) => {
          const Icon = iconMap[activity.type];
          return (
            <div
              key={activity.id}
              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-gray-900/30"
            >
              <div
                className={cn(
                  "mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg",
                  colorMap[activity.type]
                )}
              >
                <Icon className="h-4 w-4" />
              </div>

              <div className="flex-1 space-y-1">
                <p className="text-sm leading-none text-gray-300">
                  {activity.message}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{getTimeAgo(activity.timestamp)}</span>
                  {activity.user && (
                    <>
                      <span>•</span>
                      <span>{activity.user}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
