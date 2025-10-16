import jsPDF from 'jspdf';

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  summary: string;
  skills: string[];
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  }>;
  education: Array<{
    degree: string;
    school: string;
    year: string;
    gpa?: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    year: string;
  }>;
}

export const generateResumePDF = async (data: ResumeData): Promise<void> => {
  const pdf = new jsPDF();

  // Set up fonts and colors
  const primaryColor = '#DC143C';
  const textColor = '#333333';
  const lightGray = '#666666';

  // Header
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(primaryColor);
  pdf.text(data.name, 20, 30);

  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(textColor);
  pdf.text(data.title, 20, 45);

  pdf.setFontSize(12);
  pdf.setTextColor(lightGray);
  pdf.text(data.location, 20, 55);

  // Contact Information
  pdf.setFontSize(10);
  pdf.setTextColor(textColor);
  let contactY = 70;
  pdf.text(`Email: ${data.email}`, 20, contactY);

  if (data.phone) {
    pdf.text(`Phone: ${data.phone}`, 20, contactY + 5);
  }

  if (data.linkedin) {
    pdf.text(`LinkedIn: ${data.linkedin}`, 20, contactY + 10);
  }

  if (data.github) {
    pdf.text(`GitHub: ${data.github}`, 20, contactY + 15);
  }

  // Professional Summary
  let currentY = 100;
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(primaryColor);
  pdf.text('PROFESSIONAL SUMMARY', 20, currentY);

  currentY += 10;
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(textColor);

  const summaryLines = pdf.splitTextToSize(data.summary, 170);
  pdf.text(summaryLines, 20, currentY);
  currentY += summaryLines.length * 5 + 10;

  // Skills
  if (data.skills.length > 0) {
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(primaryColor);
    pdf.text('TECHNICAL SKILLS', 20, currentY);
    currentY += 10;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(textColor);

    const skillsText = data.skills.join(' • ');
    const skillsLines = pdf.splitTextToSize(skillsText, 170);
    pdf.text(skillsLines, 20, currentY);
    currentY += skillsLines.length * 5 + 10;
  }

  // Experience
  if (data.experience.length > 0) {
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(primaryColor);
    pdf.text('PROFESSIONAL EXPERIENCE', 20, currentY);
    currentY += 15;

    data.experience.forEach((exp) => {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(textColor);
      pdf.text(exp.title, 20, currentY);
      currentY += 6;

      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'italic');
      pdf.setTextColor(lightGray);
      pdf.text(`${exp.company} • ${exp.period}`, 20, currentY);
      currentY += 8;

      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(textColor);
      const descLines = pdf.splitTextToSize(exp.description, 170);
      pdf.text(descLines, 20, currentY);
      currentY += descLines.length * 5 + 8;

      if (exp.achievements.length > 0) {
        exp.achievements.forEach((achievement) => {
          pdf.setTextColor(primaryColor);
          pdf.text('•', 25, currentY);
          pdf.setTextColor(textColor);
          const achievementLines = pdf.splitTextToSize(achievement, 165);
          pdf.text(achievementLines, 30, currentY);
          currentY += achievementLines.length * 5 + 3;
        });
      }

      currentY += 8;
    });
  }

  // Education
  if (data.education.length > 0) {
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(primaryColor);
    pdf.text('EDUCATION', 20, currentY);
    currentY += 15;

    data.education.forEach((edu) => {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(textColor);
      pdf.text(edu.degree, 20, currentY);
      currentY += 6;

      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'italic');
      pdf.setTextColor(lightGray);
      pdf.text(`${edu.school} • ${edu.year}`, 20, currentY);
      currentY += 8;

      if (edu.gpa) {
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(textColor);
        pdf.text(`GPA: ${edu.gpa}`, 20, currentY);
        currentY += 8;
      }

      currentY += 5;
    });
  }

  // Projects
  if (data.projects.length > 0) {
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(primaryColor);
    pdf.text('KEY PROJECTS', 20, currentY);
    currentY += 15;

    data.projects.forEach((project) => {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(textColor);
      pdf.text(project.name, 20, currentY);
      currentY += 6;

      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(textColor);
      const projectDescLines = pdf.splitTextToSize(project.description, 170);
      pdf.text(projectDescLines, 20, currentY);
      currentY += projectDescLines.length * 5 + 5;

      if (project.technologies.length > 0) {
        pdf.setFontSize(9);
        pdf.setTextColor(lightGray);
        const techText = `Technologies: ${project.technologies.join(', ')}`;
        const techLines = pdf.splitTextToSize(techText, 170);
        pdf.text(techLines, 20, currentY);
        currentY += techLines.length * 5 + 5;
      }

      if (project.link) {
        pdf.setFontSize(9);
        pdf.setTextColor(primaryColor);
        pdf.text(project.link, 20, currentY);
        currentY += 8;
      }

      currentY += 5;
    });
  }

  // Certifications
  if (data.certifications.length > 0) {
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(primaryColor);
    pdf.text('CERTIFICATIONS', 20, currentY);
    currentY += 15;

    data.certifications.forEach((cert) => {
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(textColor);
      pdf.text(`${cert.name} - ${cert.issuer} (${cert.year})`, 20, currentY);
      currentY += 8;
    });
  }

  // Generate filename and download
  const fileName = `scar Njoroge_${new Date().toISOString().split('T')[0]}.pdf`;
  pdf.save(fileName);
};

export const downloadResume = async () => {
  // Collect data from the current app state
  const resumeData: ResumeData = {
    name: 'Scar Njoroge',
    title: 'Senior Data Scientist & AI Specialist',
    location: 'Nairobi, Kenya',
    email: 'scar.njoroge@gmail.com',
    phone: '+254 784 416 439',
    linkedin: 'linkedin.com/in/scar-njoroge',
    github: 'github.com/scar-njoroge',
    summary: 'Accomplished Senior Data Scientist with 5+ years of experience in machine learning, artificial intelligence, and advanced analytics. Proven track record of delivering data-driven solutions that drive business growth, optimize operations, and create competitive advantages. Expertise spans healthcare analytics, financial modeling, supply chain optimization, and predictive systems. Strong background in team leadership, project management, and cross-functional collaboration in fast-paced technology environments.',
    skills: [
      'Python (Advanced)', 'R (Advanced)', 'SQL (Expert)', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Keras',
      'Pandas', 'NumPy', 'Scikit-learn', 'Apache Spark', 'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes',
      'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Tableau', 'Power BI', 'Excel (Advanced)',
      'Statistical Analysis', 'A/B Testing', 'Time Series Analysis', 'NLP', 'Computer Vision',
      'MLOps', 'CI/CD', 'Git', 'Jira', 'Agile/Scrum', 'Team Leadership', 'Project Management'
    ],
    experience: [
      {
        title: 'Founder & Systems Architect',
        company: 'ScarGo Express',
        period: '2023–2024',
        description: 'Built ScarGo from zero to signal—designing logistics systems that move fast, feel intuitive, and earn trust. Vetted hardware in Nairobi\'s toughest markets, architected brand UX, and delivered emotionally resonant messaging that sticks.',
        achievements: [
          'Designed and implemented end-to-end logistics platform',
          'Led hardware vetting and procurement in competitive Nairobi markets',
          'Created intuitive UX that increased user adoption by 40%',
          'Developed brand messaging that resonated with target audience',
          'Established systems architecture for scalable growth'
        ]
      },
      {
        title: 'Data Scientist',
        company: 'Freelance & Portfolio Projects',
        period: '2020-2023',
        description: 'Applied systems thinking and pattern recognition to real-world data problems across multiple industries. Delivered predictive models, interactive dashboards, and comprehensive API evaluations with emphasis on clarity, ethical practices, and innovative solutions.',
        achievements: [
          'Developed predictive models for real estate price forecasting',
          'Built interactive dashboards for supply chain optimization',
          'Conducted API evaluations for mental health tech platforms',
          'Collaborated with Fast on checkout flow diagnostics (2021)',
          'Contributed UX audits and performance insights',
          'Maintained ethical standards in all data science applications'
        ]
      }
    ],
    education: [
      {
        degree: 'BSc in Data Science',
        school: 'Nexford University',
        year: 'Ongoing',
        gpa: 'Currently Pursuing'
      },
      {
        degree: 'Bachelor\'s in Computer Science & Applied Mathematics',
        school: 'Strathmore University',
        year: ''
      },
      {
        degree: 'Data Science Program',
        school: 'Moringa School',
        year: 'Completed'
      },
      {
        degree: 'Data Science Program',
        school: 'ALX',
        year: 'Completed'
      }
    ],
    projects: [
      {
        name: 'Healthcare Predictive Analytics Platform',
        description: 'End-to-end machine learning platform for predicting patient outcomes and optimizing treatment plans. Processes 100K+ patient records daily with 93% accuracy in risk stratification.',
        technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'AWS', 'MLflow'],
        link: 'github.com/scar-njoroge/healthcare-predictor'
      },
      {
        name: 'Financial Risk Assessment System',
        description: 'Advanced credit scoring and risk assessment system using ensemble ML techniques. Reduced default rates by 25% while maintaining 90% approval rates for qualified applicants.',
        technologies: ['Python', 'XGBoost', 'LightGBM', 'React', 'Node.js', 'MongoDB', 'Redis', 'Kubernetes'],
        link: 'github.com/scar-njoroge/financial-risk-engine'
      },
      {
        name: 'Supply Chain Optimization Engine',
        description: 'AI-powered logistics optimization system using reinforcement learning and route optimization algorithms. Reduced delivery times by 22% and fuel costs by 18%.',
        technologies: ['Python', 'PyTorch', 'NetworkX', 'React', 'Flask', 'PostgreSQL', 'Apache Kafka'],
        link: 'github.com/scar-njoroge/supply-chain-ai'
      },
      {
        name: 'Real Estate Price Prediction Platform',
        description: 'Machine learning platform predicting property values across 50+ Kenyan markets with 91% accuracy. Integrates market trends, economic indicators, and property features.',
        technologies: ['Python', 'Scikit-learn', 'Prophet', 'React', 'FastAPI', 'PostgreSQL', 'Tableau'],
        link: 'github.com/scar-njoroge/real-estate-predictor'
      },
      {
        name: 'Customer Sentiment Analysis System',
        description: 'Natural language processing system analyzing customer feedback across multiple channels. Provides real-time insights for product improvement and customer satisfaction.',
        technologies: ['Python', 'spaCy', 'BERT', 'React', 'Elasticsearch', 'Redis', 'Docker'],
        link: 'github.com/scar-njoroge/sentiment-analyzer'
      }
    ],
    certifications: [
      {
        name: 'AWS Certified Machine Learning - Specialty',
        issuer: 'Amazon Web Services',
        year: '2023'
      },
      {
        name: 'TensorFlow Developer Certificate',
        issuer: 'Google Cloud',
        year: '2022'
      },
      {
        name: 'Microsoft Azure AI Engineer Associate',
        issuer: 'Microsoft',
        year: '2022'
      },
      {
        name: 'Certified Kubernetes Administrator (CKA)',
        issuer: 'Cloud Native Computing Foundation',
        year: '2022'
      },
      {
        name: 'Google Cloud Professional ML Engineer',
        issuer: 'Google Cloud',
        year: '2021'
      },
      {
        name: 'Deep Learning Specialization',
        issuer: 'Coursera (Andrew Ng)',
        year: '2020'
      }
    ]
  };

  await generateResumePDF(resumeData);
};
