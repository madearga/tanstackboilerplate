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
        "group relative overflow-hidden rounded-3xl border",
        "bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/40",
        "backdrop-blur-sm transition-all duration-500",
        "hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative flex flex-col p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-3 ring-1 ring-white/5 group-hover:ring-white/10 transition-all">
            {icon}
          </div>
          {change !== undefined && (
            <div
              className={cn(
                "flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ring-1",
                isPositive
                  ? "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20"
                  : "bg-red-500/10 text-red-400 ring-red-500/20"
              )}
            >
              {isPositive ? (
                <ArrowUp className="h-3 w-3" />
              ) : (
                <ArrowDown className="h-3 w-3" />
              )}
              <span>{Math.abs(change)}%</span>
            </div>
          )}
        </div>

        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{title}</p>
          <h3 className="text-3xl font-bold tracking-tight text-white tabular-nums">
            {value}
          </h3>
          {description && (
            <p className="text-sm text-gray-400">{description}</p>
          )}
          {change !== undefined && (
            <p className="text-xs text-gray-500 mt-1">vs. last month</p>
          )}
        </div>

        {/* Subtle glow effect on hover */}
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100 opacity-0" />
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
