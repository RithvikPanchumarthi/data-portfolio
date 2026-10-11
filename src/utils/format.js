const compact = new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 });

/** 1284 -> "1.3K"; strings pass through unchanged. */
export const formatCompact = (value) =>
  typeof value === 'number' ? compact.format(value) : value;

/** ISO date -> "3 days ago", "2 months ago", "1 year ago". */
export const relativeTime = (iso, now = Date.now()) => {
  const seconds = Math.round((new Date(iso).getTime() - now) / 1000);
  const units = [
    ['year', 31536000],
    ['month', 2592000],
    ['week', 604800],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
  ];
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  for (const [unit, size] of units) {
    if (Math.abs(seconds) >= size) return rtf.format(Math.round(seconds / size), unit);
  }
  return 'just now';
};

/** ISO date -> "Oct 11, 2026". */
export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
