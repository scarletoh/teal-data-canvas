
import { FileDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  
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
    { name: 'Python', level: 5 },
    { name: 'Machine Learning', level: 4 },
    { name: 'Data Analysis', level: 5 },
    { name: 'SQL', level: 4 },
    { name: 'TensorFlow', level: 4 },
    { name: 'PyTorch', level: 3 }
  ];

  return (
    <section id="resume" className="py-20 bg-darkBlack text-left relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/3 w-64 h-64 bg-royalBlue/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
          <div className="h-1 w-20 bg-royalBlue"></div>
        </div>
        
        <div className={`max-w-4xl glass-card rounded-lg overflow-hidden transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row">
            {/* Resume Preview */}
            <div className="p-8 md:w-2/3 border-r border-gray-800">
              <p className="text-gray-400 mb-10">
                Download my resume to learn more about my experience, education, 
                and the full range of data science projects I've completed.
              </p>
              
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center px-8 py-4 rounded-md bg-royalBlue text-darkBlack font-medium transition-all hover:bg-opacity-90 shadow-lg"
              >
                <FileDown className="mr-2" />
                Download Resume (PDF)
              </a>
            </div>
            
            {/* AI Analysis Section */}
            <div className="p-8 md:w-1/3 bg-darkGray/50">
              <h3 className="text-xl font-bold mb-6 text-royalBlue">AI Skill Analysis</h3>
              
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-xs font-semibold text-royalBlue">
                        {skill.level}/5
                      </span>
                    </div>
                    <div className="w-full bg-darkBlack rounded-full h-2">
                      <div 
                        className="bg-royalBlue h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${(skill.level / 5) * 100}%`, opacity: isVisible ? 1 : 0 }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-400 italic">
                  "Peter demonstrates exceptional proficiency in Python and data analysis,
                  with strong capabilities in machine learning frameworks."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
