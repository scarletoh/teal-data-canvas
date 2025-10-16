import { Code2, Database, Brain, BarChart3, Cloud, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: Award },
    { id: 'programming', name: 'Programming', icon: Code2 },
    { id: 'ai-ml', name: 'AI/ML', icon: Brain },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
  ];

  const skills = [
    {
      name: 'Python',
      category: 'programming',
      level: 95,
      description: 'Data analysis, machine learning, automation, scripting'
    },
    {
      name: 'JavaScript',
      category: 'programming',
      level: 92,
      description: 'React, Node.js, modern ES6+, API development'
    },
    {
      name: 'Cybersecurity',
      category: 'cloud',
      level: 78,
      description: 'Threat detection, vulnerability assessment, security frameworks, compliance (GDPR, HIPAA)'
    },
    {
      name: 'SQL',
      category: 'data',
      level: 90,
      description: 'Complex queries, database design, data warehousing, performance optimization'
    },
    {
      name: 'Power BI',
      category: 'data',
      level: 85,
      description: 'Data visualization, interactive dashboards, business intelligence, report automation'
    },
    {
      name: 'Tableau',
      category: 'data',
      level: 85,
      description: 'Data visualization, storytelling, business intelligence, interactive dashboards'
    },
    {
      name: 'XGBoost',
      category: 'ai-ml',
      level: 90,
      description: 'Gradient boosting, structured data, business forecasting, churn prediction, delivery delay modeling'
    },
    {
      name: 'Scikit-learn',
      category: 'ai-ml',
      level: 88,
      description: 'Machine learning algorithms, data preprocessing, model selection, evaluation metrics, classification, regression'
    },
    {
      name: 'TensorFlow',
      category: 'ai-ml',
      level: 85,
      description: 'Deep learning, neural networks, computer vision, natural language processing, production ML pipelines'
    },
    {
      name: 'Netlify/Vercel',
      category: 'cloud',
      level: 85,
      description: 'Modern deployment platforms, JAMstack, serverless functions, CI/CD'
    },
    {
      name: 'Git & GitHub',
      category: 'cloud',
      level: 88,
      description: 'Version control, collaboration, CI/CD workflows, code management'
    },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-400 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-600 rounded-full blur-lg"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 px-4 py-2 rounded-full mb-6 relative">
            <Award className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span className="text-red-600 dark:text-red-400 font-medium text-sm font-['Helvetica_Now_Medium']">Technical Expertise</span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-['Montserrat'] relative">
            Technical Skills
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-['Inter']">
            A focused toolkit of technologies enabling data-driven solutions and insights that transform complex challenges into actionable business value.
          </p>
        </div>
        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {skillCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 font-['Poppins'] ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.3s ease ${index * 0.1}s`
              }}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 hover:shadow-lg transition-all duration-300 group`}
              style={{
                animationDelay: `${index * 100}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.3s ease ${index * 0.05}s`
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="text-sm font-bold text-red-600 dark:text-red-400">
                  {skill.level}%
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed font-['Inter']">
                {skill.description}
              </p>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-700 group-hover:scale-x-105`}
                  style={{
                    width: `${skill.level}%`,
                    transitionDelay: `${index * 50}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[
            { number: '11+', label: 'Core Technologies' },
            { number: '87%', label: 'Average Proficiency' },
            { number: '30+', label: 'Projects Completed' },
            { number: '3', label: 'Years Experience' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400 mb-1 transition-all duration-300 group-hover:scale-110`}>
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-['Inter']">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
