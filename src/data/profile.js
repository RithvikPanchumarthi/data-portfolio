// LinkedIn-sourced profile data. Fill from a LinkedIn "Save to PDF" export
// (see the portfolio-sync skill). Never invent values: leave a list empty and
// the section that uses it stays hidden.

export const profile = {
  linkedinUrl: "https://www.linkedin.com/in/rithvikpanchumarthi/",
  asOf: "2026-10-11", // date of the export used

  headline: "Senior Data Engineer | SQL, Azure, Databricks, Snowflake, Python, GCP, BI",
  location: "Greater Minneapolis-St. Paul Area",

  // { role, company, start, end, location, highlights: [] }  (end: null = present)
  experience: [
    {
      role: "Senior Data Engineer",
      company: "Curi",
      start: "Oct 2025",
      end: null,
      location: "Greater Minneapolis-St. Paul Area",
      highlights: [
        "Built an analytical platform on Databricks/AWS for Investment Management, Medical and Insurance datasets, using Apache Spark and Airflow to improve scalability and security.",
        "Engineered 10+ SQL conversion notebooks with DDL and INSERT pipelines that populate silver-layer Delta tables (entity, address, phone, claim, policy, risk, coverage) in a Databricks medallion architecture.",
        "Added primary-key uniqueness, NOT NULL, foreign-key orphan and row-count reconciliation checks to keep migrations reliable into gold-layer pipelines.",
        "Optimized high-volume insurance transformations with anti-joins and ROW_NUMBER() partitioning to prevent fan-out and duplicates.",
        "Maintained CI/CD with Git and GitHub for schema migrations, and led requirements and pull-request reviews in Agile sprints."
      ]
    },
    {
      role: "Data Consultant",
      company: "On-Demand Group",
      start: "Oct 2025",
      end: "Jun 2026",
      location: null,
      highlights: [
        "Represented On-Demand Group as a data consultant on modern data platforms for Curi.",
        "Developed SQL and Databricks expertise and implemented CI/CD deployments to streamline project workflows."
      ]
    },
    {
      role: "Software Engineer",
      company: "Cloud IT Tec Inc",
      start: "Sep 2025",
      end: "Oct 2025",
      location: null,
      highlights: []
    },
    {
      role: "Data Engineer",
      company: "Midtown Consulting Group",
      start: "Jan 2025",
      end: "Jun 2025",
      location: null,
      highlights: [
        "Designed end-to-end Azure pipelines: Data Factory for ingestion, Synapse Analytics for large-scale processing, and Data Lake Storage for storage.",
        "Used Databricks on Azure for advanced transformation and ML workloads, and automated orchestration with ADF pipelines and Logic Apps.",
        "Ran CI/CD through Azure DevOps and supported reporting with SQL managed instances and Synapse serverless SQL pools."
      ]
    },
    {
      role: "Data Analyst",
      company: "Midtown Consulting Group",
      start: "Nov 2023",
      end: "Dec 2024",
      location: "Orlando, Florida, United States",
      highlights: [
        "Built Power BI dashboards and Azure Analysis Services models for leadership KPI tracking.",
        "Added data validation rules and Azure Purview governance, reducing data discrepancies by 15%.",
        "Automated SQL and Power BI reporting, speeding student feedback turnaround by 40%."
      ]
    },
    {
      role: "Graduate Research Assistant",
      company: "St. Cloud State University",
      start: "Jan 2022",
      end: "Dec 2022",
      location: "St Cloud, Minnesota, United States",
      highlights: [
        "Automated course evaluation reporting with SQL and Python, cutting report generation time by 60%.",
        "Built Tableau dashboards that helped faculty improve student engagement by 15%."
      ]
    },
    {
      role: "Data Analyst",
      company: "Aarleo technologies",
      start: "Mar 2019",
      end: "Jul 2021",
      location: null,
      highlights: [
        "Engineered AWS ETL workflows with Glue, S3 and Redshift, with Snowflake as the primary data warehouse.",
        "Orchestrated pipelines with Apache Airflow on AWS, plus Lambda and Step Functions for serverless ingestion and validation.",
        "Tuned Snowflake and Redshift schemas and queries for 30% faster response times.",
        "Built Power BI and Tableau dashboards on Snowflake data, increasing marketing campaign responsiveness by 70%."
      ]
    }
  ],

  // { school, degree, start, end }
  education: [
    {
      school: "St. Cloud State University",
      degree: "Master's degree, Computer and Information Systems Security/Information Assurance",
      start: "Aug 2021",
      end: "May 2023"
    },
    {
      school: "Jawaharlal Nehru Technological University",
      degree: "Bachelor of Technology (BTech), Computer Science",
      start: "2016",
      end: "2020"
    }
  ],

  // { name, issuer, date }  (the export lists no issuers or dates for these)
  certifications: [
    { name: "Microsoft Azure DP-203", issuer: "Microsoft", date: null },
    { name: "Microsoft Azure DP-900", issuer: "Microsoft", date: null },
    { name: "DataOps with Apache Iceberg using Spark, Nessie, and Dremio", issuer: null, date: null },
    { name: "Data Analytics and Visualization Virtual Experience", issuer: null, date: null },
    { name: "Microsoft Excel Skills Virtual Experience Program", issuer: null, date: null },
    { name: "Google Analytics Beginner", issuer: null, date: null },
    { name: "30-Minute Resume Refresh", issuer: null, date: null }
  ]
};

export const hasExperience = profile.experience.length > 0 || profile.education.length > 0;
