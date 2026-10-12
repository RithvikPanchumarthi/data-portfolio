import React, { useCallback, useState } from 'react';
import github from '../data/github.json';
import { formatDate, relativeTime } from '../utils/format.js';
import SectionHeader from './SectionHeader';
import DetailModal from './DetailModal';
import Reveal from './Reveal';

const INITIAL_COUNT = 6;
const ownRepos = github.repos.filter((repo) => !repo.fork);
const languages = ['All', ...new Set(ownRepos.map((repo) => repo.language).filter(Boolean))];

const toModalItem = (repo) => ({
  title: repo.name,
  subtitle: `${repo.language ?? 'No primary language'} · last pushed ${formatDate(repo.pushedAt)}`,
  body: repo.excerpt || repo.description || 'No README yet.',
  tags: repo.topics,
  links: [
    { label: 'View on GitHub', href: repo.htmlUrl, kind: 'github' },
    ...(repo.homepage ? [{ label: 'Live site', href: repo.homepage, kind: 'demo' }] : []),
  ],
});

const GitHubActivity = () => {
  const [language, setLanguage] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const filtered = language === 'All' ? ownRepos : ownRepos.filter((repo) => repo.language === language);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="github" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="Public work"
          title="GITHUB"
          subtitle="Synced from my public repositories, most recently pushed first."
        />

        <div className="flex flex-wrap gap-6 mb-16" role="group" aria-label="Filter repositories by language">
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              aria-pressed={language === lang}
              className={`text-sm tracking-widest uppercase transition-colors ${
                language === lang
                  ? 'text-white underline underline-offset-8'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <div className="space-y-0">
          {visible.map((repo, index) => (
            <Reveal
              key={repo.name}
              delay={index * 0.05}
              className="border-t border-gray-800 py-6 md:py-8 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                <button
                  type="button"
                  onClick={() => setSelected(toModalItem(repo))}
                  className="text-left"
                >
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light break-all group-hover:text-gray-300 transition-colors">
                    {repo.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 md:mt-2">
                    {repo.language ?? 'No primary language'}
                    {' · '}
                    <time dateTime={repo.pushedAt} title={formatDate(repo.pushedAt)}>
                      {relativeTime(repo.pushedAt)}
                    </time>
                  </p>
                </button>
                <div className="flex items-center gap-6 shrink-0 text-sm tracking-widest uppercase text-gray-500">
                  <button
                    type="button"
                    onClick={() => setSelected(toModalItem(repo))}
                    className="hover:text-white transition-colors"
                  >
                    Details
                  </button>
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Repo ↗
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        <div className="mt-10 flex flex-col items-start gap-3">
          {filtered.length > INITIAL_COUNT && (
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="text-sm tracking-widest uppercase text-white hover:opacity-60 transition-opacity underline underline-offset-4"
            >
              {showAll ? 'Show fewer' : `Show all ${filtered.length} repositories`}
            </button>
          )}
          <p className="text-xs text-gray-600">
            Synced {formatDate(github.syncedAt)} from{' '}
            <a
              href={github.user.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-gray-400"
            >
              github.com/{github.user.login}
            </a>
          </p>
        </div>
      </div>

      <DetailModal item={selected} onClose={closeModal} />
    </section>
  );
};

export default GitHubActivity;
