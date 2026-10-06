import { Link } from "@tanstack/react-router";
import CommandChip from "~/components/landing/CommandChip";
import StackPanel from "~/components/landing/StackPanel";
import { useFirstEntry, useHeroDepth } from "~/components/landing/motion";
import { Button } from "~/components/ui/button";

const CLONE = "git clone https://github.com/madearga/tanstackboilerplate";

export default function HeroSection() {
  const depth = useHeroDepth<HTMLElement>("[data-hero-panel]", "[data-hero-grid]");
  const enter = useFirstEntry<HTMLDivElement>();

  return (
    <section
      ref={depth}
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden border-b border-neutral-900 px-6 py-24"
    >
      {/* Depth layer. Further from the viewer than the panel, so it drifts slower. */}
      <div
        data-hero-grid
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(to_right,var(--color-neutral-700)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-700)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />

      <div ref={enter} className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div>
          <p data-enter="body" className="mb-6 font-mono text-[11px] tracking-[0.2em] text-emerald-400 uppercase">
            TanStack Start · Better Auth · Drizzle
          </p>

          <h1
            data-enter="body"
            className="text-4xl leading-[1.05] font-medium tracking-tight text-neutral-50 sm:text-5xl lg:text-6xl"
          >
            A starting point that is already wired.
          </h1>

          <p data-enter="body" className="mt-6 max-w-lg text-base leading-relaxed text-neutral-400">
            Google sign-in runs against Postgres, the router is typed end to end, and CI
            checks every pull request. Clone it and start on the product instead of the setup.
          </p>

          <div data-enter="body" className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              render={<Link to="/login" />}
              nativeButton={false}
              size="lg"
              className="group gap-2 rounded-md bg-neutral-50 px-6 py-3 text-sm font-medium text-neutral-950 transition-[transform,background-color] duration-150 ease-out hover:bg-white active:scale-[0.98]"
            >
              Sign in with Google
              <span aria-hidden="true" className="transition-transform duration-150 ease-out group-hover:translate-x-0.5">
                →
              </span>
            </Button>
            <a
              href="https://github.com/madearga/tanstackboilerplate"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-md px-2 py-3 text-sm text-neutral-400 transition-colors duration-150 hover:text-neutral-100"
            >
              Read the source
            </a>
          </div>

          <div data-enter="body" className="mt-10 max-w-xl">
            <CommandChip command={CLONE} label="or start from the terminal" />
          </div>
        </div>

        <div data-hero-panel data-enter="lead">
          <StackPanel />
        </div>
      </div>
    </section>
  );
}
