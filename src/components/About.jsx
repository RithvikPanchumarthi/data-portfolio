import React from 'react';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const skills = [
  'Azure (Data Factory, Synapse, Databricks)',
  'Snowflake',
  'GCP (BigQuery, Cloud Storage)',
  'AWS S3',
  'ETL/ELT Pipelines',
  'Apache Spark',
  'Data Modeling',
  'Apache Airflow',
  'dbt',
  'SQL (Advanced)',
  'Python',
  'Statistical Analysis',
  'Data Validation',
  'Power BI',
  'Tableau',
  'Excel (Advanced)',
  'Jupyter Notebooks',
];

const About = () => (
  <section id="about">
    <div className="section-padding">
      <div className="container-max">
        <SectionHeader label="About" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <Reveal className="order-2 lg:order-1">
            <div className="img-plate">
              <img
                src="/data-portfolio/TABLEAU.jpg"
                alt="Marketing Campaign Analytics Platform"
                className="w-full h-auto img-editorial"
              />
            </div>
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              Marketing Campaign Analytics Platform
            </p>
          </Reveal>

          <Reveal delay={0.2} className="order-1 lg:order-2 flex items-center">
            <div className="text-base lg:text-lg text-gray-300 leading-relaxed space-y-6">
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
        </div>

        <Reveal className="mb-24 lg:mb-32">
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            &quot;DELIVERED 30% EFFICIENCY
            <br />
            <span className="text-white underline underline-offset-8">IMPROVEMENTS AND 25%</span>
            <br />
            QUERY PERFORMANCE
            <br />
            ENHANCEMENTS.&quot;
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            Performance Optimization
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <Reveal className="flex items-center lg:text-right">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              I&apos;ve successfully delivered end-to-end data solutions that improved processing efficiency
              by 30%, reduced query latency by 25%, and enhanced stakeholder engagement through intuitive
              dashboards and reports. Currently pursuing opportunities where I can leverage both my
              engineering expertise and analytical acumen to solve complex business challenges.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="img-plate">
              <img
                src="/data-portfolio/Data-Exploration.jpg"
                alt="COVID-19 Data Intelligence System"
                className="w-full h-auto img-editorial"
              />
            </div>
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              COVID-19 Data Intelligence System
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <Reveal>
            <div className="img-plate">
              <img
                src="/data-portfolio/Power_BI.jpg"
                alt="Sales Performance Analytics Dashboard"
                className="w-full h-auto img-editorial"
              />
            </div>
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              Sales Performance Analytics Dashboard
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-3">
                  Data &amp; Analytics Engineering
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                  End-to-end data solutions from pipeline engineering to analytical insights.
                </p>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-3">
                  Cloud Architecture Expertise
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                  Azure certified with hands-on experience in Snowflake, GCP, and multi-cloud solutions.
                </p>
              </div>
              <p className="text-sm text-gray-500 tracking-widest uppercase">
                Minneapolis, MN, USA (Open to Relocation)
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>

    <div id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="container-max">
        <SectionHeader
          label="Expertise"
          title="SKILLS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-6">
          {skills.map((skill, index) => (
            <Reveal
              key={skill}
              delay={index * 0.05}
              className="border-b border-gray-800 pb-4"
            >
              <span className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light">
                {skill}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
