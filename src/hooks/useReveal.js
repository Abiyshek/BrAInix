import { useEffect } from 'react';

/**
 * Adds `.in` to every `.reveal` element as it scrolls into view.
 * Re-runs whenever `key` changes so freshly swapped mode content animates too.
 *
 * A timed fallback reveals anything still hidden, so content can never be
 * stranded invisible on a device where the observer is starved or unsupported.
 */
export default function useReveal(key) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.reveal:not(.in)'));
    if (!nodes.length) return undefined;

    const show = (el) => el.classList.add('in');

    if (!('IntersectionObserver' in window)) {
      nodes.forEach(show);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px' },
    );

    nodes.forEach((n) => io.observe(n));

    // safety net: anything at or above the fold gets shown regardless
    const fallback = setTimeout(() => {
      nodes.forEach((n) => {
        if (n.classList.contains('in')) return;
        if (n.getBoundingClientRect().top < window.innerHeight) {
          show(n);
          io.unobserve(n);
        }
      });
    }, 2500);

    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, [key]);
}
