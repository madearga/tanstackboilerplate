import { useRef, useState } from "react";

interface CommandChipProps {
  command: string;
  label: string;
}

/**
 * The copy action shows where the change comes from: the check is drawn inside the
 * chip it belongs to, and the chip settles back on its own.
 */
export default function CommandChip({ command, label }: CommandChipProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[11px] tracking-widest text-neutral-500 uppercase">{label}</span>
      <button
        type="button"
        onClick={copy}
        aria-label={"Copy command: " + command}
        className={[
          "group flex items-center justify-between gap-4 rounded-md border px-3 py-2 text-left",
          "font-mono text-[13px] transition-[transform,background-color,border-color] duration-200 ease-out",
          "active:scale-[0.99]",
          copied
            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
            : "border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900",
        ].join(" ")}
      >
        <span className="min-w-0 break-all">
          <span className="text-neutral-600 select-none">$ </span>
          {command}
        </span>
        <span className="flex shrink-0 items-center gap-1.5 text-[11px] tracking-wider uppercase">
          {copied ? (
            <>
              <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
                <path
                  d="M3 8.5 6.2 11.7 13 4.9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="[stroke-dasharray:14] [stroke-dashoffset:0] motion-safe:animate-[draw_260ms_ease-out]"
                />
              </svg>
              Copied
            </>
          ) : (
            "Copy"
          )}
        </span>
      </button>
    </div>
  );
}
