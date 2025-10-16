
import { FileDown, Download, Award, TrendingUp, Star, CheckCircle, Quote, FileText, GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/theme-provider';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // We'll use IntersectionObserver to trigger the animation when scrolled into view
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  // Set up observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2
    });

    const section = document.getElementById('resume');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const skills = [
    { name: 'Python', level: 5, category: 'Programming' },
    { name: 'Machine Learning', level: 4, category: 'AI/ML' },
    { name: 'Data Analysis', level: 4, category: 'Analytics' },
    { name: 'SQL', level: 5, category: 'Database' },
    { name: 'TensorFlow', level: 4, category: 'AI/ML' },
    { name: 'Power BI', level: 4, category: 'Analytics' },
    { name: 'Scikit-learn', level: 4, category: 'AI/ML' },
    { name: 'JavaScript', level: 5, category: 'Programming' },
    { name: 'Cybersecurity', level: 4, category: 'Security' }
  ];

  const experiences = [
    {
      title: "Founder & Systems Architect",
      company: "ScarGo Express",
      period: "2023–2024",
      location: "Nairobi, Kenya",
      description: "Built ScarGo from zero to signal—designing logistics systems that move fast, feel intuitive, and earn trust. Vetted hardware in Nairobi's toughest markets, architected brand UX, and delivered emotionally resonant messaging that sticks."
    },
    {
      title: "Data Scientist",
      company: "Freelance & Portfolio Projects",
      period: "2020-2023",
      location: "Remote",
      description: "Applied systems thinking and pattern recognition to real-world data problems. Delivered predictive models, dashboards, and API evaluations across real estate, supply chains, and mental health tech—always with clarity, ethics, and edge. Collaborated with Fast (2021) on checkout flow diagnostics prior to their Series A; contributed to UX audits and performance insights before the company sunset."
    }
  ];

  const education = [
    {
      degree: "BSc in Data Science",
      institution: "Nexford University",
      year: "Ongoing",
      grade: "Currently Pursuing"
    },
    {
      degree: "Bachelor's in Computer Science & Applied Mathematics",
      institution: "Strathmore University",
      year: "",
      grade: ""
    },
    {
      degree: "Data Science Program",
      institution: "Moringa School",
      year: "Completed",
      grade: ""
    },
    {
      degree: "Data Science Program",
      institution: "ALX",
      year: "Completed",
      grade: ""
    }
  ];

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-[#DC143C]/10 to-[#B91C3C]/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#B91C3C]/10 to-[#DC143C]/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-[#DC143C]/5 to-transparent rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Centered Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#DC143C]/10 px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-[#DC143C]" />
            <span className="text-[#DC143C] font-inter text-sm font-medium">Professional Profile</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-black mb-6 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] bg-clip-text text-transparent">
            My Resume
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] mx-auto mb-6"></div>
          <p className="text-muted-foreground font-inter text-lg max-w-3xl mx-auto leading-relaxed">
            A focused overview of my early career journey in data science, showcasing my growing expertise and passion for turning data into meaningful insights.
          </p>
        </div>

        {/* Main Resume Content - Perfectly Centered */}
        <div className="max-w-6xl mx-auto">
          {/* Resume Download Section */}
          <div className={`glass-card p-8 md:p-12 mb-12 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <FileText className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-4 text-foreground">
                Download My Complete Resume
              </h3>

              <p className="text-muted-foreground font-inter text-lg mb-8 leading-relaxed">
                Get the complete picture of my educational background, early career experience, and developing technical skills.
                This document highlights my journey as an emerging data scientist.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/resume.pdf"
                  download
                  className="group flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#DC143C]/25"
                >
                  <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-semibold">Download Resume (PDF)</span>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground font-inter text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Updated 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4 text-[#DC143C]" />
                    <span>3 Pages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Skills Analysis */}
            <div className={`glass-card p-8 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-[#DC143C]" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">Technical Skill Analysis</h3>
                <p className="text-muted-foreground font-inter text-sm">Comprehensive proficiency across core technologies and frameworks</p>
              </div>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs px-2 py-1 bg-[#DC143C]/10 text-[#DC143C] rounded-full">
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-[#DC143C]">
                        {skill.level}/5
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] h-3 rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105"
                        style={{
                          width: `${(skill.level / 5) * 100}%`,
                          opacity: isVisible ? 1 : 0,
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Quote */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[#DC143C] mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground font-inter text-sm italic leading-relaxed">
                    "Scar demonstrates exceptional proficiency across multiple domains - expert in Python programming and SQL databases, with strong capabilities in machine learning frameworks including XGBoost, TensorFlow, and Scikit-learn. Combines solid analytical skills with practical AI/ML implementation experience."
                  </p>
                </div>
                <div className="mt-3 text-right">
                  <span className="text-[#DC143C] font-inter text-xs font-medium">— AI Assessment</span>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className={`glass-card p-8 transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-[#DC143C]" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">Professional Experience</h3>
                <p className="text-muted-foreground font-inter text-sm">Career progression and key roles</p>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-[#DC143C]/30 last:border-l-0">
                    <div className="absolute -left-3 top-2 w-6 h-6 bg-[#DC143C] rounded-full border-4 border-card flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>

                    <div className="glass-card p-4 hover:scale-105 transition-all duration-300">
                      <h4 className="font-montserrat font-bold text-foreground mb-1">{exp.title}</h4>
                      <p className="text-[#DC143C] font-inter font-medium text-sm mb-2">{exp.company}</p>

                      <div className="flex flex-col gap-1 mb-3">
                        <div className="flex items-center gap-2 text-muted-foreground font-inter text-xs">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground font-inter text-xs">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className={`glass-card p-8 transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-[#DC143C]" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">Education</h3>
                <p className="text-muted-foreground font-inter text-sm">Academic background and qualifications</p>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="glass-card p-4 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-montserrat font-bold text-foreground">{edu.degree}</h4>
                        <p className="text-[#DC143C] font-inter font-medium text-sm">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-muted-foreground font-inter text-xs">{edu.year}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-inter text-sm">{edu.grade}</p>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-montserrat font-bold text-foreground mb-4 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#DC143C]" />
                  Key Certifications
                </h4>
                <div className="space-y-2">
                  {[
                    "IBM Certified Data Scientist",
                    "AWS Machine Learning Specialty",
                    "Google Cloud Data Analytics",
                    "Microsoft Azure AI Engineer"
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground font-inter text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {[
              { number: '10', label: 'Core Technologies' },
              { number: '90%', label: 'Average Proficiency' },
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

          {/* Call to Action */}
          <div className={`text-center mt-16 transition-all duration-1000 delay-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-4">
                Interested in collaborating on data projects?
              </h3>
              <p className="font-inter text-muted-foreground mb-6">
                I'm always eager to learn and contribute to meaningful data science projects. Let's connect and explore opportunities!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#DC143C]/25"
                >
                  <span>Start a Conversation</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
                <a
                  href="mailto:scharbutcher@gmail.com"
                  className="group flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#DC143C]/25"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l4-4m-4 4l-4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
