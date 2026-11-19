// Single source of portfolio content. Pure data: no JSX and no React imports.
// Brand SVGs resolve through string keys in logos.js. Lucide icons resolve
// through the icon-key map in About.jsx.
//
// github.json (scripts/sync-github.mjs) and logos.js stay separate.
//
// Accuracy:
// - profile is the 2026-10-11 LinkedIn "Save to PDF" export, plus DP-600
//   (owner-verified 2026-11-18; not in that export). Do not invent issuers or dates.
// - pipelines restates only the Curi role in profile.experience. Do not add
//   platforms, tools, or metrics that are not listed there.
// - projects array order is display order. Featured is capped at four.
//   Martian Dynamics (id 9) is a private synthetic-data demo: no github link
//   and no churn-model score.
// - learning years come from each repo's GitHub creation date. Dated
//   certifications are appended at render time.
// - aiStats values come from the Cursor profile read on cursor.asOf. A null
//   stat stays hidden.
// - The unverified "30% efficiency / 25% query performance" About pull quote
//   was removed on purpose. Do not add it back or invent replacement metrics.

export const portfolioData = {
  "profile": {
    "linkedinUrl": "https://www.linkedin.com/in/rithvikpanchumarthi/",
    "asOf": "2026-10-11",
    "headline": "Senior Data Engineer | SQL, Azure, Databricks, Snowflake, Python, GCP, BI",
    "location": "Greater Minneapolis-St. Paul Area",
    "experience": [
      {
        "role": "Senior Data Engineer",
        "company": "Curi",
        "start": "Oct 2025",
        "end": null,
        "location": "Greater Minneapolis-St. Paul Area",
        "highlights": [
          "Built an analytical platform on Databricks/AWS for Investment Management, Medical and Insurance datasets, using Apache Spark and Airflow to improve scalability and security.",
          "Engineered 10+ SQL conversion notebooks with DDL and INSERT pipelines that populate silver-layer Delta tables (entity, address, phone, claim, policy, risk, coverage) in a Databricks medallion architecture.",
          "Added primary-key uniqueness, NOT NULL, foreign-key orphan and row-count reconciliation checks to keep migrations reliable into gold-layer pipelines.",
          "Optimized high-volume insurance transformations with anti-joins and ROW_NUMBER() partitioning to prevent fan-out and duplicates.",
          "Maintained CI/CD with Git and GitHub for schema migrations, and led requirements and pull-request reviews in Agile sprints."
        ]
      },
      {
        "role": "Data Consultant",
        "company": "On-Demand Group",
        "start": "Oct 2025",
        "end": "Jun 2026",
        "location": null,
        "highlights": [
          "Represented On-Demand Group as a data consultant on modern data platforms for Curi.",
          "Developed SQL and Databricks expertise and implemented CI/CD deployments to streamline project workflows."
        ]
      },
      {
        "role": "Software Engineer",
        "company": "Cloud IT Tec Inc",
        "start": "Sep 2025",
        "end": "Oct 2025",
        "location": null,
        "highlights": []
      },
      {
        "role": "Data Engineer",
        "company": "Midtown Consulting Group",
        "start": "Jan 2025",
        "end": "Jun 2025",
        "location": null,
        "highlights": [
          "Designed end-to-end Azure pipelines: Data Factory for ingestion, Synapse Analytics for large-scale processing, and Data Lake Storage for storage.",
          "Used Databricks on Azure for advanced transformation and ML workloads, and automated orchestration with ADF pipelines and Logic Apps.",
          "Ran CI/CD through Azure DevOps and supported reporting with SQL managed instances and Synapse serverless SQL pools."
        ]
      },
      {
        "role": "Data Analyst",
        "company": "Midtown Consulting Group",
        "start": "Nov 2023",
        "end": "Dec 2024",
        "location": "Orlando, Florida, United States",
        "highlights": [
          "Built Power BI dashboards and Azure Analysis Services models for leadership KPI tracking.",
          "Added data validation rules and Azure Purview governance, reducing data discrepancies by 15%.",
          "Automated SQL and Power BI reporting, speeding student feedback turnaround by 40%."
        ]
      },
      {
        "role": "Graduate Research Assistant",
        "company": "St. Cloud State University",
        "start": "Jan 2022",
        "end": "Dec 2022",
        "location": "St Cloud, Minnesota, United States",
        "highlights": [
          "Automated course evaluation reporting with SQL and Python, cutting report generation time by 60%.",
          "Built Tableau dashboards that helped faculty improve student engagement by 15%."
        ]
      },
      {
        "role": "Data Analyst",
        "company": "Aarleo technologies",
        "start": "Mar 2019",
        "end": "Jul 2021",
        "location": null,
        "highlights": [
          "Engineered AWS ETL workflows with Glue, S3 and Redshift, with Snowflake as the primary data warehouse.",
          "Orchestrated pipelines with Apache Airflow on AWS, plus Lambda and Step Functions for serverless ingestion and validation.",
          "Tuned Snowflake and Redshift schemas and queries for 30% faster response times.",
          "Built Power BI and Tableau dashboards on Snowflake data, increasing marketing campaign responsiveness by 70%."
        ]
      }
    ],
    "education": [
      {
        "school": "St. Cloud State University",
        "degree": "Master's degree, Computer and Information Systems Security/Information Assurance",
        "start": "Aug 2021",
        "end": "May 2023"
      },
      {
        "school": "Jawaharlal Nehru Technological University",
        "degree": "Bachelor of Technology (BTech), Computer Science",
        "start": "2016",
        "end": "2020"
      }
    ],
    "certifications": [
      {
        "name": "Microsoft Azure DP-203",
        "issuer": "Microsoft",
        "date": null
      },
      {
        "name": "Microsoft Azure DP-900",
        "issuer": "Microsoft",
        "date": null
      },
      {
        "name": "Microsoft DP-600",
        "issuer": "Microsoft",
        "date": null
      },
      {
        "name": "DataOps with Apache Iceberg using Spark, Nessie, and Dremio",
        "issuer": null,
        "date": null
      },
      {
        "name": "Data Analytics and Visualization Virtual Experience",
        "issuer": null,
        "date": null
      },
      {
        "name": "Microsoft Excel Skills Virtual Experience Program",
        "issuer": null,
        "date": null
      },
      {
        "name": "Google Analytics Beginner",
        "issuer": null,
        "date": null
      },
      {
        "name": "30-Minute Resume Refresh",
        "issuer": null,
        "date": null
      }
    ]
  },
  "projects": [
    {
      "id": 7,
      "title": "Snowflake Cloud Data Warehouse & Governance",
      "description": "Architected a multi-layer Snowflake data warehouse (raw, harmonized, and analytics schemas) for the Tasty Bytes dataset, loading raw POS and customer data from S3 stages and building harmonized/analytics views that join orders, menu, location, and customer loyalty data. Designed a full RBAC role hierarchy (admin, data engineer, data scientist, BI, dev) with granular current and future object grants, and applied dynamic data masking policies with tag-based classification to protect PII. Implemented financial governance controls including resource monitors with tiered credit-quota alerts, warehouse auto-suspend/resume, statement and queued timeout limits, and on-demand warehouse scaling to balance query performance against compute cost.",
      "technologies": [
        "Snowflake",
        "Data Warehousing",
        "RBAC",
        "Data Masking",
        "Resource Monitors",
        "Cost Governance",
        "SQL",
        "Cloud Architecture"
      ],
      "github": "https://github.com/RithvikPanchumarthi/Snowflake",
      "logos": [
        "snowflake"
      ],
      "architecture": {
        "flow": [
          {
            "label": "S3 stages",
            "note": "Raw POS and customer files"
          },
          {
            "label": "RAW",
            "note": "Landed tables"
          },
          {
            "label": "HARMONIZED",
            "note": "Orders, menu, location and loyalty joined"
          },
          {
            "label": "ANALYTICS",
            "note": "Analytics views"
          }
        ],
        "controls": [
          {
            "label": "RBAC",
            "note": "Admin, data engineer, data scientist, BI and dev roles with current and future grants"
          },
          {
            "label": "Data masking",
            "note": "Dynamic masking policies with tag-based PII classification"
          },
          {
            "label": "Cost governance",
            "note": "Resource monitors with tiered credit alerts, auto-suspend/resume, timeouts and on-demand scaling"
          }
        ]
      },
      "featured": true
    },
    {
      "id": 5,
      "title": "COVID-19 Data Intelligence System",
      "description": "Developed a full-stack analytics pipeline using Python, Pandas, and SQLite to process and analyze COVID-19 spread and vaccination trends across multiple regions. Implemented optimized SQL queries and data extraction processes that increased insight accuracy by 30%, supporting more reliable public health recommendations.",
      "technologies": [
        "Python",
        "SQL",
        "Pandas",
        "SQLite",
        "Data Analysis",
        "Statistical Analysis"
      ],
      "github": "https://github.com/RithvikPanchumarthi/WorkwithSQL/blob/main/SQL.ipynb",
      "image": "/data-portfolio/Data-Exploration.jpg",
      "featured": true
    },
    {
      "id": 2,
      "title": "Advanced SQL Data Processing",
      "description": "Comprehensive data cleaning and transformation pipeline using SQL Server with performance-optimized queries. Developed automated data validation routines and quality checks that improved data integrity and reduced processing time for analytical workloads.",
      "technologies": [
        "SQL Server",
        "Data Profiling",
        "ETL",
        "Data Validation",
        "Performance Optimization"
      ],
      "github": "https://github.com/RithvikPanchumarthi/WorkwithSQL/blob/main/SQL2.ipynb",
      "image": "/data-portfolio/Data_Cleaning.png",
      "featured": true
    },
    {
      "id": 1,
      "title": "Python Data Engineering Suite",
      "description": "Advanced data manipulation and web scraping projects featuring automated data collection, processing, and analysis. Implemented scalable Python solutions for Amazon price tracking and cryptocurrency analysis using modern data science libraries and best practices.",
      "technologies": [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Web Scraping",
        "API Integration"
      ],
      "github": "https://github.com/RithvikPanchumarthi/python",
      "image": "/data-portfolio/Python.png",
      "featured": true
    },
    {
      "id": 4,
      "title": "Marketing Campaign Analytics Platform",
      "description": "Engineered an end-to-end analytics solution combining data pipeline development with advanced visualization capabilities. Built robust ETL processes to clean and transform Airbnb dataset, then created comprehensive Tableau dashboards that enabled marketing teams to identify high-value demographics and optimize campaign targeting strategies.",
      "technologies": [
        "Tableau",
        "ETL Pipelines",
        "Data Cleaning",
        "Business Intelligence",
        "Campaign Analytics",
        "Visualization"
      ],
      "github": "https://public.tableau.com/app/profile/rithvik.sai.panchumarthi",
      "demo": "https://public.tableau.com/app/profile/rithvik.sai.panchumarthi",
      "image": "/data-portfolio/TABLEAU.jpg",
      "featured": false
    },
    {
      "id": 6,
      "title": "Sales Performance Analytics Dashboard",
      "description": "Transformed raw customer data through comprehensive cleaning and validation processes in Excel, significantly improving data reliability for downstream financial analysis. Designed and deployed interactive Power BI dashboards that visualized sales performance across multiple dimensions, resulting in 25% increased stakeholder engagement.",
      "technologies": [
        "Power BI",
        "Excel",
        "DAX",
        "Data Modeling",
        "KPI Dashboards",
        "Financial Analysis",
        "Visualization"
      ],
      "github": "https://github.com/RithvikPanchumarthi/Visualization_with_PowerBI",
      "image": "/data-portfolio/Power_BI.jpg",
      "featured": false
    },
    {
      "id": 8,
      "title": "WorkVibe — Talent Matching SaaS",
      "description": "Built for the DataExpert.io Vibe Coding Challenge: a Next.js 15 SaaS that replaces keyword job search with a weighted \"Vibe Match\" score. Candidates rank skills on a 5-10-5 hierarchy (high confidence, moderate, aware) weighted at 100%, 60% and 20%, so employers see real proficiency in required skills. Includes Supabase auth with GitHub OAuth, Stripe webhooks for premium accounts, premium listings sorted via PostgreSQL indexing, and structured-output skill extraction from PDF resumes.",
      "technologies": [
        "Next.js",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "Tailwind CSS"
      ],
      "github": "https://github.com/RithvikPanchumarthi/Vibing-with-ZACH-LI",
      "demo": "https://vibing-with-zach-li-guvx.vercel.app/",
      "logos": [
        "nextjs",
        "typescript",
        "supabase",
        "postgresql"
      ],
      "featured": false
    },
    {
      "id": 9,
      "title": "Martian Dynamics — Multi-Agent Data Team",
      "description": "A multi-agent data team: an orchestrator coordinates Architect, Engineer, Analyst, BI, Data Scientist, ML Engineer and QA bots that build a DuckDB medallion pipeline (bronze, silver and gold star schema) with automated QA gates. The showcase is the Mars Warehouse #88 demo on synthetic data: members, bulk products, sales, inventory, Earth-to-Mars supply shipments, an emergency-stock dashboard and a 30-day forecast.",
      "technologies": [
        "DuckDB",
        "Data Warehousing",
        "Medallion Architecture",
        "Star Schema",
        "Multi-Agent Orchestration",
        "Data Quality Gates",
        "Forecasting"
      ],
      "architecture": {
        "flow": [
          {
            "label": "Orchestrator",
            "note": "Coordinates Architect, Engineer, Analyst, BI, Data Scientist, ML Engineer and QA bots"
          },
          {
            "label": "BRONZE",
            "note": "Raw synthetic Mars Warehouse #88 data"
          },
          {
            "label": "SILVER",
            "note": "Middle medallion layer"
          },
          {
            "label": "GOLD",
            "note": "Star schema in DuckDB"
          }
        ],
        "controls": [
          {
            "label": "QA gates",
            "note": "Automated checks run by the QA bot"
          },
          {
            "label": "Outputs",
            "note": "Emergency-stock dashboard and 30-day forecast"
          },
          {
            "label": "Data",
            "note": "Synthetic demo: members, bulk products, sales, inventory, Earth-to-Mars shipments"
          }
        ]
      },
      "featured": false
    },
    {
      "id": 3,
      "title": "Enterprise Excel Analytics Solutions",
      "description": "Built comprehensive business analytics solutions using advanced Excel features including complex formulas, pivot tables, and automated reporting. Developed financial modeling templates and interactive dashboards that streamlined business decision-making processes.",
      "technologies": [
        "Microsoft Excel",
        "Financial Modeling",
        "Business Intelligence",
        "Automated Reporting"
      ],
      "github": "https://github.com/RithvikPanchumarthi/WorkwithExcel",
      "image": "/data-portfolio/Excel.png",
      "featured": false
    }
  ],
  "pipelines": {
    "context": {
      "role": "Senior Data Engineer, Curi",
      "summary": "Analytical platform on Databricks / AWS for investment management, medical and insurance datasets, built with Apache Spark and orchestrated with Airflow."
    },
    "stages": [
      {
        "key": "sources",
        "name": "Sources",
        "tone": "neutral",
        "summary": "Investment management, medical and insurance datasets.",
        "points": [
          "Source systems feeding the Databricks / AWS analytical platform."
        ],
        "tech": [
          "AWS",
          "Databricks"
        ]
      },
      {
        "key": "bronze",
        "name": "Bronze",
        "tone": "bronze",
        "summary": "Data landed as ingested.",
        "points": [
          "The raw layer that silver tables are rebuilt from, processed with Apache Spark."
        ],
        "tech": [
          "Apache Spark",
          "Delta Lake"
        ]
      },
      {
        "key": "silver",
        "name": "Silver",
        "tone": "silver",
        "summary": "Cleaned, conformed entity tables.",
        "points": [
          "10+ SQL conversion notebooks with DDL and INSERT pipelines populate silver Delta tables: entity, address, phone, claim, policy, risk and coverage.",
          "Anti-joins and ROW_NUMBER() partitioning prevent fan-out and duplicates in high-volume insurance transformations."
        ],
        "tech": [
          "Spark SQL",
          "Delta Lake"
        ]
      },
      {
        "key": "quality",
        "name": "Quality gate",
        "tone": "neutral",
        "summary": "Checks before anything moves to gold.",
        "points": [
          "Primary-key uniqueness and NOT NULL checks.",
          "Foreign-key orphan checks and row-count reconciliation keep migrations into gold-layer pipelines reliable."
        ],
        "tech": [
          "Data Quality",
          "SQL"
        ]
      },
      {
        "key": "gold",
        "name": "Gold",
        "tone": "gold",
        "summary": "Analytics-ready layer.",
        "points": [
          "Gold-layer pipelines fed only by data that passed the silver checks."
        ],
        "tech": [
          "Delta Lake",
          "Analytics"
        ]
      }
    ],
    "rails": [
      {
        "label": "Orchestration",
        "value": "Apache Airflow"
      },
      {
        "label": "Compute",
        "value": "Apache Spark on Databricks / AWS"
      },
      {
        "label": "CI/CD",
        "value": "Git + GitHub schema migrations, PR reviews in Agile sprints"
      }
    ],
    "defaultStageKey": "silver"
  },
  "learning": [
    {
      "year": 2023,
      "title": "Analytics foundations",
      "kind": "repo",
      "summary": "SQL on COVID-19 and Nashville Housing data, Python data cleaning and analysis, Excel modeling, and dashboards in Tableau and Power BI.",
      "repos": [
        "WorkwithSQL",
        "python",
        "WorkwithExcel",
        "Tableau",
        "Visualization_with_PowerBI",
        "Storytelling"
      ]
    },
    {
      "year": 2023,
      "title": "Cloud warehousing with Snowflake",
      "kind": "repo",
      "summary": "Tasty Bytes warehouse: raw, harmonized and analytics schemas, RBAC, masking policies and resource monitors.",
      "repos": [
        "Snowflake"
      ]
    },
    {
      "year": 2023,
      "title": "Distributed processing with Spark",
      "kind": "repo",
      "summary": "Spark notebooks and Python sources for data engineering workloads.",
      "repos": [
        "Spark"
      ]
    },
    {
      "year": 2025,
      "title": "Data modeling: cumulative table design",
      "kind": "course",
      "summary": "Studied cumulative table patterns for tracking entity history efficiently.",
      "repos": [
        "cumulative-table-design"
      ]
    },
    {
      "year": 2025,
      "title": "Python for data engineering and LM engineering",
      "kind": "course",
      "summary": "Python data engineering coursework and probability-distribution notebooks for language-model engineering.",
      "repos": [
        "python-for-data-engineering",
        "LM_Engineering"
      ]
    },
    {
      "year": 2026,
      "title": "DataExpert.io Vibe Coding Challenge",
      "kind": "repo",
      "summary": "Shipped WorkVibe, a full-stack Next.js 15 SaaS with weighted skill matching, Supabase auth and Stripe payments.",
      "repos": [
        "Vibing-with-ZACH-LI"
      ]
    },
    {
      "year": 2026,
      "title": "Data Engineering Handbook",
      "kind": "course",
      "summary": "A curated collection of data engineering learning resources.",
      "repos": [
        "data-expert-rithvik"
      ]
    }
  ],
  "aiStats": {
    "cursor": {
      "profileUrl": "https://cursor.com/@rithvikbuilds4u",
      "asOf": "2026-10-11",
      "tokens": 95500000,
      "agents": 5,
      "longestRunningAgent": "7.5h",
      "models": [
        "Grok 4.6",
        "Claude Opus 5.5"
      ]
    },
    "workflow": [
      {
        "tool": "Cursor",
        "text": "Project rules and skills in .cursor/ guide agent work on this repo."
      },
      {
        "tool": "Claude Code",
        "text": "Reads the same skills through .claude/skills symlinks, with CLAUDE.md pointing at the shared project docs."
      },
      {
        "tool": "Shared memory",
        "text": "Both tools read and log to one project memory file, so either developer can pick up where the other left off."
      }
    ]
  },
  "site": {
    "links": {
      "email": "rithvikpanchumarthi@gmail.com",
      "mailto": "mailto:rithvikpanchumarthi@gmail.com",
      "github": "https://github.com/RithvikPanchumarthi",
      "linkedin": "https://www.linkedin.com/in/rithvikpanchumarthi/",
      "linktree": "https://linktr.ee/rithvikpanchumarthi",
      "tableau": "https://public.tableau.com/app/profile/rithvik.sai.panchumarthi"
    },
    "header": {
      "identity": "Rithvik Panchumarthi | Agentic Data Engineer",
      "quote": "Data is the new oil, but unlike oil, data is reusable and grows more valuable with use.",
      "socialLinks": [
        {
          "href": "https://github.com/RithvikPanchumarthi",
          "label": "GitHub",
          "external": true
        },
        {
          "href": "https://www.linkedin.com/in/rithvikpanchumarthi/",
          "label": "LinkedIn",
          "external": true
        },
        {
          "href": "mailto:rithvikpanchumarthi@gmail.com",
          "label": "Email",
          "external": false
        }
      ]
    },
    "hero": {
      "location": "Minneapolis, MN, USA (Open to Relocation)",
      "resume": {
        "href": "https://linktr.ee/rithvikpanchumarthi",
        "label": "Resume & Links"
      }
    },
    "about": {
      "label": "About",
      "paragraphs": [
        "I'm a Senior Data Engineer with expertise in designing scalable data solutions and transforming complex datasets into actionable business insights.",
        "With hands-on experience across the full data lifecycle, I specialize in building robust ETL/ELT pipelines, optimizing cloud architectures, and creating analytics-ready datasets that drive strategic decision-making. My technical foundation spans cloud platforms including Azure, Snowflake, and GCP, combined with strong analytical skills in SQL, Python, and visualization tools."
      ],
      "current": "Today I'm a Senior Data Engineer at Curi, building an analytical platform on Databricks and AWS with Apache Spark and Airflow: silver-layer Delta tables in a medallion architecture, guarded by uniqueness, orphan and row-count reconciliation checks before data reaches gold. Earlier roles spanned Azure pipelines, Snowflake and Redshift warehousing, and Power BI and Tableau reporting.",
      "focus": [
        {
          "title": "Data & Analytics Engineering",
          "text": "End-to-end data solutions from pipeline engineering to analytical insights."
        },
        {
          "title": "Cloud Architecture Expertise",
          "text": "Azure certified with hands-on experience in Snowflake, GCP, and multi-cloud solutions."
        }
      ],
      "location": "Minneapolis, MN, USA (Open to Relocation)",
      "skillsLabel": "Expertise",
      "skillsTitle": "SKILLS",
      "skills": [
        {
          "name": "Azure (Data Factory, Synapse, Databricks)",
          "logos": [
            "azure",
            "databricks"
          ]
        },
        {
          "name": "Snowflake",
          "logos": [
            "snowflake"
          ]
        },
        {
          "name": "GCP (BigQuery, Cloud Storage)",
          "logos": [
            "gcp"
          ]
        },
        {
          "name": "AWS S3",
          "logos": [
            "aws"
          ]
        },
        {
          "name": "ETL/ELT Pipelines",
          "icon": "Workflow"
        },
        {
          "name": "Apache Spark",
          "logos": [
            "spark"
          ]
        },
        {
          "name": "Data Modeling",
          "icon": "Boxes"
        },
        {
          "name": "Apache Airflow",
          "logos": [
            "airflow"
          ]
        },
        {
          "name": "dbt",
          "icon": "GitMerge",
          "color": "#FF694B"
        },
        {
          "name": "SQL (Advanced)",
          "icon": "Database"
        },
        {
          "name": "Python",
          "logos": [
            "python"
          ]
        },
        {
          "name": "Statistical Analysis",
          "icon": "Sigma"
        },
        {
          "name": "Data Validation",
          "icon": "ShieldCheck"
        },
        {
          "name": "Power BI",
          "logos": [
            "powerbi"
          ]
        },
        {
          "name": "Tableau",
          "logos": [
            "tableau"
          ]
        },
        {
          "name": "Excel (Advanced)",
          "logos": [
            "excel"
          ]
        },
        {
          "name": "Jupyter Notebooks",
          "logos": [
            "jupyter"
          ]
        }
      ]
    },
    "experience": {
      "label": "Career",
      "title": [
        "WORK",
        "EXPERIENCE"
      ],
      "subtitle": "Roles, education and certifications, from my LinkedIn profile.",
      "presentLabel": "Present",
      "educationLabel": "Background",
      "educationTitle": "EDUCATION",
      "certificationsLabel": "Credentials",
      "certificationsTitle": "CERTIFICATIONS",
      "certifiedPrefix": "Certified",
      "linkedinCta": "Full profile on LinkedIn"
    },
    "pipelines": {
      "label": "How I build",
      "title": [
        "MEDALLION",
        "PIPELINES"
      ],
      "selectHint": "select a layer",
      "layerLabel": "Layer"
    },
    "projects": {
      "label": "Selected work",
      "title": "PROJECTS",
      "subtitle": "A showcase of data engineering projects demonstrating expertise in ETL pipelines, data analysis, and business intelligence solutions.",
      "featuredLabel": "Featured",
      "detailsLabel": "Details",
      "viewCodeLabel": "View Code",
      "liveDemoLabel": "Live Demo",
      "morePrompt": "Interested in seeing more of my work or discussing a collaboration?",
      "githubCta": "View All on GitHub",
      "filters": [
        {
          "key": "all",
          "label": "All Projects"
        },
        {
          "key": "featured",
          "label": "Featured"
        },
        {
          "key": "pipelines",
          "label": "Pipelines & Warehousing",
          "pattern": "etl|warehous|snowflake|pipeline|data validation"
        },
        {
          "key": "sql",
          "label": "SQL",
          "pattern": "sql"
        },
        {
          "key": "python",
          "label": "Python",
          "pattern": "python"
        },
        {
          "key": "visualization",
          "label": "Visualization",
          "pattern": "visualization"
        }
      ]
    },
    "learning": {
      "label": "Timeline",
      "title": "LEARNING",
      "subtitle": "What I have studied and built along the way, newest first.",
      "kinds": {
        "repo": "Built",
        "course": "Studied",
        "cert": "Certified"
      }
    },
    "builder": {
      "label": "Building with AI",
      "intro": "How I pair AI agents with data engineering fundamentals to ship faster.",
      "tiles": [
        {
          "key": "tokens",
          "label": "Cursor tokens"
        },
        {
          "key": "agents",
          "label": "Cursor agents run"
        },
        {
          "key": "longestRunningAgent",
          "label": "Longest-running agent"
        },
        {
          "key": "publicRepos",
          "label": "Public GitHub repos"
        }
      ],
      "modelsLabel": "Models I build with",
      "asOfLabel": "Cursor stats as of",
      "profileLinkLabel": "Cursor profile"
    },
    "contact": {
      "formspreeUrl": "https://formspree.io/f/xgvlranb",
      "label": "Contact",
      "heading": "Get in touch",
      "promptLines": [
        "INTERESTED IN COLLABORATING",
        "OR DISCUSSING DATA",
        "ENGINEERING OPPORTUNITIES?"
      ],
      "promptNote": "Fill out the form and I'll get back to you as soon as possible.",
      "fields": {
        "name": {
          "label": "Name *",
          "placeholder": "Your full name"
        },
        "email": {
          "label": "Email *",
          "placeholder": "your.email@example.com"
        },
        "subject": {
          "label": "Subject *",
          "placeholder": "What's this about?"
        },
        "message": {
          "label": "Message *",
          "placeholder": "Tell me about your project or opportunity..."
        }
      },
      "submitLabel": "Send Message",
      "sendingLabel": "Sending…",
      "successMessage": "Thank you! Your message has been sent successfully. I'll get back to you soon!",
      "errorMessage": "Sorry, there was an error sending your message. Please try again or contact me directly.",
      "analytics": {
        "event": "form_submit",
        "category": "Contact",
        "label": "Portfolio Contact Form"
      },
      "rows": [
        {
          "label": "Email",
          "value": "rithvikpanchumarthi@gmail.com",
          "href": "mailto:rithvikpanchumarthi@gmail.com"
        },
        {
          "label": "Location",
          "value": "Minneapolis, MN, USA",
          "href": null
        },
        {
          "label": "LinkedIn",
          "value": "Connect with me",
          "href": "https://www.linkedin.com/in/rithvikpanchumarthi/"
        },
        {
          "label": "GitHub",
          "value": "View my repositories",
          "href": "https://github.com/RithvikPanchumarthi"
        },
        {
          "label": "Training & Certifications",
          "value": "Linktree",
          "href": "https://linktr.ee/rithvikpanchumarthi"
        },
        {
          "label": "Tableau Public",
          "value": "Profile",
          "href": "https://public.tableau.com/app/profile/rithvik.sai.panchumarthi"
        }
      ],
      "directLabel": "Or reach me directly",
      "directLinks": [
        {
          "href": "mailto:rithvikpanchumarthi@gmail.com",
          "label": "rithvikpanchumarthi@gmail.com",
          "external": false
        },
        {
          "href": "https://www.linkedin.com/in/rithvikpanchumarthi/",
          "label": "LinkedIn",
          "external": true
        },
        {
          "href": "https://github.com/RithvikPanchumarthi",
          "label": "GitHub",
          "external": true
        }
      ],
      "footerName": "Rithvik Panchumarthi",
      "footerCredit": "Built with React & Tailwind CSS.",
      "linkedinCta": "Follow me on LinkedIn for data engineering updates"
    }
  }
};

export const hasExperience =
  portfolioData.profile.experience.length > 0 ||
  portfolioData.profile.education.length > 0;
