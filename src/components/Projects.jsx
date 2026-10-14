import React, { useCallback, useState } from 'react';
import { projects } from '../data/projects.js';
import DetailModal from './DetailModal';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const monogram = (title) =>
  title
    .split(/\s+/)
    .filter((word) => /[A-Za-z0-9]/.test(word))
    .slice(0, 3)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

const ProjectImage = ({ project }) => {
  const [failed, setFailed] = useState(false);

  if (!project.image || failed) {
    return (
      <div
        role="img"
        aria-label={project.title}
        className="img-plate w-full aspect-[16/10] flex items-center justify-center text-muted-foreground/50 font-display text-6xl md:text-8xl tracking-tight"
      >
        {monogram(project.title)}
      </div>
    );
  }

  return (
    <div className="img-plate">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        onError={() => setFailed(true)}
        className="w-full h-auto img-editorial"
      />
    </div>
  );
};

const projectLinks = (project) => [
  { label: 'View Code', href: project.github, kind: 'github' },
  ...(project.demo ? [{ label: 'Live Demo', href: project.demo, kind: 'demo' }] : []),
];

const toModalItem = (project) => ({
  title: project.title,
  body: project.description,
  tags: project.technologies,
  links: projectLinks(project),
});

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) =>
        filter === 'featured'
          ? project.featured
          : project.technologies.some((tech) => tech.toLowerCase().includes(filter.toLowerCase()))
      );

  const featured = filteredProjects.filter((project) => project.featured);
  const rest = filteredProjects.filter((project) => !project.featured);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'sql', label: 'SQL' },
    { key: 'python', label: 'Python' },
    { key: 'visualization', label: 'Visualization' },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="Selected work"
          title="PROJECTS"
          subtitle="A showcase of data engineering projects demonstrating expertise in ETL pipelines, data analysis, and business intelligence solutions."
        />

        <div className="flex flex-wrap gap-6 mb-16 lg:mb-24" role="group" aria-label="Filter projects">
          {filters.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => setFilter(option.key)}
              aria-pressed={filter === option.key}
              className={`text-sm tracking-widest uppercase transition-colors ${
                filter === option.key
                  ? 'text-foreground underline decoration-accent underline-offset-8'
                  : 'text-muted-foreground hover:text-accent'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="space-y-24 lg:space-y-32">
          {featured.map((project, index) => (
            <Reveal
              as="article"
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <ProjectImage project={project} />
              </div>
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {project.featured && (
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Featured</p>
                )}
                <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs text-muted-foreground border border-border rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-6 text-sm tracking-widest uppercase">
                  <button
                    type="button"
                    onClick={() => setSelected(toModalItem(project))}
                    className="text-muted-foreground hover:text-accent transition-colors underline underline-offset-4"
                  >
                    Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    View Code ↗
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-24 lg:mt-32 space-y-0">
            {rest.map((project, index) => (
              <Reveal
                key={project.id}
                delay={index * 0.06}
                className="border-t border-border py-6 md:py-8 group hover:bg-secondary transition-colors px-4 -mx-4"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setSelected(toModalItem(project))}
                    className="text-left"
                  >
                    <h3 className="text-lg md:text-xl lg:text-2xl text-foreground font-light group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 md:mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </button>
                  <div className="flex items-center gap-6 shrink-0 text-sm text-muted-foreground">
                    <button
                      type="button"
                      onClick={() => setSelected(toModalItem(project))}
                      className="hover:text-accent transition-colors tracking-widest uppercase"
                    >
                      Details
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      ↗
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-border" />
          </div>
        )}

        <div className="mt-16 lg:mt-24">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing a collaboration?
          </p>
          <a
            href="https://github.com/RithvikPanchumarthi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-widest uppercase text-foreground hover:text-accent transition-colors underline underline-offset-4"
          >
            View All on GitHub ↗
          </a>
        </div>
      </div>

      <DetailModal item={selected} onClose={closeModal} />
    </section>
  );
};

export default Projects;
