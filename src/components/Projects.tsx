
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "News Sentiment Analysis with NLP",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Built an NLP model that analyzes sentiment in news articles to predict market trends with 78% accuracy using BERT and Python.",
      tags: ["Python", "NLP", "BERT", "TensorFlow"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Customer Churn Prediction",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Developed a machine learning model to predict customer churn for a telecom company, reducing churn rate by 15% through targeted interventions.",
      tags: ["Machine Learning", "Python", "SQL", "Tableau"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Sales Forecasting Dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Created an interactive Power BI dashboard that forecasts sales with 92% accuracy using time series analysis, helping optimize inventory management.",
      tags: ["Power BI", "Time Series", "Python", "AWS"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-darkGray relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-royalBlue/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="mb-12 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-royalBlue"></div>
          <p className="mt-6 text-gray-400 max-w-3xl">
            A selection of my recent data science and machine learning projects.
            Each demonstrates different aspects of my technical expertise and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card flex flex-col">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 rounded-full bg-darkBlack text-royalBlue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-auto">
                  <a 
                    href={project.github} 
                    className="flex items-center text-royalBlue hover:text-white transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={20} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center text-royalBlue hover:text-white transition-colors"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink size={20} className="mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
