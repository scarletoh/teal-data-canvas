import { useState } from 'react';
import { Mail, MapPin, Github, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";
import { useTheme } from '@/contexts/theme-provider';
import { cn } from '@/lib/utils';

const Footer = () => {
  const { theme } = useTheme();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [clickedLinks, setClickedLinks] = useState<Set<string>>(new Set());
  const [scrolled, setScrolled] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubscribed(true);
    setIsSubscribing(false);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  const handleLinkClick = (linkId: string) => {
    setClickedLinks(prev => new Set([...prev, linkId]));

    // Remove the click effect after animation completes
    setTimeout(() => {
      setClickedLinks(prev => {
        const newSet = new Set(prev);
        newSet.delete(linkId);
        return newSet;
      });
    }, 600);
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Premium Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 20% 80%, rgba(220, 20, 60, 0.03) 0%, transparent 50%),
                       radial-gradient(circle at 80% 20%, rgba(220, 20, 60, 0.02) 0%, transparent 50%)`
        }}
      ></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 relative">

            {/* Services - Left Side */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h4
                  className="font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b-2 border-[#DC143C] transition-all duration-300"
                  style={{ color: '#E5E5E5' }}
                >
                  Here's what I offer
                </h4>
                <div className="space-y-4">
                  <a href="/services/data-science" className={`flex items-center justify-between text-sm text-gray-300 hover:text-[#DC143C] transition-all duration-300 group py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#DC143C]/10 hover:to-[#B91C3C]/5 hover:shadow-lg hover:shadow-[#DC143C]/20 relative overflow-hidden border border-transparent hover:border-[#DC143C]/30 ${clickedLinks.has('data-science') ? 'animate-pulse bg-gradient-to-r from-[#DC143C]/20 to-[#B91C3C]/10 scale-105' : ''}`} onClick={() => handleLinkClick('data-science')}>
                    <span className="font-medium relative z-10">Data Science</span>
                    <div className="flex items-center gap-2 relative z-10">
                      <svg className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#DC143C] ${clickedLinks.has('data-science') ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <div className={`w-1 h-1 bg-[#DC143C] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 group-hover:bg-white ${clickedLinks.has('data-science') ? 'animate-ping' : ''}`}></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DC143C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  </a>
                  <a href="/services/machine-learning" className={`flex items-center justify-between text-sm text-gray-300 hover:text-[#DC143C] transition-all duration-300 group py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#DC143C]/10 hover:to-[#B91C3C]/5 hover:shadow-lg hover:shadow-[#DC143C]/20 relative overflow-hidden border border-transparent hover:border-[#DC143C]/30 ${clickedLinks.has('machine-learning') ? 'animate-pulse bg-gradient-to-r from-[#DC143C]/20 to-[#B91C3C]/10 scale-105' : ''}`} onClick={() => handleLinkClick('machine-learning')}>
                    <span className="font-medium relative z-10">Machine Learning</span>
                    <div className="flex items-center gap-2 relative z-10">
                      <svg className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#DC143C] ${clickedLinks.has('machine-learning') ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <div className={`w-1 h-1 bg-[#DC143C] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 group-hover:bg-white ${clickedLinks.has('machine-learning') ? 'animate-ping' : ''}`}></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DC143C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  </a>
                  <a href="/services/ai-solutions" className={`flex items-center justify-between text-sm text-gray-300 hover:text-[#DC143C] transition-all duration-300 group py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#DC143C]/10 hover:to-[#B91C3C]/5 hover:shadow-lg hover:shadow-[#DC143C]/20 relative overflow-hidden border border-transparent hover:border-[#DC143C]/30 ${clickedLinks.has('ai-solutions') ? 'animate-pulse bg-gradient-to-r from-[#DC143C]/20 to-[#B91C3C]/10 scale-105' : ''}`} onClick={() => handleLinkClick('ai-solutions')}>
                    <span className="font-medium relative z-10">AI Solutions</span>
                    <div className="flex items-center gap-2 relative z-10">
                      <svg className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#DC143C] ${clickedLinks.has('ai-solutions') ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <div className={`w-1 h-1 bg-[#DC143C] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 group-hover:bg-white ${clickedLinks.has('ai-solutions') ? 'animate-ping' : ''}`}></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DC143C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  </a>
                  <a href="/services/business-intelligence" className={`flex items-center justify-between text-sm text-gray-300 hover:text-[#DC143C] transition-all duration-300 group py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#DC143C]/10 hover:to-[#B91C3C]/5 hover:shadow-lg hover:shadow-[#DC143C]/20 relative overflow-hidden border border-transparent hover:border-[#DC143C]/30 ${clickedLinks.has('business-intelligence') ? 'animate-pulse bg-gradient-to-r from-[#DC143C]/20 to-[#B91C3C]/10 scale-105' : ''}`} onClick={() => handleLinkClick('business-intelligence')}>
                    <span className="font-medium relative z-10">Business Intelligence</span>
                    <div className="flex items-center gap-2 relative z-10">
                      <svg className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#DC143C] ${clickedLinks.has('business-intelligence') ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <div className={`w-1 h-1 bg-[#DC143C] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 group-hover:bg-white ${clickedLinks.has('business-intelligence') ? 'animate-ping' : ''}`}></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DC143C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Company - Center Left */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h4
                  className="font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b-2 border-[#DC143C] transition-all duration-300 font-['Montserrat']"
                  style={{ color: '#E5E5E5' }}
                >
                  About Me
                </h4>
                <div className="space-y-4">
                  <a href="/about" className={`flex items-center justify-between text-sm text-gray-300 hover:text-[#DC143C] transition-all duration-300 group py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#DC143C]/10 hover:to-[#B91C3C]/5 hover:shadow-lg hover:shadow-[#DC143C]/20 relative overflow-hidden border border-transparent hover:border-[#DC143C]/30 font-['Poppins'] ${clickedLinks.has('about') ? 'animate-pulse bg-gradient-to-r from-[#DC143C]/20 to-[#B91C3C]/10 scale-105' : ''}`} onClick={() => handleLinkClick('about')}>
                    <span className="font-medium relative z-10">My story</span>
                    <div className="flex items-center gap-2 relative z-10">
                      <svg className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#DC143C] ${clickedLinks.has('about') ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <div className={`w-1 h-1 bg-[#DC143C] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 group-hover:bg-white ${clickedLinks.has('about') ? 'animate-ping' : ''}`}></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DC143C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  </a>
                  <a href="/projects" className={`flex items-center justify-between text-sm text-gray-300 hover:text-[#DC143C] transition-all duration-300 group py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#DC143C]/10 hover:to-[#B91C3C]/5 hover:shadow-lg hover:shadow-[#DC143C]/20 relative overflow-hidden border border-transparent hover:border-[#DC143C]/30 font-['Poppins'] ${clickedLinks.has('projects') ? 'animate-pulse bg-gradient-to-r from-[#DC143C]/20 to-[#B91C3C]/10 scale-105' : ''}`} onClick={() => handleLinkClick('projects')}>
                    <span className="font-medium relative z-10">Proof of Work</span>
                    <div className="flex items-center gap-2 relative z-10">
                      <svg className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#DC143C] ${clickedLinks.has('projects') ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <div className={`w-1 h-1 bg-[#DC143C] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 group-hover:bg-white ${clickedLinks.has('projects') ? 'animate-ping' : ''}`}></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DC143C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  </a>
                  <a href="/contact" className={`flex items-center justify-between text-sm text-gray-300 hover:text-[#DC143C] transition-all duration-300 group py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#DC143C]/10 hover:to-[#B91C3C]/5 hover:shadow-lg hover:shadow-[#DC143C]/20 relative overflow-hidden border border-transparent hover:border-[#DC143C]/30 font-['Poppins'] ${clickedLinks.has('contact') ? 'animate-pulse bg-gradient-to-r from-[#DC143C]/20 to-[#B91C3C]/10 scale-105' : ''}`} onClick={() => handleLinkClick('contact')}>
                    <span className="font-medium relative z-10">Work With Me</span>
                    <div className="flex items-center gap-2 relative z-10">
                      <svg className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#DC143C] ${clickedLinks.has('contact') ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <div className={`w-1 h-1 bg-[#DC143C] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 group-hover:bg-white ${clickedLinks.has('contact') ? 'animate-ping' : ''}`}></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DC143C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  </a>
                  <a href="/services" className={`flex items-center justify-between text-sm text-gray-300 hover:text-[#DC143C] transition-all duration-300 group py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[#DC143C]/10 hover:to-[#B91C3C]/5 hover:shadow-lg hover:shadow-[#DC143C]/20 relative overflow-hidden border border-transparent hover:border-[#DC143C]/30 font-['Poppins'] ${clickedLinks.has('services') ? 'animate-pulse bg-gradient-to-r from-[#DC143C]/20 to-[#B91C3C]/10 scale-105' : ''}`} onClick={() => handleLinkClick('services')}>
                    <span className="font-medium relative z-10">Here's what I offer</span>
                    <div className="flex items-center gap-2 relative z-10">
                      <svg className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#DC143C] ${clickedLinks.has('services') ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <div className={`w-1 h-1 bg-[#DC143C] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 group-hover:bg-white ${clickedLinks.has('services') ? 'animate-ping' : ''}`}></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DC143C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter - Center Right */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h4
                  className="font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b-2 border-[#DC143C] transition-all duration-300 font-['Montserrat']"
                  style={{ color: '#E5E5E5' }}
                >
                  Stay Updated
                </h4>
                <p
                  className="text-sm mb-4 leading-relaxed font-['Helvetica_Now']"
                  style={{ color: 'rgba(179, 179, 179, 0.8)' }}
                >
                  Get exclusive insights delivered to your inbox
                </p>

                <div className="relative group">
                  <div
                    className={`relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                      isSubscribed ? 'animate-pulse shadow-2xl' : 'shadow-lg hover:shadow-xl'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${isSubscribed ? 'rgba(220, 20, 60, 0.15)' : '#1A1A1A'} 0%, ${isSubscribed ? 'rgba(220, 20, 60, 0.05)' : '#1A1A1A'} 100%)`,
                      border: `2px solid ${isSubscribed ? '#DC143C' : '#DC143C33'}`,
                      boxShadow: isSubscribed
                        ? '0 20px 40px -10px rgba(220, 20, 60, 0.3), 0 0 30px rgba(220, 20, 60, 0.2)'
                        : '0 10px 30px -5px rgba(220, 20, 60, 0.1)'
                    }}
                  >
                    {/* Success State Overlay */}
                    {isSubscribed && (
                      <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/80 backdrop-blur-sm">
                        <div className="text-center space-y-3 animate-fade-in">
                          <div className="relative mx-auto w-12 h-12">
                            <div
                              className="w-full h-full rounded-full flex items-center justify-center animate-pulse"
                              style={{
                                background: 'linear-gradient(135deg, #DC143C 0%, #B91C3C 100%)',
                                boxShadow: '0 8px 32px rgba(220, 20, 60, 0.4), 0 0 20px rgba(220, 20, 60, 0.3)'
                              }}
                            >
                              <svg
                                className="w-6 h-6 animate-bounce"
                                style={{ color: 'white' }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="absolute inset-0 rounded-full animate-ping opacity-20"
                              style={{
                                background: 'linear-gradient(135deg, #DC143C 0%, #B91C3C 100%)'
                              }}
                            ></div>
                          </div>

                          <div className="space-y-1">
                            <h5
                              className="font-bold text-base animate-pulse"
                              style={{ color: '#DC143C' }}
                            >
                              Welcome Aboard! 🎉
                            </h5>
                            <p
                              className="text-xs animate-fade-in-up"
                              style={{ color: '#E5E5E5' }}
                            >
                              You're now part of our exclusive community
                            </p>
                            <div className="flex items-center justify-center gap-1 mt-2">
                              <div className="w-1 h-1 bg-[#DC143C] rounded-full animate-pulse"></div>
                              <span className="text-xs text-gray-400">Premium insights incoming!</span>
                              <div className="w-1 h-1 bg-[#DC143C] rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="p-6 relative">
                      <div className="relative text-center space-y-4">
                        <div className="relative inline-block">
                          <div
                            className="w-8 h-8 mx-auto rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            style={{ backgroundColor: 'rgba(220, 20, 60, 0.15)' }}
                          >
                            <svg
                              className="w-4 h-4 transition-all duration-300 group-hover:rotate-12"
                              style={{ color: '#DC143C' }}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                          </div>
                        </div>

                        <div className="space-y-3">
                            <h5
                              className="font-bold text-sm transition-all duration-300 font-['Helvetica_Now']"
                              style={{ color: '#E5E5E5' }}
                            >
                              Premium Data Insights
                            </h5>
                          <form onSubmit={handleSubscribe} className="space-y-3">
                            <input
                              type="email"
                              placeholder="Enter your email"
                              disabled={isSubscribing || isSubscribed}
                              className="w-full px-4 py-3 text-sm rounded-lg transition-all duration-300 focus:ring-2 focus:outline-none border focus:border-[#DC143C] focus:ring-[#DC143C]/20 hover:border-[#DC143C]/50"
                              style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                borderColor: '#DC143C33',
                                color: '#E5E5E5',
                                borderRadius: '0.5rem'
                              }}
                            />

                            <button
                              type="submit"
                              disabled={isSubscribing || isSubscribed}
                              className={`relative w-full px-4 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group overflow-hidden font-['Poppins'] ${
                                isSubscribing ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'
                              } ${clickedLinks.has('newsletter-button') ? 'animate-pulse scale-125 shadow-2xl' : ''}`}
                              style={{
                                background: `linear-gradient(135deg, ${isSubscribing ? '#B91C3C' : '#DC143C'} 0%, ${isSubscribing ? '#A0163C' : '#B91C3C'} 100%)`,
                                color: 'white',
                                borderRadius: '0.5rem',
                                boxShadow: clickedLinks.has('newsletter-button')
                                  ? '0 8px 32px rgba(220, 20, 60, 0.6), 0 0 40px rgba(220, 20, 60, 0.4)'
                                  : '0 4px 12px -2px rgba(220, 20, 60, 0.4)',
                                transform: clickedLinks.has('newsletter-button') ? 'scale(1.25) translateY(-2px)' : 'scale(1)',
                                zIndex: clickedLinks.has('newsletter-button') ? '10' : 'auto'
                              }}
                              onClick={(e) => {
                                handleLinkClick('newsletter-button');
                                // Add extra pop effect
                                setTimeout(() => {
                                  e.currentTarget.style.transform = 'scale(1.15) translateY(-4px)';
                                  setTimeout(() => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                  }, 150);
                                }, 50);
                              }}
                            >
                              <span className="flex items-center justify-center gap-2 relative z-10">
                                {isSubscribing ? (
                                  <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Joining...</span>
                                  </>
                                ) : isSubscribed ? (
                                  <>
                                    <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>You're In!</span>
                                  </>
                                ) : (
                                  <>
                                    <span>Get Access</span>
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                  </>
                                )}
                              </span>
                              <div className="absolute inset-0 bg-gradient-to-r from-[#B91C3C] to-[#A0163C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                          </form>

                          <div className="flex items-center justify-center gap-3 text-xs">
                            <span style={{ color: 'rgba(179, 179, 179, 0.8)' }}>
                              ✓ 2,500+ subscribers
                            </span>
                            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#DC143C' }}></div>
                            <span style={{ color: 'rgba(179, 179, 179, 0.8)' }}>
                              ✓ Weekly insights
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect & Social - Right Side */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h4
                  className="font-bold text-sm uppercase tracking-wider mb-4 pb-2 border-b-2 border-[#DC143C] transition-all duration-300 font-['Montserrat']"
                  style={{ color: '#E5E5E5' }}
                >
                  Follow My Work
                </h4>

                {/* Social Links */}
                <div className="flex items-center justify-start gap-3 mb-6">
                  {[
                    { Icon: Github, href: 'https://github.com/yourusername', label: 'GitHub', color: 'hover:bg-gray-800' },
                    { Icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
                    { Icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
                    { Icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
                    { Icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
                  ].map(({ Icon, href, label, color }) => (
                    <a
                      key={href}
                      href={href}
                      aria-label={label}
                      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg group overflow-hidden ${color} ${clickedLinks.has(label.toLowerCase()) ? 'animate-pulse scale-110' : ''}`}
                      style={{ backgroundColor: '#1A1A1A', color: '#B3B3B3' }}
                      onClick={(e) => {
                        // Only trigger animation if it's not a real link
                        if (href === '#') {
                          e.preventDefault();
                          handleLinkClick(label.toLowerCase());
                        }
                      }}
                    >
                      <Icon className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 relative z-10" />
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${color.includes('gray') ? 'rgba(220, 20, 60, 0.15)' : 'rgba(220, 20, 60, 0.08)'} 0%, rgba(185, 28, 60, 0.12) 100%)`,
                          boxShadow: '0 4px 12px rgba(220, 20, 60, 0.2)'
                        }}
                      ></div>
                      {/* Pulse ring effect on click - only for non-functional links */}
                      {clickedLinks.has(label.toLowerCase()) && href === '#' && (
                        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#DC143C]"></div>
                      )}
                    </a>
                  ))}
                </div>

                {/* Enhanced CTA Button with Dramatic Pop Effects */}
                <a
                  href="/contact"
                  className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl focus:ring-4 focus:outline-none group w-full overflow-hidden font-['Poppins'] ${clickedLinks.has('cta-button') ? 'animate-pulse scale-150 shadow-2xl rotate-3' : ''}`}
                  style={{
                    background: `linear-gradient(135deg, ${clickedLinks.has('cta-button') ? '#B91C3C' : '#DC143C'} 0%, ${clickedLinks.has('cta-button') ? '#A0163C' : '#B91C3C'} 100%)`,
                    color: 'white',
                    borderRadius: '0.75rem',
                    boxShadow: clickedLinks.has('cta-button')
                      ? '0 20px 60px rgba(220, 20, 60, 0.8), 0 0 80px rgba(220, 20, 60, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)'
                      : '0 8px 25px rgba(220, 20, 60, 0.4), 0 4px 12px rgba(220, 20, 60, 0.2)',
                    transform: clickedLinks.has('cta-button') ? 'scale(1.5) translateY(-8px) rotate(3deg)' : 'scale(1)',
                    zIndex: clickedLinks.has('cta-button') ? '20' : 'auto',
                    position: 'relative'
                  }}
                  onClick={(e) => {
                    handleLinkClick('cta-button');
                    // Enhanced dramatic pop effect with multiple stages
                    const button = e.currentTarget;

                    // Stage 1: Quick pop up
                    setTimeout(() => {
                      button.style.transform = 'scale(1.3) translateY(-12px) rotate(2deg)';
                      button.style.boxShadow = '0 15px 50px rgba(220, 20, 60, 0.7), 0 0 60px rgba(220, 20, 60, 0.5)';
                    }, 50);

                    // Stage 2: Maximum impact
                    setTimeout(() => {
                      button.style.transform = 'scale(1.6) translateY(-20px) rotate(-2deg)';
                      button.style.boxShadow = '0 25px 80px rgba(220, 20, 60, 0.9), 0 0 100px rgba(220, 20, 60, 0.7), inset 0 0 30px rgba(255, 255, 255, 0.4)';
                    }, 150);

                    // Stage 3: Hold at peak
                    setTimeout(() => {
                      button.style.transform = 'scale(1.7) translateY(-25px) rotate(1deg)';
                    }, 250);

                    // Stage 4: Dramatic return with bounce
                    setTimeout(() => {
                      button.style.transform = 'scale(1.4) translateY(-15px) rotate(-1deg)';
                    }, 350);

                    // Stage 5: Final settle with subtle glow
                    setTimeout(() => {
                      button.style.transform = 'scale(1.1) translateY(-2px)';
                      button.style.boxShadow = '0 12px 40px rgba(220, 20, 60, 0.5), 0 0 30px rgba(220, 20, 60, 0.3)';
                    }, 450);

                    // Stage 6: Back to normal
                    setTimeout(() => {
                      button.style.transform = 'scale(1)';
                      button.style.boxShadow = '0 8px 25px rgba(220, 20, 60, 0.4)';
                    }, 600);
                  }}
                >
                  <span className={`relative z-10 transition-all duration-300 ${clickedLinks.has('cta-button') ? 'text-yellow-200 font-black' : 'group-hover:text-yellow-100'}`}>
                    Let's build something together
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-all duration-500 relative z-10 ${clickedLinks.has('cta-button') ? 'animate-bounce text-yellow-300 scale-125' : 'group-hover:translate-x-2 group-hover:rotate-12 group-hover:scale-110'}`} />

                  {/* Enhanced gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#B91C3C] via-[#DC143C] to-[#A0163C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${clickedLinks.has('cta-button') ? 'opacity-100 animate-pulse' : ''}`}></div>

                  {/* Shimmer effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] ${clickedLinks.has('cta-button') ? 'animate-pulse' : ''}`}></div>

                  {/* Pulsing ring effect on click */}
                  {clickedLinks.has('cta-button') && (
                    <>
                      <div className="absolute inset-0 rounded-xl animate-ping opacity-40 bg-white"></div>
                      <div className="absolute inset-0 rounded-xl animate-ping opacity-20 bg-[#DC143C]" style={{ animationDelay: '0.2s' }}></div>
                      <div className="absolute inset-0 rounded-xl animate-ping opacity-10 bg-white" style={{ animationDelay: '0.4s' }}></div>
                    </>
                  )}

                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-sm ${clickedLinks.has('cta-button') ? 'opacity-80 animate-pulse' : ''}`} style={{
                    background: 'radial-gradient(circle, rgba(220, 20, 60, 0.8) 0%, transparent 70%)',
                    filter: 'blur(8px)'
                  }}></div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar with Subtle Divider */}
        <div style={{ borderTop: '2px solid #DC143C66', boxShadow: '0 -1px 4px rgba(220, 20, 60, 0.08)' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div className="flex flex-col gap-6">
              {/* Mobile-First: Logo and Branding Section */}
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="/logo.svg"
                      alt="Scar Logo"
                      className="w-8 h-8 transition-all duration-300 hover:scale-110"
                      style={{
                        filter: 'brightness(1.2) saturate(1.3) contrast(1.3) drop-shadow(0 0 2px rgba(220,20,60,0.4))',
                        backgroundColor: 'rgba(220, 20, 60, 0.05)',
                        borderRadius: '2px',
                        padding: '1px'
                      }}
                    />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#DC143C] rounded-full opacity-60 animate-pulse"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className={cn(
                      "font-bold text-lg tracking-tight transition-colors duration-300",
                      scrolled ? "text-white" : "text-white"
                    )}>
                      Scar
                    </span>
                    <span className="text-xs font-medium" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Founder. Builder. Data Scientist.
                    </span>
                  </div>
                </div>

                {/* Copyright and Tagline */}
                <div className="flex flex-col items-center gap-4">
                  <span
                    className="text-sm font-medium tracking-wide text-center"
                    style={{
                      color: '#B3B3B3',
                      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                      fontSize: '0.875rem',
                      lineHeight: '1.5'
                    }}
                  >
                    © 2025 Scar Analytics. All rights reserved.
                  </span>

                  <div className="relative group">
                    <span
                      className="font-bold px-4 py-2 rounded-lg text-sm tracking-wide transition-all duration-300 hover:scale-105 cursor-default"
                      style={{
                        color: '#DC143C',
                        backgroundColor: 'rgba(220, 20, 60, 0.08)',
                        fontFamily: "'Space Grotesk', 'Clash Display', 'Cal Sans', -apple-system, BlinkMacSystemFont, sans-serif",
                        border: '1px solid rgba(220, 20, 60, 0.15)',
                        boxShadow: '0 2px 8px rgba(220, 20, 60, 0.1)'
                      }}
                    >
                      Data Decoded Dominated
                    </span>
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.05) 0%, rgba(185, 28, 60, 0.08) 100%)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Desktop: Legal Links */}
              <div className="hidden lg:flex items-center justify-center gap-8">
                {[
                  { text: 'Privacy Policy', href: '/privacy' },
                  { text: 'Terms of Service', href: '/terms' },
                  { text: 'Cookie Policy', href: '/cookies' }
                ].map(({ text, href }) => (
                  <a
                    key={href}
                    href={href}
                    className={`group relative text-sm font-medium tracking-wide transition-all duration-300 px-3 py-1 rounded-md focus:ring-2 focus:ring-[#DC143C]/50 focus:outline-none ${clickedLinks.has(text.toLowerCase().replace(/\s+/g, '-')) ? 'text-[#DC143C] scale-105' : 'text-white hover:text-[#DC143C]'}`}
                    onClick={(e) => {
                      if (e.metaKey || e.ctrlKey) return;
                      handleLinkClick(text.toLowerCase().replace(/\s+/g, '-'));
                    }}
                  >
                    <span className="relative z-10">{text}</span>
                    <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#DC143C] transition-all duration-300 ${clickedLinks.has(text.toLowerCase().replace(/\s+/g, '-')) ? 'w-full' : 'group-hover:w-full'}`}></div>
                  </a>
                ))}
              </div>

              {/* Mobile: Legal Links */}
              <div className="lg:hidden flex flex-col items-center gap-3">
                {[
                  { text: 'Privacy Policy', href: '/privacy' },
                  { text: 'Terms of Service', href: '/terms' },
                  { text: 'Cookie Policy', href: '/cookies' }
                ].map(({ text, href }) => (
                  <a
                    key={href}
                    href={href}
                    className={`group relative text-sm font-medium tracking-wide transition-all duration-300 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#DC143C]/50 focus:outline-none ${clickedLinks.has(text.toLowerCase().replace(/\s+/g, '-')) ? 'text-[#DC143C] border-[#DC143C]/50 bg-[#DC143C]/5' : 'text-white border-gray-600/30 hover:border-[#DC143C]/30 hover:text-[#DC143C]'}`}
                    onClick={(e) => {
                      if (e.metaKey || e.ctrlKey) return;
                      handleLinkClick(text.toLowerCase().replace(/\s+/g, '-'));
                    }}
                  >
                    <span className="relative z-10">{text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

<style>{`
  @keyframes glow-pulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.05); }
  }

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes shine-slide {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @keyframes text-shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .text-shimmer {
    background: linear-gradient(
      90deg,
      #B3B3B3 25%,
      #DC143C 50%,
      #B3B3B3 75%
    );
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: text-shimmer 3s linear infinite;
  }
`}</style>

export default Footer;
