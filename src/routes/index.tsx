import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Suspense } from "react";
import { SignOutButton } from "~/components/sign-out-button";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import { authQueryOptions } from "~/lib/auth/queries";

import HeroSection from "~/components/landing/HeroSection";
import StackSection from "~/components/landing/StackSection";
import StepsSection from "~/components/landing/StepsSection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-100">
      <HeroSection />
      <StepsSection />
      <StackSection />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-medium tracking-tight text-neutral-50 sm:text-3xl">
            See the dashboard instead of reading about it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Sign in with Google and the session, the database row, and the protected route
            are already in place.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              render={<Link to="/login" />}
              nativeButton={false}
              size="lg"
              className="rounded-md bg-neutral-50 px-6 py-3 text-sm font-medium text-neutral-950 transition-[transform,background-color] duration-150 ease-out hover:bg-white active:scale-[0.98]"
            >
              Sign in with Google
            </Button>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <UserAction />
      </Suspense>

      <footer className="border-t border-neutral-900 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} TanStackBoilerplate, built by{" "}
            <a
              href="https://github.com/madearga"
              target="_blank"
              rel="noreferrer noopener"
              className="text-neutral-300 transition-colors hover:text-white"
            >
              madearga
            </a>
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="https://github.com/madearga/tanstackboilerplate"
              target="_blank"
              rel="noreferrer noopener"
              className="text-neutral-400 transition-colors hover:text-neutral-100"
            >
              GitHub
            </a>
            <a
              href="https://tanstack.com/start/latest"
              target="_blank"
              rel="noreferrer noopener"
              className="text-neutral-400 transition-colors hover:text-neutral-100"
            >
              TanStack Start
            </a>
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </div>
  );
}

function UserAction() {
  const { data: user } = useSuspenseQuery(authQueryOptions());

  // The page already asks for sign-in once, above. A second invitation would be the same action twice.
  if (!user) return null;

  return (
    <section className="border-t border-neutral-900 px-6 py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-5 rounded-lg border border-emerald-500/30 bg-neutral-900/40 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-emerald-400 uppercase">
            session active
          </p>
          <p className="mt-2 text-base text-neutral-100">
            Signed in as {user.name || user.email}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            render={<Link to="/dashboard" />}
            nativeButton={false}
            className="rounded-md bg-neutral-50 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-[transform,background-color] duration-150 ease-out hover:bg-white active:scale-[0.98]"
          >
            Open dashboard
          </Button>
          <SignOutButton />
        </div>
      </div>
    </section>
  );
}
