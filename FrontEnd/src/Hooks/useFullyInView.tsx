import { useEffect, useRef, useState } from "react";

function useFullyInView(threshold = 0.5) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFullyVisible(entry.intersectionRatio >= threshold);
      },
      { threshold } // 1.0 = fully visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isFullyVisible };
}
export default useFullyInView;
