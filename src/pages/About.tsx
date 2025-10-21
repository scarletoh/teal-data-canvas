import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/theme-provider';
import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Award, Users, TrendingUp, Coffee, Heart, Star, Target, Zap, BookOpen,
  Code, Database, Brain, Lightbulb, Rocket, Shield, Globe, Clock,
  MapPin, GraduationCap, Briefcase, Calendar, ChevronRight, CheckCircle,
  Quote, ArrowRight, ExternalLink, Github, Linkedin, Twitter, Mail
} from 'lucide-react';

const About = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll reveal hooks for different sections
  const journeyReveal = useScrollReveal({
    threshold: 0.2,
    delay: 200,
    direction: 'up',
    distance: 20
  });

  const skillsReveal = useScrollReveal({
    threshold: 0.2,
    delay: 300,
    direction: 'up',
    distance: 20
  });

  const valuesReveal = useScrollReveal({
    threshold: 0.2,
    delay: 400,
    direction: 'up',
    distance: 20
  });

  const ctaReveal = useScrollReveal({
    threshold: 0.2,
    delay: 500,
    direction: 'fade',
    distance: 0
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const journey = [
    {
      year: "2020",
      title: "Junior Talent Researcher",
      description: "Supported candidate sourcing and screening for early-stage roles at Olive AI. Helped maintain tracking systems and assisted with outreach during team expansion.",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      year: "2021",
      title: "UX Consultant & Data Scientist",
      description: "Worked across hardware in Nairobi's toughest markets, architected brand UX, and delivered emotionally resonant messaging that sticks. Transitioned into data science, applying machine learning and business intelligence to real-world problems.",
      icon: Lightbulb,
      color: "bg-green-500"
    },
    {
      year: "2022",
      title: "Advanced Data Science Practice",
      description: "Led projects involving predictive modeling, business intelligence dashboards, and workflow optimization.",
      icon: Brain,
      color: "bg-purple-500"
    },
    {
      year: "2023",
      title: "Independent Consulting",
      description: "Started offering freelance data science and UX services while continuing professional development.",
      icon: Briefcase,
      color: "bg-orange-500"
    },
    {
      year: "2024",
      title: "Founder & Systems Architect",
      description: "Built ScarGo from the ground up—designing logistics flows, brand identity, and emotionally resonant systems that earn trust.",
      icon: Rocket,
      color: "bg-red-500"
    }
  ];

  const skills = [
    {
      category: "Programming & Data Science",
      icon: Code,
      items: [
        "Python (Expert)", "JavaScript (Expert)", "SQL (Expert)", "R (Intermediate)",
        "Pandas/NumPy", "Scikit-learn", "XGBoost", "TensorFlow"
      ]
    },
    {
      category: "Data Visualization",
      icon: Database,
      items: [
        "Power BI (Expert)", "Tableau (Expert)", "Matplotlib/Seaborn",
        "Plotly/Dash", "Streamlit"
      ]
    },
    {
      category: "Cloud & Infrastructure",
      icon: Target,
      items: [
        "AWS (Intermediate)", "Google Cloud (Beginner)", "Git & GitHub",
        "Docker", "CI/CD Pipelines"
      ]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Every solution starts with understanding your unique challenges and goals"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Continuously exploring cutting-edge technologies to deliver future-proof solutions"
    },
    {
      icon: Shield,
      title: "Data Privacy & Ethics",
      description: "Committed to responsible AI practices and protecting sensitive information"
    },
    {
      icon: Users,
      title: "Knowledge Sharing",
      description: "Passionate about democratizing data science through education and mentorship"
    }
  ];

  const achievements = [
    { metric: "30+", label: "Projects Completed", icon: CheckCircle },
    { metric: "15+", label: "Happy Clients", icon: Users },
    { metric: "3", label: "Years Experience", icon: Calendar },
    { metric: "500+", label: "Cups of Coffee", icon: Clock }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'light'
        ? 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
        : 'bg-black text-white relative'
    }`}>
      {/* Enhanced background effects */}
      {theme === 'dark' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/10"></div>
          <div className="absolute inset-0 bg-gradient-radial from-gray-900/30 via-transparent to-transparent"></div>
        </>
      )}

      <div className="relative z-10">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-8 lg:py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/3 via-transparent to-[#B91C3C]/3"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className={`max-w-6xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                {/* Two Column Layout - Content & Portrait */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                  {/* Left Side - Content */}
                  <div>
                    {/* Compact Header */}
                    <div className="text-left mb-8">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DC143C]/15 to-[#B91C3C]/15 px-3 py-1.5 rounded-full mb-6 border border-[#DC143C]/30 backdrop-blur-sm">
                        <Star className="w-3 h-3 text-[#DC143C]" />
                        <span className="text-[#DC143C] font-poppins-medium text-sm">About Me</span>
                      </div>

                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat-bold mb-4 text-gray-900 dark:text-white leading-tight">
                        Data Scientist &<br />
                        <span className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] bg-clip-text text-transparent">
                          AI Specialist
                        </span>
                      </h1>

                      <div className="h-0.5 w-16 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] mb-6"></div>

                      <p className="text-gray-600 dark:text-gray-300 text-lg mb-4 font-inter-regular">Nairobi, Kenya • Available for Projects</p>

                      <p className="text-lg md:text-xl font-inter-regular text-gray-600 dark:text-gray-300 leading-relaxed">
                        Transforming complex data challenges into actionable business opportunities through innovative machine learning solutions and strategic data insights.
                      </p>
                    </div>

                    {/* Modern Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <div key={achievement.label} className="group relative">
                          <div className="glass-card p-4 lg:p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#DC143C]/10">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                              <achievement.icon className="w-5 h-5 text-[#DC143C]" />
                            </div>
                            <div className="text-2xl lg:text-3xl font-montserrat-bold text-gray-900 dark:text-white mb-1">
                              {achievement.metric}
                            </div>
                            <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-helvetica-medium leading-tight">
                              {achievement.label}
                            </div>
                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#DC143C]/5 to-[#B91C3C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Professional Portrait */}
                  <div className="flex justify-center">
                    <div className="relative group">
                      {/* Enhanced portrait container */}
                      <div className="w-80 h-96 lg:w-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/30 dark:ring-gray-800/60 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative">
                        {/* Portrait background overlay for better contrast */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 dark:to-black/20"></div>

                        {/* Professional Portrait */}
                        <div className="w-full h-full flex items-center justify-center p-8">
                          <div className="relative">
                            {/* Main portrait image */}
                            <div className="w-72 h-72 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden shadow-2xl ring-8 ring-white/50 dark:ring-gray-800/60 hover:ring-[#DC143C]/60 transition-all duration-300">
                              <img
                                src="/scar-photo.jpg"
                                alt="Scar - Data Scientist & AI Specialist"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                style={{
                                  filter: 'contrast(1.2) brightness(1.1) saturate(1.2)',
                                  boxShadow: '0 0 25px rgba(220, 20, 60, 0.4)'
                                }}
                                onError={(e) => {
                                  console.log('Portrait failed to load, using fallback');
                                  e.currentTarget.src = '/placeholder.svg';
                                }}
                                onLoad={(e) => {
                                  console.log('Portrait loaded successfully');
                                  e.currentTarget.style.opacity = '1';
                                }}
                              />

                              {/* Loading placeholder while image loads */}
                              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse opacity-0 transition-opacity duration-300" style={{ zIndex: -1 }}></div>
                            </div>

                            {/* Status indicator */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse shadow-lg"></div>

                            {/* Professional badge */}
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#DC143C] text-white px-4 py-2 rounded-full text-sm font-montserrat-bold shadow-lg">
                              Available for Projects
                            </div>
                          </div>
                        </div>

                        {/* Enhanced decorative elements */}
                        <div className="absolute -top-6 -right-6 w-8 h-8 bg-[#DC143C] rounded-full opacity-60 animate-pulse shadow-lg"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#B91C3C] rounded-full opacity-50 animate-bounce shadow-lg"></div>
                        <div className="absolute top-1/4 -left-8 w-2 h-2 bg-[#DC143C] rounded-full opacity-40 animate-pulse delay-500"></div>
                        <div className="absolute bottom-1/3 -right-8 w-2 h-2 bg-[#B91C3C] rounded-full opacity-30 animate-pulse delay-1000"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Journey Timeline */}
          <section ref={journeyReveal.elementRef} className="py-20 bg-gradient-to-b from-background to-background/80">
            <div className="container mx-auto px-4">
              <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-helvetica-medium mb-6 text-gray-900 dark:text-white">
                    My Journey
                  </h2>
                  <p className="font-inter-regular text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                    From talent research to entrepreneurship - here's how my diverse experiences shaped my expertise in data science, UX design, and building systems that truly resonate with users.
                  </p>
                </div>

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#DC143C] to-[#B91C3C] opacity-30"></div>

                  <div className="space-y-12">
                    {journey.map((milestone, index) => (
                      <div key={milestone.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                          <div className={`glass-card p-6 hover:scale-105 transition-all duration-300 ${
                            index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                          } max-w-md`}>
                            <div className={`w-12 h-12 ${milestone.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                              <milestone.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                          </div>
                        </div>

                        <div className="relative">
                          <div className="w-4 h-4 bg-[#DC143C] rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-[#DC143C] text-white px-3 py-1 rounded-full text-sm font-bold">
                            {milestone.year}
                          </div>
                        </div>

                        <div className="w-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills & Expertise */}
          <section ref={skillsReveal.elementRef} className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/5 via-transparent to-[#B91C3C]/5"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-helvetica-medium mb-6 text-gray-900 dark:text-white">
                    Technical Expertise
                  </h2>
                  <p className="font-inter-regular text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                    A comprehensive toolkit built through years of hands-on experience and continuous learning.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {skills.map((skillCategory, index) => (
                    <div key={skillCategory.category} className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <skillCategory.icon className="w-8 h-8 text-[#DC143C]" />
                      </div>

                      <h3 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white group-hover:text-[#DC143C] transition-colors">
                        {skillCategory.category}
                      </h3>

                      <div className="space-y-3">
                        {skillCategory.items.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 bg-[#DC143C] rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-400">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Values & Philosophy */}
          <section ref={valuesReveal.elementRef} className="py-20 bg-gradient-to-b from-background to-background/80">
            <div className="container mx-auto px-4">
              <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-helvetica-medium mb-6 text-gray-900 dark:text-white">
                    Values & Philosophy
                  </h2>
                  <p className="font-inter-regular text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                    The principles that guide my work and define how I approach every project and client relationship.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {values.map((value, index) => (
                    <div key={value.title} className="glass-card p-8 hover:scale-105 transition-all duration-300 group">
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <value.icon className="w-8 h-8 text-[#DC143C]" />
                      </div>

                      <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white group-hover:text-[#DC143C] transition-colors">
                        {value.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-center text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Philosophy Quote */}
                <div className="glass-card p-10 border-l-4 border-[#DC143C] max-w-4xl mx-auto">
                  <div className="flex items-start gap-6">
                    <Quote className="w-12 h-12 text-[#DC143C] mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-[#DC143C]">My Philosophy</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed italic">
                        "Data Decoded Dominated" - I believe in not just analyzing data, but mastering it to unlock
                        its full potential for driving business decisions and creating impactful solutions. Every dataset
                        tells a story, and it's my mission to help you understand and leverage that story for success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section ref={ctaReveal.elementRef} className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/10 via-transparent to-[#B91C3C]/10"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="glass-card p-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full flex items-center justify-center mx-auto mb-8">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-helvetica-medium mb-6 text-gray-900 dark:text-white">
                    Ready to Start Your Data Journey?
                  </h2>

                  <p className="font-inter-regular text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Let's discuss how we can transform your data challenges into competitive advantages.
                    Whether you need a consultation, project collaboration, or strategic guidance.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white font-poppins-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      Get In Touch
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>

                    <a
                      href="/projects"
                      className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white font-poppins-medium rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      View My Work
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#DC143C] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#DC143C] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:scharbutcher@gmail.com"
                      className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#DC143C] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;

<style>{`
  /* Typography System */
  .font-montserrat-bold { font-family: 'Montserrat', sans-serif; font-weight: 700; }
  .font-helvetica-medium { font-family: 'Helvetica Now', 'Helvetica Neue', sans-serif; font-weight: 500; }
  .font-inter-regular { font-family: 'Inter', sans-serif; font-weight: 400; }
  .font-poppins-medium { font-family: 'Poppins', sans-serif; font-weight: 500; }

  /* Google Fonts Import */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400&family=Poppins:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Helvetica+Now:wght@500&display=swap');

  .bg-gradient-radial {
    background: radial-gradient(circle at 30% 20%, rgba(31, 41, 55, 0.3) 0%, transparent 50%);
  }
`}</style>
