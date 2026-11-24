import React from 'react';
import { hasExperience, portfolioData } from '../data/portfolioData.js';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

const { profile, site } = portfolioData;
const copy = site.experience;

const formatPeriod = (start, end) => `${start} — ${end ?? copy.presentLabel}`;

const Experience = () => {
  if (!hasExperience) return null;

  return (
    <section id="experience">
      <div className="section-padding">
        <div className="container-max">
          <SectionHeader
            label={copy.label}
            title={copy.title}
            subtitle={copy.subtitle}
          />

          <div className="space-y-0">
            {profile.experience.map((job, index) => (
              <Reveal
                as="article"
                key={`${job.company}-${job.role}-${job.start}`}
                delay={index * 0.08}
                className="border-t border-border py-8 md:py-12 lg:py-16"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                  <div className="lg:col-span-5">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-foreground mb-2">
                      {job.role}
                    </h3>
                    <p className="text-base lg:text-lg text-muted-foreground">{job.company}</p>
                    {job.location && (
                      <p className="text-sm text-muted-foreground/80 mt-2">{job.location}</p>
                    )}
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-sm text-muted-foreground tracking-widest uppercase">
                      {formatPeriod(job.start, job.end)}
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    {job.highlights?.length > 0 && (
                      <ul className="text-muted-foreground leading-relaxed text-sm lg:text-base space-y-3">
                        {job.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>

      <div id="education" className="section-padding bg-secondary">
        <div className="container-max">
          <SectionHeader label={copy.educationLabel} title={copy.educationTitle} />

          <div className="space-y-0 mb-24">
            {profile.education.map((edu) => (
              <Reveal
                key={`${edu.school}-${edu.degree}`}
                className="border-t border-border py-10 md:py-14"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                  <div className="lg:col-span-7">
                    <h3 className="text-xl lg:text-2xl font-light text-foreground mb-3">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                      {edu.school}
                    </p>
                  </div>
                  <div className="lg:col-span-5 lg:text-right">
                    {(edu.start || edu.end) && (
                      <p className="text-sm text-muted-foreground tracking-widest uppercase">
                        {[edu.start, edu.end].filter(Boolean).join(' — ')}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-border" />
          </div>

          {profile.certifications.length > 0 && (
            <>
              <SectionHeader label={copy.certificationsLabel} title={copy.certificationsTitle} />
              <div className="space-y-0">
                {profile.certifications.map((cert, index) => (
                  <Reveal
                    key={cert.name}
                    delay={index * 0.06}
                    className="border-t border-border py-6 md:py-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl text-foreground font-light">
                          {cert.name}
                        </h3>
                        {cert.issuer && (
                          <p className="text-sm text-muted-foreground mt-1 md:mt-2">
                            {copy.certifiedPrefix} — {cert.issuer}
                          </p>
                        )}
                      </div>
                      {cert.date && (
                        <span className="text-sm text-muted-foreground/80">{cert.date}</span>
                      )}
                    </div>
                  </Reveal>
                ))}
                <div className="border-t border-border" />
              </div>
            </>
          )}

          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-12 text-sm text-muted-foreground hover:text-accent transition-colors underline underline-offset-4"
          >
            {copy.linkedinCta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
