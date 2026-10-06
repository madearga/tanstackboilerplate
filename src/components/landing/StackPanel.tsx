const STACK = [
  { name: "TanStack Start", detail: "1.168 · SSR + server functions", state: "wired" },
  { name: "TanStack Router", detail: "1.170 · file routes, typed", state: "wired" },
  { name: "better-auth", detail: "1.7.7 · Google sign-in", state: "wired" },
  { name: "Drizzle + Postgres", detail: "4 auth tables, pushed", state: "wired" },
  { name: "Tailwind + shadcn/ui", detail: "4.3 · base-ui primitives", state: "wired" },
  { name: "Nitro", detail: "builds and serves the output", state: "wired" },
  { name: "GitHub Actions", detail: "install, typecheck, build", state: "wired" },
] as const;

/**
 * The protagonist is the wiring itself: a boilerplate is worth what already runs,
 * so the hero shows the artifact instead of describing it.
 */
export default function StackPanel() {
  return (
    <figure className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950/80 shadow-2xl shadow-black/40 backdrop-blur">
      <figcaption className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/60 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-neutral-700" />
        <span className="size-2.5 rounded-full bg-neutral-700" />
        <span className="size-2.5 rounded-full bg-neutral-700" />
        <span className="ml-2 font-mono text-[11px] tracking-widest text-neutral-500 uppercase">
          what is already running
        </span>
      </figcaption>

      <ul className="divide-y divide-neutral-900">
        {STACK.map((row) => (
          <li key={row.name} className="flex items-baseline justify-between gap-4 px-4 py-2.5">
            <span className="font-mono text-[13px] text-neutral-200">{row.name}</span>
            <span className="flex items-baseline gap-3 text-right">
              <span className="font-mono text-[11px] text-neutral-500">{row.detail}</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-emerald-400 uppercase">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                {row.state}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
