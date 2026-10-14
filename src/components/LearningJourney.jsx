import React from 'react';
import { learning } from '../data/learning.js';
import { profile } from '../data/profile.js';
import github from '../data/github.json';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const KIND = {
  repo: { label: 'Built' },
  course: { label: 'Studied' },
  cert: { label: 'Certified' },
};

const repoUrl = Object.fromEntries(github.repos.map((repo) => [repo.name, repo.htmlUrl]));

const timeline = [
  ...learning,
  // Only dated certifications fit the timeline; the rest are listed under Experience.
  ...profile.certifications
    .map((cert) => ({
      year: Number(String(cert.date).match(/\d{4}/)?.[0]),
      title: cert.name,
      kind: 'cert',
      summary: cert.issuer,
      repos: [],
    }))
    .filter((item) => item.year),
].sort((a, b) => b.year - a.year);

const LearningJourney = () => (
  <section id="learning" className="section-padding bg-secondary">
    <div className="container-max">
      <SectionHeader
        label="Timeline"
        title="LEARNING"
        subtitle="What I have studied and built along the way, newest first."
      />

      <div className="space-y-0">
        {timeline.map((item, index) => {
          const { label } = KIND[item.kind];
          return (
            <Reveal
              key={`${item.year}-${item.title}`}
              delay={index * 0.06}
              className="block border-t border-border py-6 md:py-8 hover:bg-background/60 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl text-foreground font-light">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 md:mt-2">
                    {label}
                    {item.summary ? ` — ${item.summary}` : ''}
                  </p>
                  {item.repos.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-4">
                      {item.repos.filter((name) => repoUrl[name]).map((name) => (
                        <a
                          key={name}
                          href={repoUrl[name]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-accent transition-colors underline underline-offset-4"
                        >
                          {name} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-sm text-muted-foreground/80 shrink-0">{item.year}</span>
              </div>
            </Reveal>
          );
        })}
        <div className="border-t border-border" />
      </div>
    </div>
  </section>
);

export default LearningJourney;
