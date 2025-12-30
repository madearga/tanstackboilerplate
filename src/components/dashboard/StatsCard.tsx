import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "~/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: "up" | "down";
  icon: React.ReactNode;
  description?: string;
  className?: string;
}

export function StatsCard({
  title,
  value,
  change,
  trend = "up",
  icon,
  description,
  className
}: StatsCardProps) {
  const isPositive = change !== undefined && change >= 0;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-gray-800",
        "bg-gray-900/20 backdrop-blur-sm transition-all duration-300",
        "hover:bg-gray-900/30 hover:border-gray-700",
        "hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]",
        className
      )}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
      </div>

      <div className="relative flex items-start justify-between p-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-3 text-cyan-400">
              {icon}
            </div>
            <span className="text-sm font-medium text-gray-400">{title}</span>
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl font-bold tracking-tight text-white">
              {value}
            </h3>

            {change !== undefined && (
              <div className="flex items-center gap-2 text-sm">
                <div
                  className={cn(
                    "flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium",
                    isPositive
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-red-500/10 text-red-400"
                  )}
                >
                  {isPositive ? (
                    <ArrowUp className="h-3 w-3" />
                  ) : (
                    <ArrowDown className="h-3 w-3" />
                  )}
                  <span>{Math.abs(change)}%</span>
                </div>
                <span className="text-gray-500">from last month</span>
              </div>
            )}

            {description && (
              <p className="text-sm text-gray-400">{description}</p>
            )}
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-50" />
      </div>
    </div>
  );
}

interface SparklineProps {
  data: number[];
  className?: string;
}

export function Sparkline({ data, className }: SparklineProps) {
  const width = 100;
  const height = 40;
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - (value / Math.max(...data)) * height;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("overflow-visible", className)}
    >
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
        className="text-cyan-400"
      />
    </svg>
  );
}
