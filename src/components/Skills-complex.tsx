import { Code2, Database, Brain, BarChart3, Cloud, Award } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import { useScrollAnimation } from '@/hooks/useAnime';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  const skillsRef = useScrollAnimation({
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo'
  });

  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Create floating particles
  useEffect(() => {
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2000
    }));
    setParticles(particleArray);

    // Animate particles
    anime({
      targets: '.skills-particle',
      translateY: () => anime.random(-30, 30),
      translateX: () => anime.random(-30, 30),
      duration: () => anime.random(4000, 8000),
      delay: (el, i) => particleArray[i]?.delay || 0,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate skill cards with stagger effect
          anime({
            targets: '.skill-card',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(100, { start: 300 }),
            duration: 800,
            easing: 'easeOutExpo'
          });

          // Animate progress bars
          setTimeout(() => {
            progressRefs.current.forEach((ref, index) => {
              if (ref) {
                const skill = skills.find(s => s.name === ref.getAttribute('data-skill'));
                if (skill) {
                  anime({
                    targets: ref,
                    width: [`0%`, `${skill.level}%`],
                    duration: 1500,
                    delay: index * 100,
                    easing: 'easeOutExpo'
                  });
                }
              }
            });
          }, 800);
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
    <section id="skills" ref={skillsRef} className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="skills-particle absolute w-1 h-1 bg-red-500/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
          />
        ))}

        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-red-400/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-red-500/10 rotate-45 animate-spin opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-red-600/5 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 px-4 py-2 rounded-full mb-6 relative group">
            <Award className="w-4 h-4 text-red-600 dark:text-red-400 animate-pulse" />
            <span className="text-red-600 dark:text-red-400 font-medium text-sm font-['Helvetica_Now_Medium']">Technical Expertise</span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-['Montserrat'] relative">
            Technical Skills
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse"></div>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-['Inter']">
            A focused toolkit of technologies enabling data-driven solutions and insights that transform complex challenges into actionable business value.
          </p>
        </div>

        {/* Category Tabs with enhanced animations */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {skillCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 font-['Poppins'] hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <category.icon className={`w-4 h-4 transition-transform duration-300 ${activeCategory === category.id ? 'animate-spin' : ''}`} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid with enhanced animations */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 group hover:scale-105`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="text-sm font-bold text-red-600 dark:text-red-400 animate-pulse">
                  {skill.level}%
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed font-['Inter']">
                {skill.description}
              </p>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative overflow-hidden">
                <div
                  ref={(el) => {
                    if (el) progressRefs.current[index] = el;
                  }}
                  data-skill={skill.name}
                  className={`bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full transition-all duration-1000 group-hover:scale-x-105 relative`}
                  style={{ width: '0%' }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Summary Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[
            { number: '11+', label: 'Core Technologies', icon: Code2 },
            { number: '87%', label: 'Average Proficiency', icon: Award },
            { number: '30+', label: 'Projects Completed', icon: Brain },
            { number: '3', label: 'Years Experience', icon: BarChart3 }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-red-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
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
