import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/theme-provider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Enhanced scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Enhanced mobile menu state management
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent background scrolling when menu is open on mobile only
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // Store current scroll position
        const scrollY = window.scrollY;
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${scrollY}px`;
      }

      // Enhanced touch handling for mobile
      const handleTouchMove = (e: TouchEvent) => {
        if (!(e.target as Element)?.closest('.mobile-menu')) {
          e.preventDefault();
        }
      };

      const handleTouchStart = (e: TouchEvent) => {
        if (!(e.target as Element)?.closest('.mobile-menu')) {
          e.preventDefault();
        }
      };

      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchstart', handleTouchStart, { passive: false });

      return () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchstart', handleTouchStart);
        // Always restore scroll when menu closes - comprehensive cleanup
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
      };
    } else {
      // Ensure scroll is restored when menu is not open
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    }
  }, [isMenuOpen]);

  // Additional effect to ensure scroll is never locked on mount/component updates
  useEffect(() => {
    // Ensure scroll is always enabled by default
    const ensureScrollEnabled = () => {
      if (!isMenuOpen) {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
      }
    };

    // Run on mount and whenever menu state might change
    ensureScrollEnabled();

    // Also run on window resize to handle mobile/desktop transitions
    window.addEventListener('resize', ensureScrollEnabled);

    return () => {
      window.removeEventListener('resize', ensureScrollEnabled);
    };
  }, [isMenuOpen]);

  // Enhanced click outside detection
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Element;
      if (menuRef.current && !menuRef.current.contains(target)) {
        if (target.classList.contains('mobile-menu-backdrop') || !target.closest('button')) {
          setIsMenuOpen(false);
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Enhanced escape key handling
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About', href: '/about', icon: '👤' },
    { name: 'Services', href: '/services', icon: '💼' },
    { name: 'Projects', href: '/projects', icon: '📁' },
    { name: 'Contact', href: '/contact', icon: '📧' }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ?
        "bg-white dark:bg-gray-900 shadow-xl border-b border-gray-200 dark:border-gray-700" :
        "bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700"
    )}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-18">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={cn(
                "group flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105",
                scrolled
                  ? "md:bg-gray-100 dark:md:bg-gray-800"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              <div className="relative">
                <div className={cn(
                  "w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                  "bg-gradient-to-br from-red-600 via-red-700 to-red-800 shadow-lg"
                )}>
                  <img
                    src={theme === 'dark' ? "/logo.svg" : "/logo-light.svg"}
                    alt="Scar Logo"
                    className="w-6 h-6 transition-all duration-300"
                    style={{
                      filter: theme === 'dark'
                        ? 'brightness(0) saturate(100%) invert(1) contrast(1.5)'
                        : 'brightness(0) saturate(100%) invert(1) contrast(1.5)',
                      color: 'white'
                    }}
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-90 shadow-sm"></div>
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-bold text-xl tracking-tight transition-colors duration-300",
                  scrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"
                )}>
                  Scar Njoroge
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "relative group px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden font-['Poppins']",
                    location.pathname === link.href
                      ? "bg-red-600 text-white shadow-lg"
                      : scrolled
                        ? "text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                        : "text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>

                  {/* Active page indicator */}
                  {location.pathname === link.href && (
                    <>
                      <div className="absolute inset-0 bg-red-600 rounded-xl"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-red-700 rounded-full"></div>
                    </>
                  )}

                  {/* Hover effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100",
                    location.pathname === link.href ? "opacity-100" : ""
                  )} style={{
                    background: location.pathname === link.href
                      ? 'linear-gradient(135deg, rgba(220, 20, 60, 0.9) 0%, rgba(185, 28, 60, 0.8) 100%)'
                      : 'linear-gradient(135deg, rgba(220, 20, 60, 0.08) 0%, rgba(185, 28, 60, 0.12) 100%)'
                  }}></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={cn(
                "group p-2.5 rounded-xl transition-all duration-300 hover:scale-110",
                scrolled
                  ? "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-lg"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-lg"
              )}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <span className="text-xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </button>
            <Link
              to="/contact"
              className="group flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg border border-red-600 hover:border-red-700 font-['Poppins']"
            >
              <span>Hire Me</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Modern Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={cn(
                "group relative p-3 rounded-2xl transition-all duration-500 hover:scale-110 active:scale-95",
                scrolled
                  ? "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
              aria-label={isMenuOpen ? "Close mobile navigation" : "Open mobile navigation"}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                {/* Modern Hamburger Icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className={cn(
                    "w-6 h-0.5 bg-current transition-all duration-500 transform",
                    isMenuOpen
                      ? "rotate-45 translate-y-1.5 bg-red-600"
                      : "rotate-0 translate-y-0 group-hover:text-red-600"
                  )}></div>
                  <div className={cn(
                    "w-6 h-0.5 bg-current transition-all duration-500 mt-1",
                    isMenuOpen
                      ? "opacity-0 bg-red-600"
                      : "opacity-100 group-hover:text-red-600"
                  )}></div>
                  <div className={cn(
                    "w-6 h-0.5 bg-current transition-all duration-500 mt-1 transform",
                    isMenuOpen
                      ? "-rotate-45 -translate-y-1.5 bg-red-600"
                      : "rotate-0 translate-y-0 group-hover:text-red-600"
                  )}></div>
                </div>

                {/* Close Icon (X) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className={cn(
                      "w-6 h-6 transition-all duration-500",
                      isMenuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>

              {/* Pulse indicator for active state */}
              {isMenuOpen && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Collapsible Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 left-0 right-0 z-40 mobile-menu" ref={menuRef}>
          {/* Full screen backdrop - completely opaque */}
          <div className="absolute inset-0 bg-black mobile-menu-backdrop" onClick={closeMenu}></div>

          <div className={cn(
            "h-full flex flex-col transition-all duration-400 relative",
            theme === 'dark'
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-900"
          )}>
            {/* Menu background overlay - solid */}
            <div className={cn(
              "absolute inset-0",
              theme === 'dark'
                ? "bg-gray-900"
                : "bg-white"
            )}></div>

            {/* Compact red accent border - solid colors */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-600"></div>

            {/* Enhanced Content with Collapsible States */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Collapsible Navigation Links */}
              <div className="flex-1 px-4 pt-6 pb-4">
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={cn(
                        "group relative flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 overflow-hidden font-['Poppins']",
                        location.pathname === link.href
                          ? theme === 'dark'
                            ? "bg-red-600 text-white shadow-lg"
                            : "bg-red-600 text-white shadow-lg"
                          : theme === 'dark'
                            ? "text-gray-300 hover:text-white hover:bg-red-600"
                            : "text-gray-700 hover:text-white hover:bg-red-600"
                      )}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        transform: `translateY(${isMenuOpen ? '0' : '10px'})`,
                        opacity: isMenuOpen ? 1 : 0,
                        transition: `all 0.2s ease ${index * 0.05}s`
                      }}
                      onClick={closeMenu}
                    >
                      {/* Icon */}
                      <div className={cn(
                        "flex items-center justify-center transition-all duration-300 group-hover:scale-105 w-8 h-8 rounded-lg",
                        location.pathname === link.href
                          ? "bg-white shadow-md"
                          : "bg-red-600 group-hover:bg-red-700"
                      )}>
                        <span className={cn(
                          "transition-all duration-300 text-lg",
                          location.pathname === link.href
                            ? "text-red-600"
                            : "text-white group-hover:text-white"
                        )}>
                          {link.icon}
                        </span>
                      </div>

                      {/* Text */}
                      <span className="relative z-10 flex-1">{link.name}</span>

                      {/* Active indicator */}
                      {location.pathname === link.href && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      )}

                      {/* Hover effect */}
                      <div className={cn(
                        "absolute inset-0 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100",
                        location.pathname === link.href ? "opacity-100" : ""
                      )} style={{
                        background: location.pathname === link.href
                          ? 'linear-gradient(135deg, rgba(220, 20, 60, 0.9) 0%, rgba(185, 28, 60, 0.8) 100%)'
                          : theme === 'dark'
                            ? 'linear-gradient(135deg, rgba(220, 20, 60, 0.1) 0%, rgba(185, 28, 60, 0.15) 100%)'
                            : 'linear-gradient(135deg, rgba(220, 20, 60, 0.05) 0%, rgba(185, 28, 60, 0.08) 100%)'
                      }}></div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Collapsible Bottom Section */}
              <div className="px-4 pb-6 space-y-3">

                {/* Compact Theme Toggle */}
                <button
                  onClick={() => { toggleTheme(); closeMenu(); }}
                  className={cn(
                    "group flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 font-['Poppins']",
                    theme === 'dark'
                      ? "text-gray-300 hover:text-white hover:bg-red-600 border border-gray-600"
                      : "text-gray-700 hover:text-white hover:bg-red-600 border border-gray-300"
                  )}
                  style={{
                    transform: `translateY(${isMenuOpen ? '0' : '10px'})`,
                    opacity: isMenuOpen ? 1 : 0,
                    transition: 'all 0.2s ease 0.3s'
                  }}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105",
                    "bg-red-600 group-hover:bg-red-700"
                  )}>
                    {theme === 'dark' ? (
                      <span className="text-white text-lg">☀️</span>
                    ) : (
                      <span className="text-white text-lg">🌙</span>
                    )}
                  </div>
                  <span className="flex-1 text-left">
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </span>
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* Compact CTA Button */}
                <Link
                  to="/contact"
                  className={cn(
                    "group relative flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-[1.01] hover:shadow-lg overflow-hidden font-['Poppins']",
                    theme === 'dark'
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 border border-red-700"
                      : "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 border border-red-700"
                  )}
                  style={{
                    transform: `translateY(${isMenuOpen ? '0' : '10px'})`,
                    opacity: isMenuOpen ? 1 : 0,
                    transition: 'all 0.2s ease 0.35s'
                  }}
                  onClick={closeMenu}
                >
                  <span className="relative z-10">Hire Me</span>
                  <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>

                  {/* Compact glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-r from-red-600 to-red-700"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;