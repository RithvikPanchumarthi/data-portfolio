import { useEffect, useState } from 'react';

/**
 * Id of the section currently in the middle of the viewport, for nav highlighting.
 */
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(null);
  const key = ids.join(',');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    key.split(',').forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [key]);

  return active;
};
