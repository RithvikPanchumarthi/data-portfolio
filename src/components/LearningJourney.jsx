import React from 'react';
import { BookOpen, Code, Award } from 'lucide-react';
import { learning } from '../data/learning.js';
import { profile } from '../data/profile.js';
import github from '../data/github.json';
import { getThemeClass } from '../utils/themeConfig.js';
import { useTheme } from '../hooks/useTheme.js';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const KIND = {
  repo: { label: 'Built', icon: Code, iconClass: 'iconCyan' },
  course: { label: 'Studied', icon: BookOpen, iconClass: 'iconViolet' },
  cert: { label: 'Certified', icon: Award, iconClass: 'iconAmber' },
};

const repoUrl = Object.fromEntries(github.repos.map((repo) => [repo.name, repo.htmlUrl]));

const timeline = [
  ...learning,
  ...profile.certifications.map((cert) => ({
    year: Number(String(cert.date).match(/\d{4}/)?.[0]) || 0,
    title: cert.name,
    kind: 'cert',
    summary: cert.issuer,
    repos: [],
  })),
].sort((a, b) => b.year - a.year);

const LearningJourney = () => {
  const theme = useTheme();

  return (
    <section id="learning" className={`section-padding ${getThemeClass(theme, 'backgroundAbout')} transition-all duration-300`}>
      <div className="container-max">
        <SectionHeader
          theme={theme}
          heading="headingAbout"
          title="Learning Journey"
          subtitle="What I have studied and built along the way, newest first."
        />

        <ol className="relative max-w-3xl mx-auto">
          <span aria-hidden="true" className={`absolute left-5 top-2 bottom-2 w-0.5 ${getThemeClass(theme, 'timelineRail')}`} />
          {timeline.map((item) => {
            const { label, icon: Icon, iconClass } = KIND[item.kind];
            return (
              <Reveal as="li" key={`${item.year}-${item.title}`} className="relative pl-16 pb-10 last:pb-0">
                <div className={`absolute left-0 top-0 p-2.5 rounded-full ${getThemeClass(theme, iconClass)}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className={`${getThemeClass(theme, 'cardSkill')} rounded-xl p-5`}>
                  <div className={`flex items-center gap-2 text-xs font-medium uppercase tracking-wide ${getThemeClass(theme, 'textTertiary')}`}>
                    <span>{item.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{label}</span>
                  </div>
                  <h3 className={`mt-1 text-lg font-semibold ${getThemeClass(theme, 'textPrimary')}`}>{item.title}</h3>
                  {item.summary && (
                    <p className={`mt-2 text-sm leading-relaxed ${getThemeClass(theme, 'textSecondary')}`}>{item.summary}</p>
                  )}
                  {item.repos.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.repos.filter((name) => repoUrl[name]).map((name) => (
                        <a
                          key={name}
                          href={repoUrl[name]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${getThemeClass(theme, 'tagEmerald')}`}
                        >
                          {name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default LearningJourney;
