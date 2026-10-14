import React from 'react';
import Reveal from './Reveal';

const SectionHeader = ({ label, title, subtitle }) => (
  <>
    {label && (
      <Reveal className="mb-16">
        <span className="text-sm text-muted-foreground tracking-widest uppercase">{label}</span>
        <div className="w-6 h-px bg-accent mt-2" />
      </Reveal>
    )}
    {title && (
      <Reveal>
        <h2 className="font-display text-[10vw] lg:text-section leading-none tracking-tight text-foreground">
          {title}
        </h2>
      </Reveal>
    )}
    {subtitle && (
      <Reveal delay={0.1}>
        <p className="mt-6 mb-16 lg:mb-24 text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </Reveal>
    )}
    {!subtitle && title && <div className="mb-16 lg:mb-24" />}
  </>
);

export default SectionHeader;
