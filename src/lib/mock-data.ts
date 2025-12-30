// Mock data for Content Management Dashboard

export type PostStatus = "published" | "draft" | "scheduled";

export type UserRole = "admin" | "editor" | "author" | "viewer";

export interface Post {
  id: string;
  title: string;
  author: string;
  status: PostStatus;
  publishDate: string;
  views: number;
  likes: number;
  category: string;
  excerpt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  joinDate: string;
  status: "active" | "inactive";
  postsCount: number;
  avatar?: string;
}

export interface Analytics {
  date: string;
  views: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgTime: number;
}

export interface ActivityItem {
  id: string;
  type: "post" | "user" | "system";
  message: string;
  timestamp: string;
  user?: string;
}

// Mock Posts Data
export const mockPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Modern React Patterns",
    author: "Sarah Chen",
    status: "published",
    publishDate: "2024-12-28",
    views: 2847,
    likes: 156,
    category: "Tutorial",
    excerpt: "Learn the latest React patterns and best practices for 2024..."
  },
  {
    id: "2",
    title: "The Ultimate Guide to TypeScript",
    author: "Michael Rodriguez",
    status: "published",
    publishDate: "2024-12-27",
    views: 1923,
    likes: 89,
    category: "Guide",
    excerpt: "Everything you need to know about TypeScript development..."
  },
  {
    id: "3",
    title: "Building Scalable Architecture",
    author: "Emily Johnson",
    status: "draft",
    publishDate: "2024-12-30",
    views: 0,
    likes: 0,
    category: "Architecture",
    excerpt: "Design patterns for building large-scale applications..."
  },
  {
    id: "4",
    title: "Performance Optimization Techniques",
    author: "David Kim",
    status: "published",
    publishDate: "2024-12-26",
    views: 3456,
    likes: 234,
    category: "Performance",
    excerpt: "Advanced techniques to optimize your application's performance..."
  },
  {
    id: "5",
    title: "Introduction to WebAssembly",
    author: "Sarah Chen",
    status: "scheduled",
    publishDate: "2025-01-02",
    views: 0,
    likes: 0,
    category: "WebAssembly",
    excerpt: "Exploring the power of WebAssembly for web development..."
  },
  {
    id: "6",
    title: "State Management in 2025",
    author: "Alex Thompson",
    status: "published",
    publishDate: "2024-12-25",
    views: 4123,
    likes: 312,
    category: "State Management",
    excerpt: "Comparing modern state management solutions..."
  },
  {
    id: "7",
    title: "CSS Grid vs Flexbox",
    author: "Maria Garcia",
    status: "draft",
    publishDate: "2024-12-31",
    views: 0,
    likes: 0,
    category: "CSS",
    excerpt: "When to use Grid and when to use Flexbox..."
  },
  {
    id: "8",
    title: "Serverless Architecture Patterns",
    author: "James Wilson",
    status: "published",
    publishDate: "2024-12-24",
    views: 2678,
    likes: 145,
    category: "Cloud",
    excerpt: "Best practices for serverless application development..."
  }
];

// Mock Users Data
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "admin",
    joinDate: "2024-01-15",
    status: "active",
    postsCount: 24
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    email: "michael.r@example.com",
    role: "editor",
    joinDate: "2024-02-20",
    status: "active",
    postsCount: 18
  },
  {
    id: "3",
    name: "Emily Johnson",
    email: "emily.j@example.com",
    role: "author",
    joinDate: "2024-03-10",
    status: "active",
    postsCount: 12
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@example.com",
    role: "editor",
    joinDate: "2024-02-05",
    status: "active",
    postsCount: 15
  },
  {
    id: "5",
    name: "Alex Thompson",
    email: "alex.t@example.com",
    role: "author",
    joinDate: "2024-04-12",
    status: "active",
    postsCount: 8
  },
  {
    id: "6",
    name: "Maria Garcia",
    email: "maria.g@example.com",
    role: "author",
    joinDate: "2024-05-18",
    status: "inactive",
    postsCount: 5
  },
  {
    id: "7",
    name: "James Wilson",
    email: "james.w@example.com",
    role: "viewer",
    joinDate: "2024-06-22",
    status: "active",
    postsCount: 2
  }
];

// Mock Analytics Data (last 30 days)
export const mockAnalytics: Analytics[] = [
  { date: "2024-12-01", views: 1200, uniqueVisitors: 890, bounceRate: 42, avgTime: 145 },
  { date: "2024-12-02", views: 1450, uniqueVisitors: 1020, bounceRate: 38, avgTime: 167 },
  { date: "2024-12-03", views: 1320, uniqueVisitors: 945, bounceRate: 45, avgTime: 152 },
  { date: "2024-12-04", views: 1680, uniqueVisitors: 1200, bounceRate: 40, avgTime: 178 },
  { date: "2024-12-05", views: 1890, uniqueVisitors: 1340, bounceRate: 35, avgTime: 195 },
  { date: "2024-12-06", views: 2100, uniqueVisitors: 1456, bounceRate: 33, avgTime: 210 },
  { date: "2024-12-07", views: 1950, uniqueVisitors: 1389, bounceRate: 37, avgTime: 189 },
  { date: "2024-12-08", views: 2340, uniqueVisitors: 1623, bounceRate: 31, avgTime: 225 },
  { date: "2024-12-09", views: 2567, uniqueVisitors: 1789, bounceRate: 29, avgTime: 245 },
  { date: "2024-12-10", views: 2780, uniqueVisitors: 1934, bounceRate: 28, avgTime: 267 },
  { date: "2024-12-11", views: 2890, uniqueVisitors: 2012, bounceRate: 30, avgTime: 256 },
  { date: "2024-12-12", views: 3120, uniqueVisitors: 2156, bounceRate: 27, avgTime: 278 },
  { date: "2024-12-13", views: 2980, uniqueVisitors: 2089, bounceRate: 31, avgTime: 265 },
  { date: "2024-12-14", views: 3340, uniqueVisitors: 2287, bounceRate: 26, avgTime: 289 },
  { date: "2024-12-15", views: 3567, uniqueVisitors: 2434, bounceRate: 25, avgTime: 312 },
  { date: "2024-12-16", views: 3789, uniqueVisitors: 2567, bounceRate: 24, avgTime: 334 },
  { date: "2024-12-17", views: 3920, uniqueVisitors: 2645, bounceRate: 23, avgTime: 345 },
  { date: "2024-12-18", views: 4123, uniqueVisitors: 2789, bounceRate: 22, avgTime: 367 },
  { date: "2024-12-19", views: 3987, uniqueVisitors: 2712, bounceRate: 24, avgTime: 356 },
  { date: "2024-12-20", views: 4234, uniqueVisitors: 2856, bounceRate: 21, avgTime: 378 },
  { date: "2024-12-21", views: 4456, uniqueVisitors: 2987, bounceRate: 20, avgTime: 398 },
  { date: "2024-12-22", views: 4678, uniqueVisitors: 3123, bounceRate: 19, avgTime: 412 },
  { date: "2024-12-23", views: 4523, uniqueVisitors: 3045, bounceRate: 21, avgTime: 401 },
  { date: "2024-12-24", views: 4789, uniqueVisitors: 3189, bounceRate: 18, avgTime: 423 },
  { date: "2024-12-25", views: 4923, uniqueVisitors: 3267, bounceRate: 17, avgTime: 445 },
  { date: "2024-12-26", views: 5123, uniqueVisitors: 3389, bounceRate: 16, avgTime: 467 },
  { date: "2024-12-27", views: 5234, uniqueVisitors: 3456, bounceRate: 16, avgTime: 478 },
  { date: "2024-12-28", views: 5456, uniqueVisitors: 3587, bounceRate: 15, avgTime: 492 },
  { date: "2024-12-29", views: 5567, uniqueVisitors: 3645, bounceRate: 15, avgTime: 501 },
  { date: "2024-12-30", views: 5678, uniqueVisitors: 3723, bounceRate: 14, avgTime: 523 }
];

// Mock Activity Data
export const mockActivity: ActivityItem[] = [
  {
    id: "1",
    type: "post",
    message: "Published new article 'Performance Optimization Techniques'",
    timestamp: "2024-12-30T10:30:00Z",
    user: "David Kim"
  },
  {
    id: "2",
    type: "user",
    message: "New user registered",
    timestamp: "2024-12-30T09:15:00Z",
    user: "James Wilson"
  },
  {
    id: "3",
    type: "post",
    message: "Updated draft 'State Management in 2025'",
    timestamp: "2024-12-30T08:45:00Z",
    user: "Alex Thompson"
  },
  {
    id: "4",
    type: "system",
    message: "Weekly analytics report generated",
    timestamp: "2024-12-30T00:00:00Z"
  },
  {
    id: "5",
    type: "post",
    message: "Scheduled post 'Introduction to WebAssembly'",
    timestamp: "2024-12-29T16:20:00Z",
    user: "Sarah Chen"
  },
  {
    id: "6",
    type: "user",
    message: "User role updated",
    timestamp: "2024-12-29T14:10:00Z",
    user: "Maria Garcia"
  },
  {
    id: "7",
    type: "post",
    message: "Published 'The Ultimate Guide to TypeScript'",
    timestamp: "2024-12-29T11:30:00Z",
    user: "Michael Rodriguez"
  },
  {
    id: "8",
    type: "system",
    message: "Database backup completed",
    timestamp: "2024-12-29T02:00:00Z"
  }
];

// Category distribution for charts
export const mockCategoryData = [
  { name: "Tutorial", value: 35 },
  { name: "Guide", value: 25 },
  { name: "Performance", value: 15 },
  { name: "Architecture", value: 12 },
  { name: "Other", value: 13 }
];

// User role distribution
export const mockUserRoleData = [
  { name: "Authors", value: 45 },
  { name: "Editors", value: 25 },
  { name: "Viewers", value: 20 },
  { name: "Admins", value: 10 }
];
