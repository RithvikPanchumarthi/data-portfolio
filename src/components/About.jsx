import React from 'react';
import { Cloud, Database, BarChart3, Code, Award, MapPin } from 'lucide-react';
import { getThemeClass } from '../utils/themeConfig.js';
import { useTheme } from '../hooks/useTheme.js';
import Reveal from './Reveal';

const About = () => {
  const theme = useTheme();

  const skills = [
    {
      category: "Cloud & Data Platforms",
      icon: <Cloud className="w-6 h-6" />,
      items: ["Azure (Data Factory, Synapse, Databricks)", "Snowflake", "GCP (BigQuery, Cloud Storage)", "AWS S3"]
    },
    {
      category: "Data Engineering",
      icon: <Database className="w-6 h-6" />,
      items: ["ETL/ELT Pipelines", "Apache Spark", "Data Modeling", "Apache Airflow", "dbt"]
    },
    {
      category: "Analytics & Programming",
      icon: <Code className="w-6 h-6" />,
      items: ["SQL (Advanced)", "Python", "Statistical Analysis", "Data Validation"]
    },
    {
      category: "Visualization & BI",
      icon: <BarChart3 className="w-6 h-6" />,
      items: ["Power BI", "Tableau", "Excel (Advanced)", "Jupyter Notebooks"]
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Data & Analytics Engineering",
      description: "End-to-end data solutions from pipeline engineering to analytical insights"
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary-600" />,
      title: "Cloud Architecture Expertise",
      description: "Azure certified with hands-on experience in Snowflake, GCP, and multi-cloud solutions"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary-600" />,
      title: "Performance Optimization",
      description: "Delivered 30% efficiency improvements and 25% query performance enhancements"
    }
  ];

  return (
    <section id="about" className={`section-padding ${getThemeClass(theme, 'backgroundAbout')} transition-all duration-300`}>
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${getThemeClass(theme, 'headingAbout')} mb-4`}>
            About Me
          </h2>
          <p className={`text-xl ${getThemeClass(theme, 'textSecondary')} max-w-3xl mx-auto`}>
            Passionate about transforming complex data into actionable business insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <Reveal className="space-y-6">
            <div className={`prose prose-lg ${getThemeClass(theme, 'textSecondary')}`}>
              <p className="text-xl leading-relaxed mb-6">
                I'm a <span className={`${getThemeClass(theme, 'accentEmerald')} font-semibold`}>Senior Data Engineer</span> with 
                expertise in designing scalable data solutions and transforming complex datasets into 
                actionable business insights.
              </p>
              
              <p className="leading-relaxed mb-6">
                With hands-on experience across the full data lifecycle, I specialize in building robust 
                ETL/ELT pipelines, optimizing cloud architectures, and creating analytics-ready datasets 
                that drive strategic decision-making. My technical foundation spans cloud platforms including 
                Azure, Snowflake, and GCP, combined with strong analytical skills in SQL, Python, and 
                visualization tools.
              </p>
              
              <p className="leading-relaxed mb-8">
                I've successfully delivered end-to-end data solutions that improved processing efficiency 
                by 30%, reduced query latency by 25%, and enhanced stakeholder engagement through intuitive 
                dashboards and reports. Currently pursuing opportunities where I can leverage both my 
                engineering expertise and analytical acumen to solve complex business challenges.
              </p>
            </div>

            {/* Location & Contact */}
            <div className={`flex items-center gap-2 ${getThemeClass(theme, 'textSecondary')}`}>
              <MapPin className={`w-5 h-5 ${getThemeClass(theme, 'accentCyan')}`} />
              <span>Minneapolis, MN, USA (Open to Relocation)</span>
            </div>

            {/* Key Achievements - Consistent theming */}
            <div className="space-y-4 pt-4">
              {achievements.map((achievement, index) => {
                const iconTypes = ['iconEmerald', 'iconCyan', 'iconViolet'];
                const iconClass = iconTypes[index];
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className={`flex-shrink-0 p-2 ${getThemeClass(theme, iconClass)} rounded-lg backdrop-blur-sm`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className={`font-semibold ${getThemeClass(theme, 'textPrimary')} mb-1`}>
                        {achievement.title}
                      </h4>
                      <p className={`${getThemeClass(theme, 'textSecondary')} text-sm`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right Column - Skills - Consistent theming */}
          <Reveal className="space-y-8">
            <h3 className={`text-2xl font-bold ${getThemeClass(theme, 'headingTech')} mb-8`}>
              Technical Expertise
            </h3>
            
            {skills.map((skillGroup, index) => {
              const skillCardTypes = ['cardSkill', 'cardSkill', 'cardSkill', 'cardSkill'];
              const iconTypes = ['iconEmerald', 'iconCyan', 'iconViolet', 'iconAmber'];
              const tagTypes = ['tagEmerald', 'tagCyan', 'tagViolet', 'tagAmber'];
              
              return (
                <div key={index} className={`${getThemeClass(theme, skillCardTypes[index])} rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 ${getThemeClass(theme, iconTypes[index])} rounded-lg backdrop-blur-sm`}>
                      {skillGroup.icon}
                    </div>
                    <h4 className={`font-semibold ${getThemeClass(theme, 'textPrimary')}`}>
                      {skillGroup.category}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 ${getThemeClass(theme, tagTypes[index])} text-sm font-medium rounded-full transition-all duration-300 hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Skills Matrix - Consistent theming with gradient progress bars */}
            <div className={`${getThemeClass(theme, 'cardSkill')} rounded-xl transition-all duration-300 transform hover:-translate-y-1 p-6`}>
              <h4 className={`font-semibold ${getThemeClass(theme, 'textPrimary')} mb-4`}>Proficiency Levels</h4>
              <div className="space-y-3">
                {[
                  { skill: 'Data Engineering & ETL', level: 95, progressType: 'progressEmerald' },
                  { skill: 'SQL & Data Analysis', level: 95, progressType: 'progressCyan' },
                  { skill: 'Cloud Platforms (Azure/Snowflake)', level: 90, progressType: 'progressViolet' },
                  { skill: 'Business Intelligence & Visualization', level: 85, progressType: 'progressAmber' },
                  { skill: 'Big Data & Performance Optimization', level: 85, progressType: 'progressRose' }
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className={`font-medium ${getThemeClass(theme, 'textSecondary')}`}>{item.skill}</span>
                      <span className={`${getThemeClass(theme, 'textTertiary')}`}>{item.level}%</span>
                    </div>
                    <div className={`w-full ${getThemeClass(theme, 'progressBg')} rounded-full h-2`}>
                      <div
                        className={`${getThemeClass(theme, item.progressType)} h-2 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
