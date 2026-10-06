import { useReveal } from "~/components/landing/motion";

const STEPS = [
  {
    command: "git clone https://github.com/madearga/tanstackboilerplate",
    note: "The toolchain is pinned, so corepack installs pnpm 10.34.6 for you.",
  },
  {
    command: "pnpm install && cp .env.example .env",
    note: "The example file lists the three variables the app requires.",
  },
  {
    command: "pnpm auth:secret",
    note: "Prints a value for BETTER_AUTH_SECRET. Paste it into .env.",
  },
  {
    command: "pnpm dev",
    note: "Serves on port 3000 with Google sign-in live.",
  },
] as const;

export default function StepsSection() {
  const scope = useReveal<HTMLElement>("[data-reveal]");

  return (
    <section ref={scope} className="border-b border-neutral-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 data-reveal className="font-mono text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
          Four commands to a running app
        </h2>
        <p data-reveal className="mt-4 max-w-xl text-lg text-neutral-300">
          Nothing is stubbed. Every step below is the real command from the repository.
        </p>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 sm:grid-cols-2">
          {STEPS.map((step, i) => (
            <li key={step.command} data-reveal className="bg-neutral-950 p-6">
              <span className="font-mono text-[11px] text-neutral-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-mono text-[13px] break-all text-neutral-100">
                <span className="text-neutral-600 select-none">$ </span>
                {step.command}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">{step.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
