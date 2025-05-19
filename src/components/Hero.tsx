
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <p className="text-teal font-mono mb-5 opacity-0 animate-fade-in">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in animate-delay-100">
            <span className="text-white">Data Scientist</span>
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
              className="px-8 py-3 rounded-md bg-teal text-darkBlue font-medium transition-all hover:bg-opacity-90"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-md border border-teal text-teal font-medium transition-all hover:bg-teal/10"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-500">
          <a href="#skills" className="flex flex-col items-center text-gray-400 hover:text-teal transition-colors">
            <p className="mb-2 text-sm">Scroll Down</p>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
