import React from 'react';
import { aiStats } from '../data/aiStats.js';
import github from '../data/github.json';
import { formatCompact, formatDate } from '../utils/format.js';
import Reveal from './Reveal';

const { cursor } = aiStats;

// Only real values become tiles; a null stat is simply not shown.
const tiles = [
  { label: 'Cursor tokens', value: cursor.tokens },
  { label: 'Cursor agents run', value: cursor.agents },
  { label: 'Longest-running agent', value: cursor.longestRunningAgent },
  { label: 'Public GitHub repos', value: github.repos.filter((repo) => !repo.fork).length },
].filter((tile) => tile.value !== null && tile.value !== undefined);

const BuilderStats = () => (
  <div className="px-4 sm:px-6 md:px-12 lg:px-16 pb-24 md:pb-32 lg:pb-40">
    <div className="container-max">
      <Reveal className="mb-12 lg:mb-16">
        <span className="text-sm text-muted-foreground tracking-widest uppercase">Building with AI</span>
        <div className="w-6 h-px bg-accent mt-2" />
        <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed">
          How I pair AI agents with data engineering fundamentals to ship faster.
        </p>
      </Reveal>

      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-24">
        {tiles.map((tile, index) => (
          <Reveal key={tile.label} delay={index * 0.08}>
            <dt className="text-xs text-muted-foreground tracking-widest uppercase">{tile.label}</dt>
            <dd className="mt-3 font-display text-[12vw] lg:text-large leading-none tracking-tight text-accent">
              {formatCompact(tile.value)}
            </dd>
          </Reveal>
        ))}
      </dl>

      {cursor.models?.length > 0 && (
        <Reveal className="flex flex-wrap items-center gap-3 mb-16 lg:mb-24">
          <span className="text-sm text-muted-foreground tracking-widest uppercase">Models I build with</span>
          {cursor.models.map((model) => (
            <span
              key={model}
              className="px-3 py-1 text-xs text-muted-foreground border border-border rounded-full"
            >
              {model}
            </span>
          ))}
        </Reveal>
      )}

      <div className="space-y-0">
        {aiStats.workflow.map((step, index) => (
          <Reveal
            key={step.tool}
            delay={index * 0.08}
            className="border-t border-border py-8 md:py-10"
          >
            <h3 className="text-xl md:text-2xl font-light text-foreground mb-3">{step.tool}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base max-w-3xl">{step.text}</p>
          </Reveal>
        ))}
        <div className="border-t border-border" />
      </div>

      {cursor.asOf && (
        <p className="mt-10 text-xs text-muted-foreground">
          Cursor stats as of {formatDate(cursor.asOf)} ·{' '}
          <a
            href={cursor.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-accent"
          >
            Cursor profile
          </a>
        </p>
      )}
    </div>
  </div>
);

export default BuilderStats;
