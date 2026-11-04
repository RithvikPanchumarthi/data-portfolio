import React from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

import {
  Boxes,
  Database,
  GitMerge,
  ShieldCheck,
  Sigma,
  Workflow,
} from 'lucide-react';
import azureLogo from '../assets/skills/azure.svg';
import databricksLogo from '../assets/skills/databricks.svg';
import snowflakeLogo from '../assets/skills/snowflake.svg';
import gcpLogo from '../assets/skills/gcp.svg';
import awsLogo from '../assets/skills/aws.svg';
import sparkLogo from '../assets/skills/spark.svg';
import airflowLogo from '../assets/skills/airflow.svg';
import pythonLogo from '../assets/skills/python.svg';
import powerbiLogo from '../assets/skills/powerbi.svg';
import tableauLogo from '../assets/skills/tableau.svg';
import excelLogo from '../assets/skills/excel.svg';
import jupyterLogo from '../assets/skills/jupyter.svg';

// Tools show their brand logo (src/assets/skills, see README there); general
// skills use a lucide-react line icon. `color` overrides the accent tint.
const skills = [
  { name: 'Azure (Data Factory, Synapse, Databricks)', logos: [azureLogo, databricksLogo] },
  { name: 'Snowflake', logos: [snowflakeLogo] },
  { name: 'GCP (BigQuery, Cloud Storage)', logos: [gcpLogo] },
  { name: 'AWS S3', logos: [awsLogo] },
  { name: 'ETL/ELT Pipelines', Icon: Workflow },
  { name: 'Apache Spark', logos: [sparkLogo] },
  { name: 'Data Modeling', Icon: Boxes },
  { name: 'Apache Airflow', logos: [airflowLogo] },
  { name: 'dbt', Icon: GitMerge, color: '#FF694B' },
  { name: 'SQL (Advanced)', Icon: Database },
  { name: 'Python', logos: [pythonLogo] },
  { name: 'Statistical Analysis', Icon: Sigma },
  { name: 'Data Validation', Icon: ShieldCheck },
  { name: 'Power BI', logos: [powerbiLogo] },
  { name: 'Tableau', logos: [tableauLogo] },
  { name: 'Excel (Advanced)', logos: [excelLogo] },
  { name: 'Jupyter Notebooks', logos: [jupyterLogo] },
];

const plate =
  'flex h-9 w-9 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card';

const SkillMark = ({ logos, Icon, color }) => (
  <span aria-hidden="true" className="flex shrink-0 -space-x-2">
    {logos
      ? logos.map((src) => (
          <span key={src} className={plate}>
            <img src={src} alt="" className="h-5 w-5 lg:h-6 lg:w-6 object-contain" loading="lazy" />
          </span>
        ))
      : (
        <span className={`${plate} text-accent`} style={color ? { color } : undefined}>
          <Icon className="h-4 w-4 lg:h-5 lg:w-5" strokeWidth={1.75} />
        </span>
      )}
  </span>
);

const About = () => (
  <section id="about">
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader label="About" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 lg:mb-32">
          <Reveal className="flex items-center">
            <div className="text-base lg:text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                I&apos;m a Senior Data Engineer with expertise in designing scalable data
                solutions and transforming complex datasets into actionable business insights.
              </p>
              <p>
                With hands-on experience across the full data lifecycle, I specialize in building robust
                ETL/ELT pipelines, optimizing cloud architectures, and creating analytics-ready datasets
                that drive strategic decision-making. My technical foundation spans cloud platforms including
                Azure, Snowflake, and GCP, combined with strong analytical skills in SQL, Python, and
                visualization tools.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col justify-center">
            <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-muted-foreground">
              &quot;DELIVERED 30% EFFICIENCY
              <br />
              <span className="text-foreground underline decoration-accent underline-offset-8">
                IMPROVEMENTS AND 25%
              </span>
              <br />
              QUERY PERFORMANCE
              <br />
              ENHANCEMENTS.&quot;
            </h2>
            <p className="mt-6 text-sm text-muted-foreground tracking-widest uppercase">
              Performance Optimization
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <Reveal className="flex items-center lg:text-right">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              I&apos;ve successfully delivered end-to-end data solutions that improved processing efficiency
              by 30%, reduced query latency by 25%, and enhanced stakeholder engagement through intuitive
              dashboards and reports. Currently pursuing opportunities where I can leverage both my
              engineering expertise and analytical acumen to solve complex business challenges.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-foreground mb-3">
                  Data &amp; Analytics Engineering
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  End-to-end data solutions from pipeline engineering to analytical insights.
                </p>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-foreground mb-3">
                  Cloud Architecture Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  Azure certified with hands-on experience in Snowflake, GCP, and multi-cloud solutions.
                </p>
              </div>
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                Minneapolis, MN, USA (Open to Relocation)
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>

    <div id="skills" className="section-padding bg-secondary">
      <div className="container-max">
        <SectionHeader
          label="Expertise"
          title="SKILLS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-6">
          {skills.map((skill, index) => (
            <Reveal
              key={skill.name}
              delay={index * 0.05}
              className="border-b border-border pb-4 flex items-center gap-4"
            >
              <SkillMark {...skill} />
              <span className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light">
                {skill.name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
