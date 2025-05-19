
import { FileDown } from 'lucide-react';

const Resume = () => {
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
        
        <div className="max-w-2xl glass-card p-8 rounded-lg">
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
      </div>
    </section>
  );
};

export default Resume;
