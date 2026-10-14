import React, { useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection.js';
import { useScrollVisibility } from '../hooks/useScrollVisibility.js';

const QUOTE =
  'Data is the new oil, but unlike oil, data is reusable and grows more valuable with use.';

const IDENTITY = 'Rithvik Panchumarthi | Agentic Data Engineer';

const SOCIAL_LINKS = [
  { href: 'https://github.com/RithvikPanchumarthi', label: 'GitHub', external: true },
  { href: 'https://www.linkedin.com/in/rithvikpanchumarthi/', label: 'LinkedIn', external: true },
  { href: 'mailto:rithvikpanchumarthi@gmail.com', label: 'Email', external: false },
];

const linkClass = 'text-sm text-foreground hover:text-accent transition-colors';

const navItemClass = (isActive) =>
  `text-sm text-foreground transition-all duration-300 relative py-1 hover:text-accent ${
    isActive ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent' : ''
  }`;

const SocialLinks = () =>
  SOCIAL_LINKS.map(({ href, label, external }) => (
    <a
      key={label}
      href={href}
      aria-label={label}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={linkClass}
    >
      {label}
    </a>
  ));

const Header = ({ sections }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const active = useActiveSection(sections.map((section) => section.id));
  const isVisible = useScrollVisibility();

  const scrollToSection = (sectionId) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-accent/40">
        <div className="flex items-center justify-between gap-3 px-6 py-3 md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-6 md:px-10">
          <h1 className="min-w-0 text-sm font-medium tracking-tight leading-snug text-foreground">
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              aria-label={`${IDENTITY} — go to top`}
              className="text-left hover:text-accent transition-colors md:whitespace-nowrap"
            >
              {IDENTITY}
            </button>
          </h1>
          <p className="hidden min-w-0 text-center text-xs italic leading-relaxed text-muted-foreground md:block">
            {QUOTE}
          </p>
          <div className="hidden items-center justify-end gap-6 md:flex">
            <SocialLinks />
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="shrink-0 text-sm text-foreground md:hidden"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        <div className="flex items-center gap-4 px-6 pb-2 md:hidden">
          <SocialLinks />
        </div>
        {mobileMenuOpen && (
          <div className="flex flex-col items-start gap-3 px-6 pb-4 md:hidden">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                aria-current={active === id ? 'location' : undefined}
                className={navItemClass(active === id)}
              >
                {label}
              </button>
            ))}
          </div>
        )}
        <p className="px-6 pb-3 text-[11px] leading-snug italic text-muted-foreground line-clamp-2 md:hidden">
          {QUOTE}
        </p>
      </header>

      <nav
        className={`hidden md:block fixed bottom-0 right-0 z-50 p-6 md:p-10 pointer-events-none transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
      >
        <div className={`flex flex-col items-end gap-3 pointer-events-auto ${isVisible ? '' : 'pointer-events-none'}`}>
          {sections.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollToSection(id)}
              aria-current={active === id ? 'location' : undefined}
              className={navItemClass(active === id)}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
