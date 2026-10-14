import React, { useEffect, useRef } from 'react';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Accessible detail dialog shared by project and repo cards.
 * item: { title, subtitle?, body, tags?: [], links?: [{ label, href, kind: 'github' | 'demo' }] }
 */
const DetailModal = ({ item, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!item) return undefined;
    const previouslyFocused = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector(FOCUSABLE)?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-foreground/40 animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card border border-border p-6 sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          Close
        </button>

        <h3 id="detail-modal-title" className="text-2xl md:text-3xl font-light text-foreground pr-16">
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="mt-2 text-sm text-muted-foreground">{item.subtitle}</p>
        )}

        <p className="mt-6 leading-relaxed text-muted-foreground">{item.body}</p>

        {item.tags?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs text-muted-foreground border border-border rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {item.links?.length > 0 && (
          <div className="mt-8 flex flex-col gap-0 border-t border-border">
            {item.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-border py-4 text-sm text-muted-foreground hover:text-accent hover:bg-secondary transition-colors px-2 -mx-2"
              >
                <span className="tracking-widest uppercase">{link.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailModal;
