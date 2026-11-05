// Medallion pipeline shown in PipelineArchitecture.jsx. Every detail restates the
// Curi role in profile.js; do not add platforms, tools or metrics not listed there.

export const pipelineContext = {
  role: 'Senior Data Engineer, Curi',
  summary:
    'Analytical platform on Databricks / AWS for investment management, medical and insurance datasets, built with Apache Spark and orchestrated with Airflow.',
};

// tone maps to the --bronze / --silver / --gold tokens in index.css (neutral = muted).
export const pipelineStages = [
  {
    key: 'sources',
    name: 'Sources',
    tone: 'neutral',
    summary: 'Investment management, medical and insurance datasets.',
    points: ['Source systems feeding the Databricks / AWS analytical platform.'],
    tech: ['AWS', 'Databricks'],
  },
  {
    key: 'bronze',
    name: 'Bronze',
    tone: 'bronze',
    summary: 'Data landed as ingested.',
    points: ['The raw layer that silver tables are rebuilt from, processed with Apache Spark.'],
    tech: ['Apache Spark', 'Delta Lake'],
  },
  {
    key: 'silver',
    name: 'Silver',
    tone: 'silver',
    summary: 'Cleaned, conformed entity tables.',
    points: [
      '10+ SQL conversion notebooks with DDL and INSERT pipelines populate silver Delta tables: entity, address, phone, claim, policy, risk and coverage.',
      'Anti-joins and ROW_NUMBER() partitioning prevent fan-out and duplicates in high-volume insurance transformations.',
    ],
    tech: ['Spark SQL', 'Delta Lake'],
  },
  {
    key: 'quality',
    name: 'Quality gate',
    tone: 'neutral',
    summary: 'Checks before anything moves to gold.',
    points: [
      'Primary-key uniqueness and NOT NULL checks.',
      'Foreign-key orphan checks and row-count reconciliation keep migrations into gold-layer pipelines reliable.',
    ],
    tech: ['Data Quality', 'SQL'],
  },
  {
    key: 'gold',
    name: 'Gold',
    tone: 'gold',
    summary: 'Analytics-ready layer.',
    points: ['Gold-layer pipelines fed only by data that passed the silver checks.'],
    tech: ['Delta Lake', 'Analytics'],
  },
];

export const pipelineRails = [
  { label: 'Orchestration', value: 'Apache Airflow' },
  { label: 'Compute', value: 'Apache Spark on Databricks / AWS' },
  { label: 'CI/CD', value: 'Git + GitHub schema migrations, PR reviews in Agile sprints' },
];
