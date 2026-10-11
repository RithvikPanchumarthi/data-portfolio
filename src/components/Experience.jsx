import React from 'react';
import { Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';
import { profile } from '../data/profile.js';
import { getThemeClass } from '../utils/themeConfig.js';
import { useTheme } from '../hooks/useTheme.js';
import SectionHeader from './SectionHeader';
import Reveal from './Reveal';

export const hasExperience = profile.experience.length > 0 || profile.education.length > 0;

const Experience = () => {
  const theme = useTheme();
  if (!hasExperience) return null;

  return (
    <section id="experience" className={`section-padding ${getThemeClass(theme, 'backgroundNeutral')} transition-all duration-300`}>
      <div className="container-max">
        <SectionHeader
          theme={theme}
          heading="headingAbout"
          title="Experience"
          subtitle="Roles, education and certifications, from my LinkedIn profile."
        />

        <div className="grid lg:grid-cols-3 gap-10">
          <ol className="lg:col-span-2 relative">
            <span aria-hidden="true" className={`absolute left-5 top-2 bottom-2 w-0.5 ${getThemeClass(theme, 'timelineRail')}`} />
            {profile.experience.map((job) => (
              <Reveal as="li" key={`${job.company}-${job.role}-${job.start}`} className="relative pl-16 pb-8 last:pb-0">
                <div className={`absolute left-0 top-0 p-2.5 rounded-full ${getThemeClass(theme, 'iconEmerald')}`}>
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className={`${getThemeClass(theme, 'cardSkill')} rounded-xl p-6`}>
                  <h3 className={`text-lg font-semibold ${getThemeClass(theme, 'textPrimary')}`}>{job.role}</h3>
                  <p className={`font-medium ${getThemeClass(theme, 'accentCyan')}`}>{job.company}</p>
                  <p className={`mt-1 text-sm flex flex-wrap items-center gap-x-3 ${getThemeClass(theme, 'textTertiary')}`}>
                    <span>{job.start} – {job.end ?? 'Present'}</span>
                    {job.location && (
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                    )}
                  </p>
                  {job.highlights?.length > 0 && (
                    <ul className={`mt-3 space-y-1.5 text-sm list-disc pl-5 ${getThemeClass(theme, 'textSecondary')}`}>
                      {job.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="space-y-6">
            {profile.education.length > 0 && (
              <Reveal className={`${getThemeClass(theme, 'cardSkill')} rounded-xl p-6`}>
                <h3 className={`flex items-center gap-2 font-semibold mb-4 ${getThemeClass(theme, 'textPrimary')}`}>
                  <GraduationCap className={`w-5 h-5 ${getThemeClass(theme, 'accentViolet')}`} />
                  Education
                </h3>
                <ul className="space-y-4">
                  {profile.education.map((edu) => (
                    <li key={`${edu.school}-${edu.degree}`}>
                      <p className={`font-medium ${getThemeClass(theme, 'textPrimary')}`}>{edu.degree}</p>
                      <p className={`text-sm ${getThemeClass(theme, 'textSecondary')}`}>{edu.school}</p>
                      {(edu.start || edu.end) && (
                        <p className={`text-xs ${getThemeClass(theme, 'textTertiary')}`}>
                          {[edu.start, edu.end].filter(Boolean).join(' – ')}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {profile.certifications.length > 0 && (
              <Reveal className={`${getThemeClass(theme, 'cardSkill')} rounded-xl p-6`}>
                <h3 className={`flex items-center gap-2 font-semibold mb-4 ${getThemeClass(theme, 'textPrimary')}`}>
                  <Award className={`w-5 h-5 ${getThemeClass(theme, 'accentAmber')}`} />
                  Certifications
                </h3>
                <ul className="space-y-3">
                  {profile.certifications.map((cert) => (
                    <li key={cert.name}>
                      <p className={`text-sm font-medium ${getThemeClass(theme, 'textPrimary')}`}>{cert.name}</p>
                      <p className={`text-xs ${getThemeClass(theme, 'textTertiary')}`}>
                        {[cert.issuer, cert.date].filter(Boolean).join(' · ')}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-center text-sm underline ${getThemeClass(theme, 'textSecondary')}`}
            >
              Full profile on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
