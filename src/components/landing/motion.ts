import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REDUCED = "(prefers-reduced-motion: reduce)";

export function reducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia(REDUCED).matches;
}

/** Layout effects avoid a flash of the pre-animation state; SSR falls back to useEffect. */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * ScrollTrigger measures element positions at creation time. Creating the triggers
 * before webfonts settle records stale offsets, which makes below-the-fold sections
 * play their entrance at load and leaves the scroll itself with nothing to show.
 * Every hook below hides its targets first, then builds the timeline once the layout is stable.
 */
function whenLayoutReady(run: () => void): () => void {
  let cancelled = false;
  const document_ = typeof document === "undefined" ? undefined : (document as Document & { fonts?: { ready?: Promise<unknown> } });
  const fonts = document_?.fonts?.ready;
  const settled = fonts ? fonts.catch(() => undefined) : Promise.resolve();
  void settled.then(() => {
    requestAnimationFrame(() => {
      if (!cancelled) run();
    });
  });
  return () => {
    cancelled = true;
  };
}

/**
 * Section entrance: children rise in reading order, once, when the section reaches the viewport.
 * A 60ms stagger keeps the whole run inside the 600ms budget from the motion rules.
 */
export function useReveal<T extends HTMLElement>(childSelector: string, distance = 16) {
  const scopeRef = useRef<T | null>(null);
  useIsoLayoutEffect(() => {
    const root = scopeRef.current;
    if (!root) return;
    const items = gsap.utils.toArray<HTMLElement>(root.querySelectorAll(childSelector));
    if (items.length === 0) return;
    if (reducedMotion()) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }
    gsap.set(items, { y: distance, opacity: 0 });

    let ctx: gsap.Context | undefined;
    const cancel = whenLayoutReady(() => {
      ctx = gsap.context(() => {
        gsap.to(items, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: root, start: "top 82%", once: true, invalidateOnRefresh: true },
        });
      }, root);
    });
    return () => {
      cancel();
      ctx?.revert();
    };
  }, [childSelector, distance]);
  return scopeRef;
}

/**
 * First entry only: the panel arrives first, the copy follows in reading order.
 * Lead 350ms, body 380ms with a 45ms stagger, so the whole run lands inside 600ms.
 * A re-render or a restored session does not replay it.
 */
export function useFirstEntry<T extends HTMLElement>() {
  const scopeRef = useRef<T | null>(null);
  useIsoLayoutEffect(() => {
    const root = scopeRef.current;
    if (!root) return;
    const lead = gsap.utils.toArray<HTMLElement>(root.querySelectorAll('[data-enter="lead"]'));
    const body = gsap.utils.toArray<HTMLElement>(root.querySelectorAll('[data-enter="body"]'));
    const all = [...lead, ...body];
    if (all.length === 0) return;
    if (reducedMotion()) {
      gsap.set(all, { opacity: 1, y: 0 });
      return;
    }
    // Opacity only on the lead: the panel is also the scroll-depth target, so a transform here would fight it.
    gsap.set(lead, { opacity: 0 });
    gsap.set(body, { y: 12, opacity: 0 });

    let ctx: gsap.Context | undefined;
    const cancel = whenLayoutReady(() => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        if (lead.length) tl.to(lead, { opacity: 1, duration: 0.35 }, 0);
        if (body.length) tl.to(body, { y: 0, opacity: 1, duration: 0.38, stagger: 0.045 }, 0.06);
      }, root);
    });
    return () => {
      cancel();
      ctx?.revert();
    };
  }, []);
  return scopeRef;
}

/**
 * Hero depth: the panel is the protagonist and grows while the grid behind it drifts slower.
 * The headline is the graphic layer; body copy and the button never transform.
 */
export function useHeroDepth<T extends HTMLElement>(panelSelector: string, gridSelector: string) {
  const scopeRef = useRef<T | null>(null);
  useIsoLayoutEffect(() => {
    const root = scopeRef.current;
    if (!root) return;
    if (reducedMotion()) return;
    const panel = root.querySelector<HTMLElement>(panelSelector);
    const grid = root.querySelector<HTMLElement>(gridSelector);
    if (!panel && !grid) return;

    let ctx: gsap.Context | undefined;
    const cancel = whenLayoutReady(() => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        if (grid) tl.to(grid, { yPercent: 7, ease: "none" }, 0);
        if (panel) tl.to(panel, { scale: 1.06, y: -30, ease: "none" }, 0);
      }, root);
    });
    return () => {
      cancel();
      ctx?.revert();
    };
  }, [panelSelector, gridSelector]);
  return scopeRef;
}
