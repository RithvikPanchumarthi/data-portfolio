import React from 'react';
import Elias from './ui/elias-author-hero';
import { portfolioData } from '../data/portfolioData.js';

const { projects, site } = portfolioData;
const hero = site.eliasHero;

// The first sentence of a description, cut at a word boundary so it fits the open book's page.
const excerpt = (text, max = 140) => {
  const sentence = text.split(/(?<=\.)\s/)[0];
  if (sentence.length <= max) return sentence;
  return `${sentence.slice(0, sentence.lastIndexOf(' ', max))}…`;
};

const books = hero.books
  .map(({ projectId, coverLines, art, colors }) => {
    const project = projects.find((item) => item.id === projectId);
    if (!project) return null;
    return {
      label: hero.bookLabel,
      title: project.title,
      coverLines,
      topics: project.technologies.slice(0, 3),
      art,
      colors,
      chapter: hero.bookChapter,
      chapterTitle: project.technologies[0],
      text: excerpt(project.description),
    };
  })
  .filter(Boolean);

const socialLinks = site.header.socialLinks.map(({ label, href }) => ({ label, href }));

const EliasHero = () => (
  <Elias
    brand={hero.brand}
    name={hero.name}
    nameScale={hero.nameScale}
    navLinks={hero.navLinks}
    navCta={{ label: hero.navCtaLabel, href: site.hero.resume.href }}
    navStatus={hero.navStatus}
    intro={{ ...hero.intro, description: site.header.quote }}
    {...(hero.portrait ? { portrait: hero.portrait } : {})}
    books={books}
    bookCard={hero.bookCard}
    socialLinks={socialLinks}
  />
);

export default EliasHero;
