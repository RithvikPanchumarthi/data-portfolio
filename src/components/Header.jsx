import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useActiveSection } from '../hooks/useActiveSection.js';

const SOCIAL_LINKS = [
  { href: 'https://github.com/RithvikPanchumarthi', label: 'GitHub', icon: Github, external: true },
  { href: 'https://www.linkedin.com/in/rithvikpanchumarthi/', label: 'LinkedIn', icon: Linkedin, external: true },
  { href: 'mailto:rithvikpanchumarthi@gmail.com', label: 'Email', icon: Mail, external: false },
];

const SocialLinks = () =>
  SOCIAL_LINKS.map(({ href, label, icon: Icon, external }) => (
    <a
      key={label}
      href={href}
      aria-label={label}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
    >
      <Icon size={20} />
    </a>
  ));

const Header = ({ sections }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const active = useActiveSection(sections.map((section) => section.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Rithvik Panchumarthi
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  aria-current={active === id ? 'location' : undefined}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    active === id
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <SocialLinks />
            <ThemeToggle />
          </div>

          {/* Mobile menu button & Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
              {sections.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  aria-current={active === id ? 'location' : undefined}
                  className={`block w-full text-left px-3 py-2 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors ${
                    active === id
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
