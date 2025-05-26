
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-72 h-72 bg-royalBlue/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-royalBlue/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-start text-left max-w-4xl">
          <p className="text-royalBlue font-mono mb-5 opacity-0 animate-fade-in">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in animate-delay-100">
            <span className="text-white bg-clip-text">Peter Njoroge</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-400 opacity-0 animate-fade-in animate-delay-200">
            Data Scientist & ML Engineer
          </h2>
          
          <div className="space-y-4 mb-8 opacity-0 animate-fade-in animate-delay-300">
            <p className="text-lg text-gray-400 leading-relaxed">
              I am a passionate data scientist driven by the power of analytics and problem-solving. With a deep curiosity for uncovering insights, I use data to transform complexity into clarity—helping businesses and communities make informed decisions. What makes me unique is my ability to bridge technical expertise with strategic thinking, ensuring my work not only delivers accurate models but also meaningful impact.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Data science is more than just numbers and algorithms for me—it's an avenue for innovation, continuous learning, and real-world solutions. My passion lies in harnessing data to drive change, whether it's optimizing processes, solving challenging problems, or creating predictive models that enhance efficiency and outcomes.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Through my work, I am able to live out my passion every day by applying cutting-edge techniques to real-world applications. From developing machine learning models to making sense of complex datasets, I am committed to growing my expertise, staying ahead of industry trends, and using data to shape smarter solutions for the future.
            </p>
            
            <p className="text-royalBlue font-semibold italic text-lg mt-4">
              "Data Decoded Dominated"
            </p>
          </div>
          
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
          
          <div className="mt-6 flex items-center gap-6 opacity-0 animate-fade-in animate-delay-500">
            <a href="tel:0784416439" className="text-gray-400 hover:text-royalBlue transition-colors">
              <span className="text-sm">0784416439</span>
            </a>
            <a href="mailto:scharbutcher@gmail.com" className="text-gray-400 hover:text-royalBlue transition-colors">
              <span className="text-sm">scharbutcher@gmail.com</span>
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
