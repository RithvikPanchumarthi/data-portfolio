import { useEffect, useState } from 'react';

/**
 * Id of the section currently in the middle of the viewport, for nav highlighting.
 */
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(null);
  const key = ids.join(',');

  useEffect(() => {
    const ordered = key.split(',');
    const inView = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.isIntersecting ? inView.add(entry.target.id) : inView.delete(entry.target.id)
        );
        setActive(ordered.find((id) => inView.has(id)) ?? null);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    ordered.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [key]);

  return active;
};
