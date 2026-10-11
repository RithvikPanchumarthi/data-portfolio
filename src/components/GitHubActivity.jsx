import React, { useCallback, useMemo, useState } from 'react';
import { Github, GitBranch, Clock, Info } from 'lucide-react';
import github from '../data/github.json';
import { getThemeClass } from '../utils/themeConfig.js';
import { formatDate, relativeTime } from '../utils/format.js';
import { useTheme } from '../hooks/useTheme.js';
import SectionHeader from './SectionHeader';
import DetailModal from './DetailModal';
import Reveal from './Reveal';

const INITIAL_COUNT = 6;
const ownRepos = github.repos.filter((repo) => !repo.fork);

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
  const theme = useTheme();
  const [language, setLanguage] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const languages = useMemo(
    () => ['All', ...new Set(ownRepos.map((repo) => repo.language).filter(Boolean))],
    []
  );
  const filtered = language === 'All' ? ownRepos : ownRepos.filter((repo) => repo.language === language);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="github" className={`section-padding ${getThemeClass(theme, 'backgroundNeutral')} transition-all duration-300`}>
      <div className="container-max">
        <SectionHeader
          theme={theme}
          title="Recent GitHub Activity"
          subtitle="Synced from my public repositories, most recently pushed first."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12" role="group" aria-label="Filter repositories by language">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              aria-pressed={language === lang}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                language === lang ? getThemeClass(theme, 'filterActive') : getThemeClass(theme, 'filterInactive')
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((repo) => (
            <Reveal
              key={repo.name}
              className={`${getThemeClass(theme, 'card')} rounded-xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`p-2 rounded-lg ${getThemeClass(theme, 'iconViolet')}`}>
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className={`font-bold break-all ${getThemeClass(theme, 'textPrimary')}`}>{repo.name}</h3>
              </div>

              <p className={`text-sm leading-relaxed line-clamp-3 flex-1 ${getThemeClass(theme, 'textSecondary')}`}>
                {repo.description || repo.excerpt || 'No README yet.'}
              </p>

              <div className={`mt-4 flex flex-wrap items-center gap-3 text-xs ${getThemeClass(theme, 'textTertiary')}`}>
                {repo.language && (
                  <span className={`px-2.5 py-1 rounded-full font-medium ${getThemeClass(theme, 'tagCyan')}`}>
                    {repo.language}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <time dateTime={repo.pushedAt} title={formatDate(repo.pushedAt)}>
                    {relativeTime(repo.pushedAt)}
                  </time>
                </span>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => setSelected(toModalItem(repo))}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${getThemeClass(theme, 'filterInactive')}`}
                >
                  <Info size={16} />
                  Details
                </button>
                <a
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${getThemeClass(theme, 'buttonSecondary')}`}
                >
                  <Github size={16} />
                  Repo
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          {filtered.length > INITIAL_COUNT && (
            <button
              onClick={() => setShowAll((value) => !value)}
              className={`px-6 py-2 rounded-full text-sm font-medium ${getThemeClass(theme, 'filterInactive')}`}
            >
              {showAll ? 'Show fewer' : `Show all ${filtered.length} repositories`}
            </button>
          )}
          <p className={`text-xs ${getThemeClass(theme, 'textTertiary')}`}>
            Synced {formatDate(github.syncedAt)} from{' '}
            <a href={github.user.htmlUrl} target="_blank" rel="noopener noreferrer" className="underline">
              github.com/{github.user.login}
            </a>
          </p>
        </div>
      </div>

      <DetailModal item={selected} theme={theme} onClose={closeModal} />
    </section>
  );
};

export default GitHubActivity;
