import { useState } from "react";
import { Eye, Pencil, Trash2, Calendar, User, BarChart3 } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { mockPosts, type Post } from "~/lib/mock-data";
import { cn } from "~/lib/utils";

type SortKey = keyof Post;
type SortOrder = "asc" | "desc";

export function ContentTable() {
  const [posts] = useState<Post[]>(mockPosts);
  const [sortKey, setSortKey] = useState<SortKey>("publishDate");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedAndFilteredPosts = [...posts]
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      const order = sortOrder === "asc" ? 1 : -1;

      if (typeof aVal === "string" && typeof bVal === "string") {
        return aVal.localeCompare(bVal) * order;
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return (aVal - bVal) * order;
      }
      return 0;
    });

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const getStatusBadge = (status: Post["status"]) => {
    const styles = {
      published: "bg-emerald-500/10 text-emerald-400",
      draft: "bg-amber-500/10 text-amber-400",
      scheduled: "bg-cyan-500/10 text-cyan-400"
    };

    return (
      <span className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
        styles[status]
      )}>
        {status}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Recent Posts</h2>
          <p className="text-sm text-gray-400">
            Manage your content and track performance
          </p>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[200px] bg-gray-900/50 border-gray-800 text-white placeholder:text-gray-500"
          />
          <Button
            variant="outline"
            size="sm"
            className="border-gray-700 bg-gray-900/50 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/30">
                <th
                  className="h-12 px-4 text-left align-middle font-medium text-gray-400 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort("title")}
                >
                  Title {sortKey === "title" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  className="h-12 px-4 text-left align-middle font-medium text-gray-400 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort("author")}
                >
                  Author {sortKey === "author" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  className="h-12 px-4 text-left align-middle font-medium text-gray-400 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort("status")}
                >
                  Status {sortKey === "status" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  className="h-12 px-4 text-left align-middle font-medium text-gray-400 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort("publishDate")}
                >
                  Date {sortKey === "publishDate" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
                <th
                  className="h-12 px-4 text-left align-middle font-medium text-gray-400 cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort("views")}
                >
                  <div className="flex items-center gap-1">
                    <BarChart3 className="h-4 w-4" />
                    Views {sortKey === "views" && (sortOrder === "asc" ? "↑" : "↓")}
                  </div>
                </th>
                <th className="h-12 px-4 text-right align-middle font-medium text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedAndFilteredPosts.map((post, index) => (
                <tr
                  key={post.id}
                  className="border-b border-gray-800/50 transition-colors hover:bg-gray-900/30 group"
                >
                  <td className="p-4">
                    <div className="space-y-1">
                      <div className="font-medium leading-none text-white">{post.title}</div>
                      <div className="text-xs text-gray-500 line-clamp-1">
                        {post.excerpt}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-300">{post.author}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    {getStatusBadge(post.status)}
                  </td>
                  <td className="p-4 text-sm text-gray-400">
                    {formatDate(post.publishDate)}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <BarChart3 className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-300">{formatNumber(post.views)}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white hover:bg-gray-800"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white hover:bg-gray-800"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white hover:bg-gray-800"
                          >
                            ⋮
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
                          <DropdownMenuItem className="text-gray-300 focus:bg-gray-800 focus:text-white">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-800 px-4 py-3 bg-gray-900/20">
          <p className="text-sm text-gray-400">
            Showing <span className="font-medium text-white">1</span> to{" "}
            <span className="font-medium text-white">{sortedAndFilteredPosts.length}</span> of{" "}
            <span className="font-medium text-white">{posts.length}</span> posts
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="border-gray-800 bg-gray-900/50 text-gray-500"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled
              className="border-gray-800 bg-gray-900/50 text-gray-500"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
