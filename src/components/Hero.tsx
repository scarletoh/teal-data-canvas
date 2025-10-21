import { ArrowRight, Download, Mail } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import Typed from 'typed.js';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setIsVisible(true);

    // Subtle sequential animations for hero content
    const animations = anime.timeline({
      easing: 'easeOutCubic',
      duration: 800,
    });

    animations
      .add({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 200,
      })
      .add({
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [15, 0],
        delay: 100,
      })
      .add({
        targets: buttonsRef.current?.children || [],
        opacity: [0, 1],
        translateY: [10, 0],
        delay: anime.stagger(100, { start: 300 }),
      });

    // Subtle typing effect for subtitle after animations complete
    setTimeout(() => {
      if (typedRef.current) {
        const typed = new Typed(typedRef.current, {
          strings: [
            'I work with data to help people see things more clearly.',
            'I build systems that turn messy information into useful insights.',
            'I help businesses make smarter decisions with data-driven solutions.'
          ],
          typeSpeed: 50,
          backSpeed: 30,
          backDelay: 2000,
          startDelay: 500,
          loop: true,
          showCursor: true,
          cursorChar: '|',
        });

        return () => {
          typed.destroy();
        };
      }
    }, 1500);

    return () => {
      animations.pause();
    };
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 relative" style={{ overflow: 'visible' }}>
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-gray-100/80 dark:from-gray-900/90 dark:via-black dark:to-gray-900/90"></div>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #DC143C 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Responsive Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">

            {/* Left Side - Introduction */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-4 lg:space-y-6 mt-16 lg:mt-20 mb-4 lg:mb-8">
              <div className="space-y-4 lg:space-y-6">
                <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight font-['Montserrat']">
                  Hi, I'm{' '}
                  <span className="text-[#DC143C] relative">
                    Scar Njoroge
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#DC143C] to-[#DC143C]/60 rounded-full"></div>
                  </span>
                </h1>

                <div ref={subtitleRef} className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light max-w-xl mx-auto lg:mx-0 font-['Inter']">
                  <div className="relative flex justify-center mb-6">
                    <div className="relative group">
                      <p className="font-montserrat-bold text-2xl md:text-3xl text-gray-900 dark:text-white relative z-10 px-6 py-3">
                        Founder. Builder. Data Scientist.
                      </p>

                      {/* Clean underline design */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-[#DC143C] to-transparent rounded-full"></div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-[#DC143C] rounded-full opacity-70"></div>
                    </div>
                  </div>
                  <div className="min-h-[3rem] flex items-center justify-center">
                    <span
                      ref={typedRef}
                      className="text-center"
                      style={{ minHeight: '3rem', display: 'flex', alignItems: 'center' }}
                    ></span>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 font-['Helvetica_Now']">
                  Based in Nairobi, I'm a creative who works with code and data to build tools that make things clearer and more useful.
                </p>
              </div>

              {/* Desktop PC Button Layout - Clean & Structured */}
              <div ref={buttonsRef} className="hidden lg:flex flex-col gap-4 justify-start items-start">
                {/* Primary CTA - See my work */}
                <a
                  href="/projects"
                  className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#DC143C]/20 text-lg overflow-hidden font-['Poppins'] w-full max-w-sm"
                  onMouseEnter={(e) => {
                    anime({
                      targets: e.currentTarget,
                      scale: 1.05,
                      duration: 300,
                      easing: 'easeOutCubic'
                    });
                  }}
                  onMouseLeave={(e) => {
                    anime({
                      targets: e.currentTarget,
                      scale: 1,
                      duration: 300,
                      easing: 'easeOutCubic'
                    });
                  }}
                >
                  <span className="relative z-10">See my work</span>
                  <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 relative z-10" />
                </a>

                {/* Secondary CTA Row - Get in touch & Resume */}
                <div className="flex gap-4 w-full max-w-sm">
                  <a
                    href="/contact"
                    className="group flex items-center justify-center gap-2 px-6 py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-[#DC143C] text-gray-700 dark:text-gray-300 hover:text-[#DC143C] font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-base bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm font-['Poppins'] flex-1"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get in touch</span>
                  </a>

                  <a
                    href="/resume.pdf"
                    download
                    className="group flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:from-[#DC143C] hover:to-[#B91C3C] hover:text-white text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-base border border-gray-200 dark:border-gray-700 hover:border-[#DC143C] font-['Poppins'] flex-1"
                  >
                    <Download className="w-5 h-5" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>

              {/* Mobile/Tablet Button Layout - Responsive */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:hidden">
                {/* Primary CTA - See my work */}
                <a
                  href="/projects"
                  className="group relative flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#DC143C]/20 text-sm sm:text-base lg:text-lg overflow-hidden font-['Poppins'] min-w-[160px]"
                >
                  <span className="relative z-10">See my work</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 transition-all duration-300 group-hover:translate-x-1 relative z-10" />
                </a>

                {/* Secondary CTA - Get in touch */}
                <a
                  href="/contact"
                  className="group flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 border-2 border-gray-300 dark:border-gray-600 hover:border-[#DC143C] text-gray-700 dark:text-gray-300 hover:text-[#DC143C] font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base lg:text-lg bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm font-['Poppins'] min-w-[160px]"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  <span>Get in touch</span>
                </a>

                {/* Tertiary CTA - Resume */}
                <a
                  href="/resume.pdf"
                  download
                  className="group flex items-center justify-center gap-2 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hover:from-[#DC143C] hover:to-[#B91C3C] hover:text-white text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base lg:text-lg border border-gray-200 dark:border-gray-700 hover:border-[#DC143C] font-['Poppins'] min-w-[160px]"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  <span>Resume</span>
                </a>
              </div>
            </div>

            {/* Right Side - Photo */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-center">
              <div className="relative group">
                {/* Enhanced photo container with better responsive sizing */}
                <div className="w-72 h-80 sm:w-96 sm:h-[28rem] md:w-[26rem] md:h-[30rem] lg:w-[32rem] lg:h-[36rem] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/30 dark:ring-gray-800/60 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative mt-8 sm:mt-12 lg:mt-4">
                  {/* Photo background overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 dark:to-black/20"></div>

                  {/* Enhanced Avatar/Branding Content */}
                  <div className="text-center space-y-4 sm:space-y-6 relative z-10">
                    <div className="relative">
                      {/* Responsive photo sizing - Complete photo on mobile */}
                      <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] mx-auto rounded-full overflow-hidden shadow-2xl ring-8 ring-white/50 dark:ring-gray-800/60 hover:ring-[#DC143C]/60 transition-all duration-300">
                        <img
                          src="/scar-photo.jpg"
                          alt="Scar - Data Scientist & AI Specialist"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          style={{
                            filter: 'contrast(1.2) brightness(1.1) saturate(1.2)',
                            boxShadow: '0 0 25px rgba(220, 20, 60, 0.4)'
                          }}
                          onError={(e) => {
                            console.log('Hero photo failed to load, using fallback');
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                          onLoad={(e) => {
                            console.log('Hero photo loaded successfully');
                            e.currentTarget.style.opacity = '1';
                          }}
                        />

                        {/* Loading placeholder while image loads */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse opacity-0 transition-opacity duration-300" style={{ zIndex: -1 }}></div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-3 sm:border-4 border-white dark:border-gray-900 animate-pulse shadow-lg"></div>

                      {/* Status badge */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#DC143C] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Available for Projects
                      </div>
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Scar Njoroge</p>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">Data Scientist, Business Intelligence & AI Specialist</p>
                      <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm text-gray-500 font-medium">Portfolio Ready</span>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced decorative elements */}
                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-6 h-6 sm:w-8 sm:h-8 bg-[#DC143C] rounded-full opacity-60 animate-pulse shadow-lg"></div>
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-[#B91C3C] rounded-full opacity-50 animate-bounce shadow-lg"></div>
                  <div className="absolute top-1/4 -left-6 sm:-left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#DC143C] rounded-full opacity-40 animate-pulse delay-500"></div>
                  <div className="absolute bottom-1/3 -right-6 sm:-right-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#B91C3C] rounded-full opacity-30 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal floating elements - hidden on mobile for better performance */}
      <div className="absolute top-1/4 left-4 sm:left-8 w-1 h-1 bg-[#DC143C] rounded-full opacity-30 animate-pulse hidden sm:block"></div>
      <div className="absolute bottom-1/3 right-4 sm:right-8 w-1 h-1 bg-[#DC143C] rounded-full opacity-20 animate-pulse delay-1000 hidden sm:block"></div>
    </section>
  );
};

export default Hero;
