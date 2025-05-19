
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-royalBlue/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-royalBlue/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-start text-left max-w-3xl">
          <p className="text-royalBlue font-mono mb-5 opacity-0 animate-fade-in">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in animate-delay-100">
            <span className="text-white bg-clip-text">Data Scientist</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-400 opacity-0 animate-fade-in animate-delay-200">
            Python & ML Engineer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mb-8 opacity-0 animate-fade-in animate-delay-300">
            I transform complex data into actionable insights and build machine learning solutions that drive business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animate-delay-400">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-md bg-royalBlue text-darkBlack font-medium transition-all hover:bg-opacity-90"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-md border border-royalBlue text-royalBlue font-medium transition-all hover:bg-royalBlue/20"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-500">
          <a href="#skills" className="flex flex-col items-center text-gray-400 hover:text-royalBlue transition-colors">
            <p className="mb-2 text-sm">Scroll Down</p>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
