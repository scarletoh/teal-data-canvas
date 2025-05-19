
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-teal mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll do my best to get back to you!
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <a 
              href="mailto:youremail@example.com" 
              className="flex flex-col items-center p-6 bg-darkBlue rounded-lg hover:bg-opacity-80 transition-all"
              aria-label="Email me"
            >
              <Mail size={32} className="contact-icon mb-3" />
              <span className="text-gray-300">youremail@example.com</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-darkBlue rounded-lg hover:bg-opacity-80 transition-all"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={32} className="contact-icon mb-3" />
              <span className="text-gray-300">linkedin.com/in/yourusername</span>
            </a>
            
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-darkBlue rounded-lg hover:bg-opacity-80 transition-all"
              aria-label="GitHub profile"
            >
              <Github size={32} className="contact-icon mb-3" />
              <span className="text-gray-300">github.com/yourusername</span>
            </a>
          </div>
          
          <p className="text-center text-gray-400 mt-4">
            Looking forward to connecting with you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
