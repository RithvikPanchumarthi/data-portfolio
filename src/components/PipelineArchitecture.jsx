import React, { useState } from 'react';
import { pipelineContext, pipelineStages, pipelineRails } from '../data/pipelines.js';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const toneBar = {
  neutral: 'bg-muted',
  bronze: 'bg-bronze',
  silver: 'bg-silver',
  gold: 'bg-gold',
};

const Connector = () => (
  <li aria-hidden="true" className="flex items-center justify-center text-muted-foreground/70 text-lg lg:px-1">
    <span className="lg:hidden">↓</span>
    <span className="hidden lg:inline">→</span>
  </li>
);

const PipelineArchitecture = () => {
  const [activeKey, setActiveKey] = useState('silver');
  const active = pipelineStages.find((stage) => stage.key === activeKey) ?? pipelineStages[0];

  return (
    <section id="pipelines" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="How I build"
          title={<>MEDALLION<br />PIPELINES</>}
          subtitle={pipelineContext.summary}
        />

        <Reveal>
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-8">
            {pipelineContext.role} · select a layer
          </p>

          <ol className="flex flex-col lg:flex-row lg:items-stretch gap-3 lg:gap-2">
            {pipelineStages.map((stage, index) => {
              const selected = stage.key === active.key;
              return (
                <React.Fragment key={stage.key}>
                  {index > 0 && <Connector />}
                  <li className="lg:flex-1">
                    <button
                      type="button"
                      onClick={() => setActiveKey(stage.key)}
                      aria-pressed={selected}
                      className={`w-full h-full text-left border transition-colors p-5 ${
                        selected ? 'border-foreground bg-card' : 'border-border bg-background hover:bg-secondary'
                      }`}
                    >
                      <span className={`block h-1 w-10 mb-4 ${toneBar[stage.tone]}`} />
                      <span className="block font-display text-3xl md:text-4xl text-foreground">{stage.name}</span>
                      <span className="block mt-2 text-sm text-muted-foreground leading-relaxed">{stage.summary}</span>
                    </button>
                  </li>
                </React.Fragment>
              );
            })}
          </ol>

          <div
            className="mt-6 border border-border bg-card p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8"
            aria-live="polite"
          >
            <div className="lg:col-span-4">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Layer</p>
              <p className="font-display text-5xl text-foreground">{active.name}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {active.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs text-muted-foreground border border-border rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="lg:col-span-8 space-y-4 text-sm lg:text-base text-muted-foreground leading-relaxed">
              {active.points.map((point) => (
                <li key={point} className="flex gap-4">
                  <span aria-hidden="true" className={`mt-2.5 h-px w-4 shrink-0 ${toneBar[active.tone]}`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="mt-12 grid grid-cols-1 md:grid-cols-3 border-t border-border">
            {pipelineRails.map((rail) => (
              <div key={rail.label} className="py-6 md:pr-8 border-b border-border md:border-b-0">
                <dt className="text-xs text-muted-foreground tracking-widest uppercase">{rail.label}</dt>
                <dd className="mt-2 text-foreground">{rail.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default PipelineArchitecture;
