import { createFileRoute } from "@tanstack/react-router";
import { DashboardHome } from "~/components/dashboard/DashboardHome";

export const Route = createFileRoute("/(authenticated)/dashboard/")({
  component: DashboardIndex,
});

function DashboardIndex() {
  return <DashboardHome />;
}
