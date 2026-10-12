import React, { useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection.js';
import { useScrollVisibility } from '../hooks/useScrollVisibility.js';

const SOCIAL_LINKS = [
  { href: 'https://github.com/RithvikPanchumarthi', label: 'GitHub', external: true },
  { href: 'https://www.linkedin.com/in/rithvikpanchumarthi/', label: 'LinkedIn', external: true },
  { href: 'mailto:rithvikpanchumarthi@gmail.com', label: 'Email', external: false },
];

const linkClass = 'text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity';

const navItemClass = (isActive) =>
  `text-sm text-white mix-blend-difference transition-all duration-300 relative py-1 hover:opacity-60 ${
    isActive ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white' : ''
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start md:hidden pointer-events-none">
        <div className="relative pointer-events-auto">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="text-sm text-white mix-blend-difference"
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>

          <div
            className={`flex flex-col items-start gap-3 mt-6 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
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
        </div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <SocialLinks />
        </div>
      </div>

      <div className="hidden md:block fixed top-0 right-0 z-50 p-6 md:p-10 pointer-events-none">
        <div className="flex items-center gap-6 justify-end pointer-events-auto">
          <SocialLinks />
        </div>
      </div>

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
