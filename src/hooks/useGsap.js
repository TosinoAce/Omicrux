import { useEffect } from "react";

// GSAP + ScrollTrigger are loaded on demand (after the page has rendered), so
// they never sit in the critical path. Shared by all home-page scroll scenes.
let gsapPromise;
export const loadGsap = () => {
  gsapPromise ??= Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
    ([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      // Re-measure once fonts and images have settled.
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      return { gsap, ScrollTrigger };
    }
  );
  return gsapPromise;
};

// Runs `setup({ gsap, ScrollTrigger, mm })` scoped to `scopeRef`. Everything
// created inside `mm` (gsap.matchMedia) is reverted automatically on unmount,
// which also restores the static, reduced-motion-friendly layout.
const useGsap = (scopeRef, setup) => {
  useEffect(() => {
    let mm;
    let cancelled = false;
    loadGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled || !scopeRef.current) return;
      mm = gsap.matchMedia(scopeRef.current);
      setup({ gsap, ScrollTrigger, mm });
    });
    return () => {
      cancelled = true;
      mm?.revert();
    };
    // setup is defined inline by each scene and only needs to run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// Media conditions shared by the scenes.
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const FINE_POINTER = "(hover: hover) and (pointer: fine)";
// Mobile header is fixed (56px); pinned scenes start below it.
export const headerOffset = () => (window.matchMedia("(max-width: 981px)").matches ? 56 : 0);

export default useGsap;
