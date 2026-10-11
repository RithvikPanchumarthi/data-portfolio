import React from 'react';
import { getThemeClass } from '../utils/themeConfig.js';

const SectionHeader = ({ theme, title, subtitle, heading = 'headingProjects' }) => (
  <div className="text-center mb-16">
    <h2 className={`text-4xl md:text-5xl font-bold ${getThemeClass(theme, heading)} mb-4`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-xl ${getThemeClass(theme, 'textSecondary')} max-w-3xl mx-auto`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
