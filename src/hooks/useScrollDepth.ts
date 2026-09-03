import { useEffect } from "react";

/**
 * Publishes scroll progress as --scroll-y (px) and --scroll-progress (0..1) on
 * <html>, so purely decorative layers can drift in Z without React re-renders.
 */
export const useScrollDepth = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-y", `${window.scrollY}`);
      root.style.setProperty(
        "--scroll-progress",
        `${max > 0 ? window.scrollY / max : 0}`,
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
};

export default useScrollDepth;
