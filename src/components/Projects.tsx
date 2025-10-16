import { ExternalLink, Github, Eye, Star, Calendar, Filter, Search, ArrowRight, Trophy, TrendingUp, Users, Zap, Database, Globe, Smartphone, Shield, Award, Code, Layers, Target, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/theme-provider';

// Typography System Import
import './typography.css';

// Import placeholder image as fallback
import placeholderImage from '/placeholder.svg';

// Project image imports with high-quality placeholder images from public sources
const projectImages = {
  realEstateImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80',
  healthcareImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80',
  pharmaImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80',
  propertyImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  ecommerceImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  logisticsImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  propertyAgentImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80',
  securityImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
};

const Projects = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Real Estate Price Prediction AI",
      image: projectImages.realEstateImage,
      description: "AI-powered platform that predicts property values using machine learning, helping real estate agents and buyers make data-driven decisions with 89% accuracy across 50+ markets.",
      longDescription: "This comprehensive platform uses advanced machine learning algorithms including Random Forest, XGBoost, and Neural Networks to analyze market trends, property features, and economic indicators. Features include real-time price predictions, market analysis dashboards, and automated valuation reports.",
      tags: ["Python", "Machine Learning", "Real Estate", "TensorFlow", "AWS", "React", "PostgreSQL"],
      github: "https://github.com/scar/real-estate-ai",
      demo: "https://real-estate-ai-demo.vercel.app",
      metrics: { accuracy: "89%", markets: "50+", users: "2.5K+", revenue: "+$2.1M" },
      category: "AI/ML",
      featured: true,
      year: "2024",
      status: "Active",
      technologies: ["TensorFlow", "AWS SageMaker", "React", "Python", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Healthcare AI Diagnostic Assistant",
      image: projectImages.healthcareImage,
      description: "AI agent that assists doctors with preliminary diagnosis using medical imaging analysis and patient data, reducing diagnostic time by 40% in clinical trials.",
      longDescription: "Advanced computer vision system that analyzes X-rays, MRIs, and CT scans using deep learning models. Integrates with hospital EMR systems and provides preliminary diagnoses with confidence scores. Currently deployed in 15+ clinical trials across major hospitals.",
      tags: ["AI Agents", "Healthcare", "Computer Vision", "Python", "Medical AI", "Docker", "FastAPI"],
      github: "https://github.com/scar/healthcare-ai",
      demo: "https://healthcare-ai-demo.vercel.app",
      metrics: { reduction: "40%", trials: "15+", accuracy: "91%", patients: "10K+" },
      category: "Healthcare",
      featured: true,
      year: "2023",
      status: "Production",
      technologies: ["PyTorch", "OpenCV", "FastAPI", "React", "MongoDB"]
    },
    {
      id: 3,
      title: "Pharmaceutical Supply Chain Optimizer",
      image: projectImages.pharmaImage,
      description: "Machine learning system that optimizes pharmaceutical supply chains, reducing waste by 25% and improving delivery efficiency for pharmacy networks.",
      longDescription: "End-to-end supply chain optimization platform that uses predictive analytics to forecast demand, optimize inventory levels, and streamline distribution. Reduced pharmaceutical waste by 25% and improved delivery efficiency by 35% across 200+ pharmacy locations.",
      tags: ["Supply Chain", "Pharmaceuticals", "Optimization", "Python", "SQL", "Apache Spark", "Tableau"],
      github: "https://github.com/scar/pharma-optimizer",
      demo: "https://pharma-optimizer-demo.vercel.app",
      metrics: { waste: "-25%", efficiency: "+35%", pharmacies: "200+", savings: "$1.8M" },
      category: "Optimization",
      featured: false,
      year: "2023",
      status: "Production",
      technologies: ["Apache Spark", "Python", "Tableau", "SQL Server", "Docker"]
    },
    {
      id: 5,
      title: "Property Management Intelligence Platform",
      image: projectImages.propertyImage,
      description: "AI-powered property management system that optimizes rental pricing, predicts maintenance needs, and automates tenant communications for real estate portfolios.",
      longDescription: "Comprehensive property management platform using machine learning to optimize rental pricing based on market trends, predict maintenance requirements using IoT sensor data, and automate tenant communication workflows. Features include automated rent collection, predictive maintenance scheduling, and intelligent tenant screening with fraud detection.",
      tags: ["Real Estate", "Property Management", "AI Automation", "Machine Learning", "IoT", "React", "Node.js"],
      github: "https://github.com/scar/property-intelligence",
      demo: "https://property-intelligence-demo.vercel.app",
      metrics: { properties: "150+", efficiency: "+45%", satisfaction: "92%", automation: "78%" },
      category: "Real Estate",
      featured: true,
      year: "2023",
      status: "Production",
      technologies: ["React", "Node.js", "TensorFlow", "MongoDB", "IoT Sensors", "Stripe API"]
    },
    {
      id: 7,
      title: "Intelligent Workflow Automation Platform",
      image: projectImages.logisticsImage,
      description: "End-to-end workflow automation system using AI to streamline business processes, reduce manual tasks by 70%, and improve operational efficiency across multiple departments.",
      longDescription: "Comprehensive automation platform that uses machine learning to analyze workflows, identify bottlenecks, and automatically optimize processes. Features include intelligent document processing, automated data entry, smart routing, and predictive task scheduling. Reduced operational costs by 45% and increased productivity by 60% across 25+ organizations.",
      tags: ["Automation", "AI", "Workflow Optimization", "Process Mining", "RPA", "Machine Learning", "Business Intelligence"],
      github: "https://github.com/scar/workflow-automation",
      demo: "https://workflow-automation-demo.vercel.app",
      metrics: { efficiency: "+60%", costs: "-45%", automation: "70%", organizations: "25+" },
      category: "Automation",
      featured: true,
      year: "2024",
      status: "Production",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Docker", "Kubernetes"]
    },
    {
      id: 8,
      title: "ScarGo Express",
      image: projectImages.logisticsImage,
      description: "Next-generation logistics platform that revolutionizes express delivery with AI-powered route optimization, real-time tracking, and predictive demand forecasting for faster, more reliable deliveries.",
      longDescription: "Comprehensive logistics solution combining advanced route optimization algorithms, real-time GPS tracking, and machine learning-based demand forecasting. Features include automated dispatch scheduling, dynamic pricing models, customer mobile app with live tracking, and predictive maintenance for delivery vehicles. Achieved 35% faster delivery times, 25% cost reduction, and 98% customer satisfaction across 200+ delivery partners.",
      tags: ["Logistics", "Express Delivery", "Route Optimization", "Real-time Tracking", "Mobile App", "Machine Learning", "Fleet Management"],
      github: "https://github.com/scar/scargo-express",
      demo: "https://scargo-express-demo.vercel.app",
      metrics: { speed: "+35%", costs: "-25%", satisfaction: "98%", partners: "200+" },
      category: "Logistics",
      featured: true,
      year: "2024",
      status: "Production",
      technologies: ["React Native", "Node.js", "PostgreSQL", "TensorFlow", "Mapbox API", "Socket.io"]
    },
    {
      id: 9,
      title: "DataShield Security Platform",
      image: projectImages.securityImage,
      description: "Comprehensive cybersecurity platform that protects sensitive data with advanced encryption, threat detection, and real-time monitoring to prevent data breaches and ensure compliance.",
      longDescription: "Enterprise-grade security platform featuring multi-layer encryption, AI-powered threat detection, real-time intrusion monitoring, and automated compliance reporting. Implements zero-trust architecture with role-based access control, secure API gateways, and automated vulnerability scanning. Achieved 99.9% threat detection rate and helped 150+ organizations maintain SOC 2 and GDPR compliance.",
      tags: ["Cybersecurity", "Data Protection", "Encryption", "Threat Detection", "Compliance", "Zero Trust", "API Security"],
      github: "https://github.com/scar/datashield-security",
      demo: "https://datashield-security-demo.vercel.app",
      metrics: { detection: "99.9%", compliance: "150+", breaches: "0", uptime: "99.95%" },
      category: "Security",
      featured: true,
      year: "2024",
      status: "Production",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes", "AWS Security"]
    },
  ];

  const categories = ['All', 'AI/ML', 'Healthcare', 'Real Estate', 'Optimization', 'Logistics', 'Security', 'Automation'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-[#DC143C]/8 to-[#B91C3C]/8 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#B91C3C]/8 to-[#DC143C]/8 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-[#DC143C]/3 to-transparent rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Top Section - Professional Portrait */}
          <div className="flex justify-center mb-12">
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

          {/* Bottom Section - Content */}
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Main Title */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat-bold mb-6 leading-tight">
                <span className="text-gray-900 dark:text-white">
                  Transforming <span className="text-[#DC143C]">Data</span> Into
                </span>
                <br />
                <span className="text-gray-900 dark:text-white font-extrabold">
                  <span className="text-[#DC143C]">Impactful</span> Solutions
                </span>
              </h1>

              {/* Subtle Red Underline */}
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#DC143C]/60 to-transparent mx-auto"></div>
            </div>

            {/* Enhanced Description */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg md:text-xl font-inter-regular text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Discover cutting-edge projects showcasing expertise in
                <span className="font-semibold text-gray-800 dark:text-gray-200 mx-1">machine learning</span>,
                <span className="font-semibold text-gray-800 dark:text-gray-200 mx-1">artificial intelligence</span>, and
                <span className="font-semibold text-gray-800 dark:text-gray-200 mx-1">data science</span>.
              </p>
              <p className="text-base font-inter-regular text-gray-500 dark:text-gray-400 leading-relaxed">
                Each project demonstrates technical innovation and delivers measurable business impact.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-[#DC143C]" />
                </div>
                <div className="text-2xl md:text-3xl font-montserrat-bold text-gray-900 dark:text-white mb-1">30+</div>
                <div className="text-sm font-inter-regular text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </div>

              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-[#DC143C]" />
                </div>
                <div className="text-2xl md:text-3xl font-montserrat-bold text-gray-900 dark:text-white mb-1">$150K+</div>
                <div className="text-sm font-inter-regular text-gray-600 dark:text-gray-400">Business Impact</div>
              </div>

              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-[#DC143C]" />
                </div>
                <div className="text-2xl md:text-3xl font-montserrat-bold text-gray-900 dark:text-white mb-1">1K+</div>
                <div className="text-sm font-inter-regular text-gray-600 dark:text-gray-400">Users Impacted</div>
              </div>

              <div className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-[#DC143C]" />
                </div>
                <div className="text-2xl md:text-3xl font-montserrat-bold text-gray-900 dark:text-white mb-1">4</div>
                <div className="text-sm font-inter-regular text-gray-600 dark:text-gray-400">Industries Served</div>
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="#featured-projects"
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white font-poppins-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#DC143C]/40 border border-[#DC143C]/30"
              >
                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Explore Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="https://github.com/scar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-[#DC143C] hover:text-white text-gray-700 dark:text-gray-300 font-poppins-medium rounded-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 hover:border-[#DC143C]"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>View on GitHub</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 text-sm font-inter-regular text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Production Ready</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#DC143C]" />
                <span>Industry Recognition</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#B91C3C]" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className={`mb-12 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DC143C]/50 focus:border-[#DC143C] transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-[#DC143C] to-[#B91C3C] text-white shadow-lg shadow-[#DC143C]/30'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-[#DC143C]/10 hover:text-[#DC143C]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            </div>
          </div>
        </div>

        {/* Featured Projects Showcase */}
        {selectedCategory === 'All' && featuredProjects.length > 0 && (
          <div id="featured-projects" className={`mb-16 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-helvetica-medium mb-4 text-gray-900 dark:text-white">Featured Projects</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project) => (
                <div key={project.id} className="glass-card group hover:scale-105 transition-all duration-300 border border-border/50 hover:border-[#DC143C]/30 rounded-2xl overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Featured Badge & Status */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-[#DC143C]/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
                        Featured
                      </span>
                      <span className={`backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Production'
                          ? 'bg-green-500/90 text-white'
                          : project.status === 'Active'
                          ? 'bg-blue-500/90 text-white'
                          : 'bg-gray-500/90 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-xs font-semibold">{project.year}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#DC143C] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="text-lg font-bold text-[#DC143C]">{value}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span key={index} className="text-xs px-3 py-1 rounded-full bg-[#DC143C]/10 text-[#DC143C] border border-[#DC143C]/20">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#DC143C] hover:text-white text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card group hover:scale-105 transition-all duration-300 border border-border/50 hover:border-[#DC143C]/30 rounded-2xl overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#DC143C]/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-white text-xs font-semibold">{project.category}</span>
                </div>

                {/* Status Badge */}
                <div className={`absolute top-3 right-3 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Production'
                    ? 'bg-green-500/90 text-white'
                    : project.status === 'Active'
                    ? 'bg-blue-500/90 text-white'
                    : 'bg-gray-500/90 text-white'
                }`}>
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#DC143C] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                      <div className="text-sm font-bold text-[#DC143C]">{value}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 rounded-full bg-[#DC143C]/10 text-[#DC143C] border border-[#DC143C]/20">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#DC143C] hover:text-white text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="glass-card p-8 max-w-3xl mx-auto rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="w-16 h-16 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-helvetica-medium mb-4 text-gray-900 dark:text-white">
              Want to see more of my work?
            </h3>

            <p className="font-inter-regular text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Explore my GitHub repository for additional projects, code samples, and technical contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white font-poppins-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">View All Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white font-poppins-medium rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Users className="w-5 h-5" />
                <span className="text-sm">Discuss Collaboration</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
