import type { ReactRef } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

function useActiveOnScroll(threshold = 0.9, mainRef: ReactRef) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;
      const current = mainRef.current.scrollTop;
      setScrollDir(current > lastScroll.current ? "down" : "up");
      lastScroll.current = current <= 0 ? 0 : current;
    };
    const container = mainRef.current;
    container?.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (scrollDir === "down" && entry.intersectionRatio >= threshold) {
          setIsActive(true);
        } else if (scrollDir === "up" && entry.intersectionRatio <= threshold) {
          setIsActive(false);
        }
      },
      { threshold: [0, threshold, 1] }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      if (el) observer.unobserve(el);
    };
  }, [threshold, scrollDir, mainRef]);

  return { ref, isActive };
}

export default useActiveOnScroll;
