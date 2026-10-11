import React, { useEffect, useRef } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import { getThemeClass } from '../utils/themeConfig.js';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Accessible detail dialog shared by project and repo cards.
 * item: { title, subtitle?, body, tags?: [], links?: [{ label, href, kind: 'github' | 'demo' }] }
 */
const DetailModal = ({ item, theme, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!item) return;
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
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
        className={`${getThemeClass(theme, 'modal')} relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-6 sm:p-8`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close details"
          className={`absolute top-4 right-4 p-2 rounded-lg ${getThemeClass(theme, 'filterInactive')}`}
        >
          <X size={18} />
        </button>

        <h3 id="detail-modal-title" className={`text-2xl font-bold pr-10 ${getThemeClass(theme, 'textPrimary')}`}>
          {item.title}
        </h3>
        {item.subtitle && (
          <p className={`mt-1 text-sm ${getThemeClass(theme, 'textTertiary')}`}>{item.subtitle}</p>
        )}

        <p className={`mt-4 leading-relaxed ${getThemeClass(theme, 'textSecondary')}`}>{item.body}</p>

        {item.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className={`px-3 py-1 text-xs font-medium rounded-full ${getThemeClass(theme, 'tagCyan')}`}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {item.links?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {item.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${getThemeClass(theme, link.kind === 'demo' ? 'buttonDemo' : 'buttonSecondary')}`}
              >
                {link.kind === 'demo' ? <ExternalLink size={16} /> : <Github size={16} />}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailModal;
