// Fetches public repos + README excerpts from GitHub and writes src/data/github.json.
// Runs in CI before `npm run build` and on demand via `npm run sync:github`.
// On any failure it keeps the existing snapshot and exits 0, so deploys never break.

import { readFile, writeFile } from 'node:fs/promises';

const USER = 'RithvikPanchumarthi';
const OUT = new URL('../src/data/github.json', import.meta.url);
const API = 'https://api.github.com';
const EXCERPT_MAX = 320;

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': `${USER}-portfolio-sync`,
  ...(process.env.GITHUB_TOKEN && { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }),
};

async function getJson(path) {
  const res = await fetch(`${API}${path}`, { headers });
  if (!res.ok) throw new Error(`${path} -> ${res.status} ${res.statusText}`);
  return res.json();
}

async function getReadme(repo) {
  const res = await fetch(`${API}/repos/${USER}/${repo}/readme`, {
    headers: { ...headers, Accept: 'application/vnd.github.raw' },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`readme ${repo} -> ${res.status}`);
  return res.text();
}

// Pull the first heading and first prose paragraph out of a README.
export function extractExcerpt(markdown) {
  if (!markdown) return { title: null, excerpt: null };

  const cleaned = markdown
    .replace(/```[\s\S]*?```/g, '')          // code fences
    .replace(/<!--[\s\S]*?-->/g, '')         // comments
    .replace(/<[^>]+>/g, '')                 // html tags (badges, divs)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')    // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/\r/g, '');

  const blocks = cleaned.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  const heading = blocks.find((b) => /^#{1,3}\s/.test(b));
  const title = heading ? heading.split('\n')[0].replace(/^#+\s*/, '').trim() : null;

  // A heading can sit directly on top of its paragraph with no blank line between them.
  const bodies = blocks.map((b) => b.replace(/^#{1,6}\s.*(\n|$)/, '').trim()).filter(Boolean);
  const prose = bodies.find(
    (b) => !/^(#|[-*+]\s|\d+\.\s|\||>|---)/.test(b) && b.replace(/[*_`]/g, '').length >= 40,
  );
  if (!prose) return { title, excerpt: null };

  let excerpt = prose.replace(/[*_`#]/g, '').replace(/\s+/g, ' ').trim();
  if (excerpt.length > EXCERPT_MAX) {
    excerpt = `${excerpt.slice(0, EXCERPT_MAX).replace(/\s+\S*$/, '')}…`;
  }
  return { title, excerpt };
}

async function sync() {
  const [user, repos] = await Promise.all([
    getJson(`/users/${USER}`),
    getJson(`/users/${USER}/repos?sort=pushed&per_page=100`),
  ]);

  const items = await Promise.all(
    repos.map(async (r) => {
      const { title, excerpt } = extractExcerpt(await getReadme(r.name));
      return {
        name: r.name,
        title,
        description: r.description,
        excerpt,
        language: r.language,
        topics: r.topics ?? [],
        stars: r.stargazers_count,
        pushedAt: r.pushed_at,
        htmlUrl: r.html_url,
        homepage: r.homepage || null,
        fork: r.fork,
      };
    }),
  );

  return {
    syncedAt: new Date().toISOString(),
    user: {
      login: user.login,
      name: user.name,
      bio: user.bio,
      publicRepos: user.public_repos,
      followers: user.followers,
      htmlUrl: user.html_url,
    },
    repos: items,
  };
}

try {
  const data = await sync();
  await writeFile(OUT, `${JSON.stringify(data, null, 2)}\n`);
  console.log(`sync-github: wrote ${data.repos.length} repos (${data.syncedAt})`);
} catch (err) {
  const existing = await readFile(OUT, 'utf8').catch(() => null);
  console.warn(`sync-github: ${err.message}`);
  console.warn(existing ? 'sync-github: keeping existing snapshot' : 'sync-github: no snapshot to fall back to');
}
