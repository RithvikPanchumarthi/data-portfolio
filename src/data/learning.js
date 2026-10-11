// Learning journey timeline. Years come from each repo's GitHub creation date.
// `repos` names are looked up in github.json for links and README excerpts.
// Certifications are appended from profile.js at render time.

export const learning = [
  {
    year: 2023,
    title: "Analytics foundations",
    kind: "repo",
    summary: "SQL on COVID-19 and Nashville Housing data, Python data cleaning and analysis, Excel modeling, and dashboards in Tableau and Power BI.",
    repos: ["WorkwithSQL", "python", "WorkwithExcel", "Tableau", "Visualization_with_PowerBI", "Storytelling"]
  },
  {
    year: 2023,
    title: "Cloud warehousing with Snowflake",
    kind: "repo",
    summary: "Tasty Bytes warehouse: raw, harmonized and analytics schemas, RBAC, masking policies and resource monitors.",
    repos: ["Snowflake"]
  },
  {
    year: 2023,
    title: "Distributed processing with Spark",
    kind: "repo",
    summary: "Spark notebooks and Python sources for data engineering workloads.",
    repos: ["Spark"]
  },
  {
    year: 2025,
    title: "Data modeling: cumulative table design",
    kind: "course",
    summary: "Studied cumulative table patterns for tracking entity history efficiently.",
    repos: ["cumulative-table-design"]
  },
  {
    year: 2025,
    title: "Python for data engineering and LM engineering",
    kind: "course",
    summary: "Python data engineering coursework and probability-distribution notebooks for language-model engineering.",
    repos: ["python-for-data-engineering", "LM_Engineering"]
  },
  {
    year: 2026,
    title: "DataExpert.io Vibe Coding Challenge",
    kind: "repo",
    summary: "Shipped WorkVibe, a full-stack Next.js 15 SaaS, with AI-assisted development.",
    repos: ["Vibing-with-ZACH-LI"]
  },
  {
    year: 2026,
    title: "Data Engineering Handbook",
    kind: "course",
    summary: "Keeping a personal copy of a curated data engineering learning resource collection.",
    repos: ["data-expert-rithvik"]
  }
];
