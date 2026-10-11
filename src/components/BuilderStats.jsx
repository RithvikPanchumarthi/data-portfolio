import React from 'react';
import { Bot, Sparkles, Brain } from 'lucide-react';
import { aiStats } from '../data/aiStats.js';
import github from '../data/github.json';
import { getThemeClass } from '../utils/themeConfig.js';
import { formatCompact, formatDate } from '../utils/format.js';
import { useTheme } from '../hooks/useTheme.js';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const { cursor } = aiStats;

// Only real values become tiles; a null stat is simply not shown.
const tiles = [
  { label: 'Cursor tokens', value: cursor.tokens },
  { label: 'Cursor agents run', value: cursor.agents },
  { label: 'Longest-running agent', value: cursor.longestRunningAgent },
  { label: 'Public GitHub repos', value: github.user.publicRepos },
].filter((tile) => tile.value !== null && tile.value !== undefined);

const WORKFLOW_ICONS = [Sparkles, Bot, Brain];
const WORKFLOW_ACCENTS = ['iconCyan', 'iconViolet', 'iconEmerald'];

const BuilderStats = () => {
  const theme = useTheme();

  return (
    <section id="builder" className={`section-padding ${getThemeClass(theme, 'backgroundProjects')} transition-all duration-300`}>
      <div className="container-max">
        <SectionHeader
          theme={theme}
          heading="headingTech"
          title="Building with AI"
          subtitle="How I pair AI agents with data engineering fundamentals to ship faster."
        />

        <dl className="flex flex-wrap justify-center gap-4 mb-14">
          {tiles.map((tile) => (
            <Reveal key={tile.label} className={`${getThemeClass(theme, 'cardSkill')} rounded-xl p-5 w-[calc(50%-0.5rem)] lg:w-64`}>
              <dt className={`text-sm ${getThemeClass(theme, 'textSecondary')}`}>{tile.label}</dt>
              <dd className={`mt-2 text-3xl md:text-4xl font-semibold ${getThemeClass(theme, 'textPrimary')}`}>
                {formatCompact(tile.value)}
              </dd>
            </Reveal>
          ))}
        </dl>

        <div className="grid md:grid-cols-3 gap-6">
          {aiStats.workflow.map((step, index) => {
            const Icon = WORKFLOW_ICONS[index % WORKFLOW_ICONS.length];
            return (
              <Reveal key={step.tool} className={`${getThemeClass(theme, 'card')} rounded-xl p-6`}>
                <div className={`inline-flex p-2.5 rounded-lg mb-4 ${getThemeClass(theme, WORKFLOW_ACCENTS[index % WORKFLOW_ACCENTS.length])}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className={`font-semibold mb-2 ${getThemeClass(theme, 'textPrimary')}`}>{step.tool}</h3>
                <p className={`text-sm leading-relaxed ${getThemeClass(theme, 'textSecondary')}`}>{step.text}</p>
              </Reveal>
            );
          })}
        </div>

        {cursor.asOf && (
          <p className={`mt-8 text-center text-xs ${getThemeClass(theme, 'textTertiary')}`}>
            Cursor stats as of {formatDate(cursor.asOf)} ·{' '}
            <a href={cursor.profileUrl} target="_blank" rel="noopener noreferrer" className="underline">
              Cursor profile
            </a>
          </p>
        )}
      </div>
    </section>
  );
};

export default BuilderStats;
