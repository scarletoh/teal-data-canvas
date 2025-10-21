import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Database, Brain, BarChart3, TrendingUp, Zap, Target, Code, Lightbulb, Rocket, Shield, Users, CheckCircle, Star, ArrowRight, Award, Clock, DollarSign } from 'lucide-react';
import { useTheme } from '@/contexts/theme-provider';
import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Typography System Import
import '../components/typography.css';

const Services = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll reveal hooks for different sections
  const heroReveal = useScrollReveal({
    threshold: 0.2,
    delay: 200,
    direction: 'up',
    distance: 20
  });

  const servicesReveal = useScrollReveal({
    threshold: 0.2,
    delay: 300,
    direction: 'up',
    distance: 20
  });

  const processReveal = useScrollReveal({
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

  const services = [
    {
      icon: Database,
      title: 'Data Science Consulting',
      description: 'I work hands-on with your team to uncover hidden patterns in your data, building predictive models that actually drive business decisions. From customer behavior analysis to operational optimization, I turn complex datasets into clear strategic advantages.',
      features: ['Customer Segmentation & Lifetime Value', 'Sales Forecasting & Trend Analysis', 'Risk Assessment & Fraud Detection', 'Supply Chain Optimization', 'Market Basket Analysis', 'A/B Testing Strategy'],
      deliverables: ['Working Predictive Models', 'Executive Summary Reports', 'Implementation Roadmap', 'Team Training Sessions'],
      timeline: '2-6 weeks',
      investment: 'Starting at $2,500'
    },
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'I build custom ML models that solve real business problems - whether it\'s automating customer support, predicting equipment failures, or optimizing pricing strategies. No black-box solutions, just transparent, maintainable AI that delivers measurable results.',
      features: ['Natural Language Processing', 'Computer Vision Applications', 'Recommendation Engines', 'Anomaly Detection Systems', 'Time Series Forecasting', 'Automated Decision Systems'],
      deliverables: ['Deployed ML Models', 'API Documentation', 'Performance Monitoring Setup', 'Model Interpretability Reports'],
      timeline: '4-12 weeks',
      investment: 'Starting at $5,000'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'I create dashboards that your team actually uses. No more data dumps - just actionable insights delivered through clean, intuitive interfaces that highlight what matters most to your business growth.',
      features: ['Executive KPI Dashboards', 'Operational Performance Tracking', 'Customer Behavior Analytics', 'Financial Performance Monitoring', 'Real-time Alert Systems', 'Mobile-responsive Designs'],
      deliverables: ['Interactive Power BI/Tableau Dashboards', 'Automated Report Generation', 'User Access Management', 'Training Documentation'],
      timeline: '2-8 weeks',
      investment: 'Starting at $3,000'
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics & Visualization',
      description: 'Transform your raw data into compelling visual stories. I specialize in making complex information digestible, creating charts and graphs that reveal insights at a glance and drive data-driven decisions across your organization.',
      features: ['Custom Chart Libraries', 'Interactive Data Stories', 'Geographic Data Mapping', 'Statistical Analysis Reports', 'Correlation Studies', 'Data Quality Assessments'],
      deliverables: ['Visual Analytics Suite', 'Story Templates', 'Presentation Decks', 'Data Dictionary'],
      timeline: '1-4 weeks',
      investment: 'Starting at $1,800'
    },
    {
      icon: Zap,
      title: 'AI Strategy & Implementation',
      description: 'Navigate the AI landscape with confidence. I help you identify the highest-impact AI opportunities in your business, create realistic implementation roadmaps, and guide you through technology selection and change management.',
      features: ['AI Readiness Assessment', 'Use Case Prioritization', 'Technology Architecture Planning', 'ROI Modeling', 'Team Capability Building', 'Vendor Evaluation'],
      deliverables: ['AI Strategy Roadmap', 'Implementation Timeline', 'Budget Projections', 'Success Metrics Framework'],
      timeline: '3-8 weeks',
      investment: 'Starting at $4,000'
    },
    {
      icon: Target,
      title: 'Custom AI Applications',
      description: 'Build AI solutions tailored to your specific challenges. From intelligent document processing to automated quality control, I develop production-ready applications that integrate seamlessly with your existing systems.',
      features: ['Document Processing Automation', 'Quality Control Systems', 'Intelligent Search', 'Process Automation', 'Custom Algorithm Development', 'System Integration'],
      deliverables: ['Production Application', 'API Documentation', 'User Guides', 'Maintenance Plan'],
      timeline: '8-16 weeks',
      investment: 'Starting at $8,000'
    },
    {
      icon: Code,
      title: 'Data Engineering',
      description: 'Build robust data infrastructure that scales with your business. I design and implement data pipelines, warehouses, and processing systems that handle your data efficiently and reliably.',
      features: ['ETL Pipeline Development', 'Cloud Data Warehouse Setup', 'Real-time Data Processing', 'Data Lake Architecture', 'Performance Optimization', 'Data Governance Implementation'],
      deliverables: ['Scalable Data Platform', 'Automated Data Pipelines', 'Monitoring Dashboards', 'Architecture Documentation'],
      timeline: '4-10 weeks',
      investment: 'Starting at $6,000'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Identify untapped opportunities and prototype innovative solutions. I help you explore emerging technologies and develop proof-of-concepts that can give your business a competitive edge.',
      features: ['Technology Scouting', 'Innovation Workshops', 'Rapid Prototyping', 'Feasibility Studies', 'Market Analysis', 'Competitive Intelligence'],
      deliverables: ['Innovation Roadmap', 'Prototype Demonstrations', 'Technical Specifications', 'Business Case Analysis'],
      timeline: '2-6 weeks',
      investment: 'Starting at $3,500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Scar transformed our data chaos into actionable insights. The ML models increased our prediction accuracy by 40% and saved us $50K in the first quarter alone.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Data Director, HealthCorp',
      content: 'Built us a real-time dashboard that actually gets used daily. Decision-making speed improved by 60% and we caught compliance issues before they became problems.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, PropertyPlus',
      content: 'The AI document processing system Scar built automated our entire contract review process. What used to take 2 days now happens in 2 minutes with 99% accuracy.',
      rating: 5
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'I dive deep into your business challenges, analyze your current data setup, and identify the highest-impact opportunities. We\'ll review your goals, constraints, and existing systems to create a tailored solution strategy.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Based on our analysis, I develop a clear roadmap with specific milestones, technology recommendations, and ROI projections. You\'ll get a detailed plan that outlines exactly what we\'ll build and how it will benefit your business.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'I build your solution using agile methods, keeping you updated with regular demos and progress reports. Whether it\'s ML models, dashboards, or data pipelines, I ensure everything works seamlessly with your existing systems.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and performance tuning to ensure your solution not only works but excels. I optimize for speed, accuracy, and scalability while addressing any edge cases or integration challenges.'
    },
    {
      step: '05',
      title: 'Training & Handover',
      description: 'I provide comprehensive training for your team and ensure smooth knowledge transfer. You\'ll get detailed documentation, ongoing support, and the confidence to maintain and extend your new capabilities.'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
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
          <section ref={heroReveal.elementRef} className="py-16 lg:py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/3 via-transparent to-[#B91C3C]/3"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className={`max-w-6xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                {/* Two Column Layout - Content & Portrait */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                  {/* Left Side - Content */}
                  <div>
                    {/* Compact Header */}
                    <div className="mb-12">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DC143C]/15 to-[#B91C3C]/15 px-3 py-1.5 rounded-full mb-6 border border-[#DC143C]/30 backdrop-blur-sm">
                        <Zap className="w-3 h-3 text-[#DC143C]" />
                        <span className="text-[#DC143C] font-inter text-sm font-medium">Professional Services</span>
                      </div>

                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat-bold mb-4 text-gray-900 dark:text-white leading-tight">
                        Data Science &<br />
                        <span className="bg-gradient-to-r from-[#DC143C] to-[#B91C3C] bg-clip-text text-transparent">
                          AI Solutions
                        </span>
                      </h1>

                      <div className="h-0.5 w-16 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] mx-auto mb-6"></div>

                      <p className="text-lg md:text-xl font-inter-regular text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                        I specialize in turning complex data challenges into practical, profitable solutions.
                        From predictive analytics to AI automation, I deliver results that actually move the needle for your business.
                      </p>
                    </div>

                    {/* Modern Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="group relative">
                        <div className="glass-card p-4 lg:p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#DC143C]/10">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <CheckCircle className="w-5 h-5 text-[#DC143C]" />
                          </div>
                          <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 font-mono">
                            30+
                          </div>
                          <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium leading-tight">
                            Projects Completed
                          </div>
                          {/* Subtle glow effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#DC143C]/5 to-[#B91C3C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="glass-card p-4 lg:p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#DC143C]/10">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <Target className="w-5 h-5 text-[#DC143C]" />
                          </div>
                          <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 font-mono">
                            8
                          </div>
                          <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium leading-tight">
                            Core Services
                          </div>
                          {/* Subtle glow effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#DC143C]/5 to-[#B91C3C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="glass-card p-4 lg:p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#DC143C]/10">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <Award className="w-5 h-5 text-[#DC143C]" />
                          </div>
                          <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 font-mono">
                            3
                          </div>
                          <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium leading-tight">
                            Years Experience
                          </div>
                          {/* Subtle glow effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#DC143C]/5 to-[#B91C3C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>

                      <div className="group relative">
                        <div className="glass-card p-4 lg:p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#DC143C]/10">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <Clock className="w-5 h-5 text-[#DC143C]" />
                          </div>
                          <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 font-mono">
                            24/7
                          </div>
                          <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 font-medium leading-tight">
                            Support
                          </div>
                          {/* Subtle glow effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#DC143C]/5 to-[#B91C3C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Professional Portrait */}
                  <div className="flex justify-center">
                    <div className="relative group">
                      {/* Enhanced portrait container */}
                      <div className="w-96 h-[32rem] lg:w-[36rem] lg:h-[40rem] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/30 dark:ring-gray-800/60 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative">
                        {/* Portrait background overlay for better contrast */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 dark:to-black/20"></div>

                        {/* Professional Portrait */}
                        <div className="w-full h-full flex items-center justify-center p-10">
                          <div className="relative">
                            {/* Main portrait image */}
                            <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden shadow-2xl ring-8 ring-white/50 dark:ring-gray-800/60 hover:ring-[#DC143C]/60 transition-all duration-300">
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

          {/* Services Grid */}
          <section ref={servicesReveal.elementRef} className="py-20 bg-gradient-to-b from-background to-background/80">
            <div className="container mx-auto px-4">
              <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-helvetica-medium mb-6 text-gray-900 dark:text-white">
                    What I Can Build For You
                  </h2>
                  <p className="font-inter-regular text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                    Eight specialized services, each designed around real business problems I've solved before.
                    From quick analytics wins to complex AI implementations, I deliver solutions that work in the real world.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {services.map((service, index) => (
                    <div key={service.title} className={`group p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                      theme === 'light'
                        ? 'bg-white/90 border-gray-200/50 hover:border-[#DC143C]/50 shadow-lg hover:shadow-[#DC143C]/10'
                        : 'bg-gray-800/90 border-gray-700/50 hover:bg-gray-700/90 hover:border-[#DC143C]/50'
                    }`}>
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className={`text-2xl font-bold mb-4 ${
                          theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`leading-relaxed mb-6 text-base ${
                          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                        }`}>
                          {service.description}
                        </p>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className={`font-semibold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                            Key Features:
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className={`font-semibold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                            Deliverables:
                          </h4>
                          <div className="grid grid-cols-1 gap-1">
                            {service.deliverables.map((deliverable, deliverableIndex) => (
                              <div key={deliverableIndex} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-[#DC143C] rounded-full flex-shrink-0"></div>
                                <span className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                                  {deliverable}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-[#DC143C]" />
                            <span className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}>
                              {service.timeline}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <a
                            href="/contact"
                            className="text-xs px-3 py-1.5 bg-[#DC143C]/10 text-[#DC143C] rounded-lg hover:bg-[#DC143C] hover:text-white transition-all duration-300 font-poppins-medium"
                          >
                            Get Quote
                          </a>
                          <a
                            href="/contact"
                            className="text-xs px-3 py-1.5 border border-[#DC143C]/30 text-[#DC143C] rounded-lg hover:bg-[#DC143C] hover:text-white transition-all duration-300 font-poppins-medium"
                          >
                            Customize
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section ref={processReveal.elementRef} className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/5 via-transparent to-[#B91C3C]/5"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-helvetica-medium mb-6 text-gray-900 dark:text-white">
                    How I Work With You
                  </h2>
                  <p className="font-inter-regular text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
                    A straightforward, collaborative process that ensures we build exactly what you need.
                    No surprises, just steady progress toward solutions that deliver real value.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                  {process.map((step, index) => (
                    <div key={step.step} className="relative group">
                      <div className={`glass-card p-6 hover:scale-105 transition-all duration-300 ${
                        index < process.length - 1 ? 'lg:mb-8' : ''
                      }`}>
                        <div className="w-12 h-12 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                          {step.step}
                        </div>
                        <h3 className={`text-lg font-bold mb-3 text-center ${
                          theme === 'light' ? 'text-gray-900' : 'text-white'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm leading-relaxed text-center ${
                          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                        }`}>
                          {step.description}
                        </p>
                      </div>

                      {/* Connection Line */}
                      {index < process.length - 1 && (
                        <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] opacity-30"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section ref={ctaReveal.elementRef} className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/10 via-transparent to-[#B91C3C]/10"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="glass-card p-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full flex items-center justify-center mx-auto mb-8">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-helvetica-medium mb-6 text-gray-900 dark:text-white">
                    Ready to Turn Your Data Into Results?
                  </h2>

                  <p className="font-inter-regular text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Let's discuss your specific challenges and build something that actually moves the needle.
                    Whether you need a quick dashboard or a complex AI system, I'm here to help make it happen.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white font-poppins-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#DC143C]/25"
                    >
                      Start Your Project
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>

                    <a
                      href="/projects"
                      className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white font-poppins-medium rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      View Case Studies
                      <Award className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Quick Response</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Shield className="w-4 h-4" />
                      <span>Confidential</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>Collaborative</span>
                    </div>
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

export default Services;

<style>{`
  .glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .dark .glass-card {
    background: rgba(31, 41, 55, 0.8);
    border: 1px solid rgba(75, 85, 99, 0.3);
  }

  .bg-gradient-radial {
    background: radial-gradient(circle at 30% 20%, rgba(31, 41, 55, 0.3) 0%, transparent 50%);
  }
`}</style>
