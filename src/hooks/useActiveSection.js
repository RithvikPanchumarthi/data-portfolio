import { useEffect, useState } from 'react';

/**
 * Id of the section currently in the middle of the viewport, for nav highlighting.
 */
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(null);
  const key = ids.join(',');

  useEffect(() => {
    const ordered = key.split(',').filter(Boolean);
    if (ordered.length === 0) return undefined;

    const observers = [];

    ordered.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(sectionId);
            }
          });
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [key]);

  return active;
};
