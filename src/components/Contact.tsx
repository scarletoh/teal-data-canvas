
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  return (
    <section id="contact" className="py-20 bg-darkGray relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-royalBlue/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="mb-12 text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-royalBlue"></div>
          <p className="mt-6 text-gray-400 max-w-2xl">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll do my best to get back to you!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className={`w-full bg-darkBlack border ${focusedField === 'name' ? 'border-royalBlue shadow-[0_0_10px_rgba(65,105,225,0.5)]' : 'border-gray-700'} rounded-lg py-3 px-4 text-white transition-all duration-300`}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className={`w-full bg-darkBlack border ${focusedField === 'email' ? 'border-royalBlue shadow-[0_0_10px_rgba(65,105,225,0.5)]' : 'border-gray-700'} rounded-lg py-3 px-4 text-white transition-all duration-300`}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full bg-darkBlack border ${focusedField === 'message' ? 'border-royalBlue shadow-[0_0_10px_rgba(65,105,225,0.5)]' : 'border-gray-700'} rounded-lg py-3 px-4 text-white transition-all duration-300`}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-8 py-3 bg-royalBlue text-black font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(65,105,225,0.7)]"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="flex flex-wrap gap-6 mb-10">
              <a 
                href="mailto:scharbutcher@gmail.com" 
                className="flex flex-col items-center p-8 glass-card rounded-lg hover:border-royalBlue transition-all hover:shadow-[0_0_20px_rgba(65,105,225,0.3)]"
                aria-label="Email me"
              >
                <Mail size={32} className="contact-icon mb-3" />
                <span className="text-gray-300">scharbutcher@gmail.com</span>
              </a>
              
              <a 
                href="tel:+254784416439" 
                className="flex flex-col items-center p-8 glass-card rounded-lg hover:border-royalBlue transition-all hover:shadow-[0_0_20px_rgba(65,105,225,0.3)]"
                aria-label="Call me"
              >
                <Phone size={32} className="contact-icon mb-3" />
                <span className="text-gray-300">+254 784 416 439</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 glass-card rounded-lg hover:border-royalBlue transition-all hover:shadow-[0_0_20px_rgba(65,105,225,0.3)]"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={32} className="contact-icon mb-3" />
                <span className="text-gray-300">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 glass-card rounded-lg hover:border-royalBlue transition-all hover:shadow-[0_0_20px_rgba(65,105,225,0.3)]"
                aria-label="GitHub profile"
              >
                <Github size={32} className="contact-icon mb-3" />
                <span className="text-gray-300">GitHub</span>
              </a>
            </div>
            
            <div className="glass-card p-6 rounded-lg mt-6">
              <p className="text-lg font-semibold text-royalBlue mb-2">My Philosophy</p>
              <p className="text-gray-400 italic">
                "Data Decoded Dominated" - I believe in not just analyzing data, but mastering it to unlock 
                its full potential for driving business decisions and creating impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
