import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Suspense } from "react";
import { SignOutButton } from "~/components/sign-out-button";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import { authQueryOptions } from "~/lib/auth/queries";

// Landing page components
import BackgroundEffects from "~/components/landing/BackgroundEffects";
import HeroSection from "~/components/landing/HeroSection";
import TechStackShowcase from "~/components/landing/TechStackShowcase";
import CodePlayground from "~/components/landing/CodePlayground";
import FeatureGrid from "~/components/landing/FeatureGrid";
import GettingStarted from "~/components/landing/GettingStarted";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Landing Page Sections */}
      <HeroSection />

      {/* Sign-in CTA Section */}
      <section className="py-24 px-4 bg-black border-t border-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="relative p-12 border border-gray-800 rounded-3xl bg-gray-900/30 backdrop-blur-sm text-center">
            <h3 className="text-2xl md:text-3xl font-thin text-white mb-4">
              Ready to build faster?
            </h3>
            <p className="text-gray-400 font-light mb-8 max-w-2xl mx-auto">
              Join thousands of developers using TanStackBoilerplate to ship production-ready apps in record time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                render={<Link to="/login" />}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors"
                size="lg"
                nativeButton={false}
              >
                Sign In
              </Button>
              <Button
                render={<Link to="/signup" />}
                variant="outline"
                className="w-full sm:w-auto px-8 py-4 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-gray-600 hover:bg-gray-900/50 transition-colors"
                size="lg"
                nativeButton={false}
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TechStackShowcase />
      <CodePlayground />
      <FeatureGrid />
      <GettingStarted />

      {/* User Authentication Section - For logged in users */}
      <section className="py-24 px-4 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <Suspense fallback={<div className="py-6">Loading user...</div>}>
            <UserAction />
          </Suspense>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400">
              © 2024 TanStackBoilerplate. Built with ❤️ by{" "}
              <a
                href="https://github.com/madearga"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                target="_blank"
                rel="noreferrer noopener"
              >
                madearga
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/madearga/tanstackboilerplate"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
              <a
                href="https://tanstack.com/start/latest"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noreferrer noopener"
              >
                TanStack Start
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function UserAction() {
  const { data: user } = useSuspenseQuery(authQueryOptions());

  if (user) {
    return (
      <div className="relative">
        {/* Background glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-2xl blur-2xl" />

        <div className="relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Welcome back, {user.name}! 👋
          </h3>
          <p className="text-gray-400 mb-6">
            You're signed in and ready to build amazing things
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              render={<Link to="/dashboard" />}
              size="lg"
              nativeButton={false}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]"
            >
              Go to Dashboard
            </Button>
            <Button
              variant="outline"
              onClick={() => {}}
              size="lg"
              nativeButton={false}
            >
              <SignOutButton />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Background glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-2xl" />

      <div className="relative p-8 bg-gray-900/50 border border-gray-800 rounded-xl backdrop-blur-sm">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Ready to get started?
        </h3>
        <p className="text-gray-400 mb-6">
          Sign in to access your dashboard and start building
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            render={<Link to="/login" />}
            size="lg"
            nativeButton={false}
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Sign In
          </Button>
          <Button
            render={<Link to="/signup" />}
            variant="outline"
            size="lg"
            nativeButton={false}
          >
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
}
