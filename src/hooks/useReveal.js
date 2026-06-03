import React, { useEffect } from "react";

export function useReveal(productMode, activePage, preloaderActive) {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const siblings = Array.from(e.target.parentElement?.children || []);
          const idx = siblings.indexOf(e.target);
          setTimeout(() => e.target.classList.add("vis"), idx * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.01 });
    
    // Observe all reveal elements (including the new ones)
    document.querySelectorAll(".reveal").forEach(el => {
      // If we switched modes, let's remove "vis" so they can fade-in cleanly again
      el.classList.remove("vis");
      obs.observe(el);
    });
    
    return () => obs.disconnect();
  }, [productMode, activePage, preloaderActive]);
}
