import React from 'react';
import { useReveal } from '../hooks/useReveal.js';

/** Fades its children in when they scroll into view (skipped for reduced motion). */
const Reveal = ({ as: Tag = 'div', className = '', children, ...rest }) => {
  const [ref, revealClass] = useReveal();
  return (
    <Tag ref={ref} className={`${className} ${revealClass}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
