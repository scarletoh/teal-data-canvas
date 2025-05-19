
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-darkBlue border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <a 
            href="#home"
            aria-label="Back to top"
            className="bg-teal text-darkBlue p-3 rounded-full mb-6 hover:bg-opacity-90 transition-all"
          >
            <ArrowUp size={20} />
          </a>
          
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Data Science Portfolio. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-xs mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
