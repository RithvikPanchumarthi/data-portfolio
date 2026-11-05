import React, { useEffect, useRef } from 'react';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Accessible detail dialog shared by project and repo cards.
 * item: { title, subtitle?, body, tags?: [], links?: [{ label, href, kind: 'github' | 'demo' }],
 *         architecture?: { flow: [{ label, note }], controls?: [{ label, note }] } }
 */
/** Left-to-right data flow (top-to-bottom on phones) plus governance controls. */
const Architecture = ({ flow, controls = [] }) => (
  <figure className="mt-8 border border-border bg-background p-4 sm:p-6">
    <figcaption className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
      Architecture
    </figcaption>
    <ol className="flex flex-col sm:flex-row sm:items-stretch gap-2">
      {flow.map((step, index) => (
        <React.Fragment key={step.label}>
          {index > 0 && (
            <li aria-hidden="true" className="flex items-center justify-center text-muted-foreground/70">
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </li>
          )}
          <li className="sm:flex-1 border border-border bg-card px-3 py-3">
            <p className="font-mono text-xs text-foreground">{step.label}</p>
            <p className="mt-1 text-xs text-muted-foreground leading-snug">{step.note}</p>
          </li>
        </React.Fragment>
      ))}
    </ol>
    {controls.length > 0 && (
      <dl className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
        {controls.map((control) => (
          <div key={control.label} className="border-t-2 border-accent bg-card px-3 py-3">
            <dt className="text-xs text-foreground tracking-widest uppercase">{control.label}</dt>
            <dd className="mt-1 text-xs text-muted-foreground leading-snug">{control.note}</dd>
          </div>
        ))}
      </dl>
    )}
  </figure>
);

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

        {item.architecture && <Architecture {...item.architecture} />}

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
