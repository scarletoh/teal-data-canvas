
import { useState, useEffect } from 'react';
import { Menu, X, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
      setIsMinimized(scrollPosition > 200); // Minimize after scrolling 200px
      
      // Determine active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'resume', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      sectionElements.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
            setActiveSection(sections[index]);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled ? 
        "bg-darkBlack/95 shadow-lg backdrop-blur-sm border-b border-gray-800" : 
        "bg-transparent",
      isMinimized ? "h-14" : "h-16"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className={cn(
                "font-mono font-bold text-xl transition-all duration-300",
                isMinimized ? "text-lg" : "text-xl",
                scrolled ? "text-royalBlue" : "text-white"
              )}
            >
              MY PORTFOLIO
            </a>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                }}
                className={cn(
                  "transition-all duration-300 font-medium relative py-1",
                  activeSection === link.href.substring(1) ? 
                    "text-royalBlue" : "text-gray-300 hover:text-white",
                  // Dynamic underline effect
                  activeSection === link.href.substring(1) ?
                    "after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-royalBlue after:bottom-0 after:left-0" :
                    "after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-royalBlue after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button - circular when minimized */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={cn(
                "text-gray-300 hover:text-royalBlue focus:outline-none transition-all duration-300",
                isMinimized ? 
                  "bg-darkGray/70 rounded-full p-2 shadow-lg border border-gray-700" : 
                  ""
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={isMinimized ? 20 : 24} className="transition-transform duration-300 rotate-90" />
              ) : (
                isMinimized ? (
                  <BarChart size={20} className="animate-pulse text-royalBlue" />
                ) : (
                  <Menu size={24} />
                )
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with morphing animation */}
      {isMenuOpen && (
        <div className={cn(
          "md:hidden bg-darkBlack/95 backdrop-blur-sm border-b border-gray-800 transition-all duration-500",
          isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md transition-all duration-300",
                  activeSection === link.href.substring(1) ?
                    "text-royalBlue bg-darkGray/50 border-l-2 border-royalBlue pl-4" : 
                    "text-gray-300 hover:text-royalBlue hover:bg-darkGray"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
