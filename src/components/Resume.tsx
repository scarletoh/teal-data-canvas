
import { FileDown } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-darkBlue text-center">
      <div className="section-container">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
          <div className="h-1 w-20 bg-teal mx-auto"></div>
        </div>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Download my resume to learn more about my experience, education, 
          and the full range of data science projects I've completed.
        </p>
        
        <a 
          href="/resume.pdf" 
          download
          className="inline-flex items-center px-8 py-3 rounded-md bg-teal text-darkBlue font-medium transition-all hover:bg-opacity-90"
        >
          <FileDown className="mr-2" />
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default Resume;
