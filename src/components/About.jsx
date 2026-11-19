import React from 'react';
import {
  Boxes,
  Database,
  GitMerge,
  ShieldCheck,
  Sigma,
  Workflow,
} from 'lucide-react';
import { logos } from '../data/logos.js';
import { portfolioData } from '../data/portfolioData.js';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const skillIcons = {
  Boxes,
  Database,
  GitMerge,
  ShieldCheck,
  Sigma,
  Workflow,
};

const { about } = portfolioData.site;

const skills = about.skills.map((skill) => ({
  name: skill.name,
  color: skill.color,
  logos: skill.logos?.map((key) => logos[key]).filter(Boolean),
  Icon: skill.icon ? skillIcons[skill.icon] : undefined,
}));

const plate =
  'flex h-9 w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card';

const SkillMark = ({ logos: markLogos, Icon, color }) => (
  <span aria-hidden="true" className="flex shrink-0 -space-x-2">
    {markLogos
      ? markLogos.map((src) => (
          <span key={src} className={plate}>
            <img src={src} alt="" className="h-5 w-5 lg:h-6 lg:w-6 object-contain" loading="lazy" />
          </span>
        ))
      : (
        <span className={`${plate} text-accent`} style={color ? { color } : undefined}>
          <Icon className="h-4 w-4 lg:h-5 lg:w-5" strokeWidth={1.75} />
        </span>
      )}
  </span>
);

const About = () => (
  <section id="about">
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader label={about.label} />

        <div className="mb-24 lg:mb-32 lg:max-w-[calc(50%-3rem)]">
          <Reveal className="flex items-center">
            <div className="text-base lg:text-lg text-muted-foreground leading-relaxed space-y-6">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <Reveal className="flex items-center lg:text-right">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              {about.current}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex items-center">
            <div className="space-y-8">
              {about.focus.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl lg:text-2xl font-light text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                {about.location}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>

    <div id="skills" className="section-padding bg-secondary">
      <div className="container-max">
        <SectionHeader
          label={about.skillsLabel}
          title={about.skillsTitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-6">
          {skills.map((skill, index) => (
            <Reveal
              key={skill.name}
              delay={index * 0.05}
              className="border-b border-border pb-4 flex items-center gap-4"
            >
              <SkillMark {...skill} />
              <span className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light">
                {skill.name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
