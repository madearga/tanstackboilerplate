import { useReveal } from "~/components/landing/motion";

const FACTS = [
  {
    claim: "Google sign-in works end to end",
    evidence: "Sign-up, session read, and sign-in each returned 200 against Postgres.",
  },
  {
    claim: "Four auth tables ship with the repo",
    evidence: "user, session, account, verification, with indexes, as a Drizzle migration.",
  },
  {
    claim: "The toolchain does not drift",
    evidence: "packageManager pins pnpm 10.34.6, so a clone installs what the lockfile expects.",
  },
  {
    claim: "CI runs on every pull request",
    evidence: "Install, typecheck, and build, with the third-party actions pinned by commit.",
  },
] as const;

export default function StackSection() {
  const scope = useReveal<HTMLElement>("[data-reveal]", 20);

  return (
    <section ref={scope} className="border-b border-neutral-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 data-reveal className="font-mono text-[11px] tracking-[0.2em] text-neutral-500 uppercase">
          Wired, not promised
        </h2>
        <p data-reveal className="mt-4 max-w-xl text-lg text-neutral-300">
          Four claims this repository can back up right now.
        </p>

        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          {FACTS.map((fact) => (
            <div key={fact.claim} data-reveal className="border-l border-emerald-500/40 pl-5">
              <dt className="text-base font-medium text-neutral-100">{fact.claim}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-neutral-500">{fact.evidence}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
