import { useEffect, useState } from "react";

export function useElementVisible(elementId, { rootMargin = "0px", threshold = 0 } = {}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(elementId);
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [elementId, rootMargin, threshold]);

  return visible;
}
