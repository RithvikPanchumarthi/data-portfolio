import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Reveal-on-scroll. Returns [ref, className]: attach the ref to the element and
 * add the class. With reduced motion the element is shown immediately, unanimated.
 */
export const useReveal = () => {
  const ref = useRef(null);
  const [state, setState] = useState(() => (prefersReducedMotion() ? 'static' : 'hidden'));

  useEffect(() => {
    if (state !== 'hidden' || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('shown');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [state]);

  const className = { hidden: 'opacity-0', shown: 'animate-slide-up', static: '' }[state];
  return [ref, className];
};
