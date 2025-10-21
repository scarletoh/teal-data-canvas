import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/theme-provider';

interface ModernLoaderProps {
  isLoading: boolean;
}

export const ModernLoader = ({ isLoading }: ModernLoaderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);

      // Enhanced scroll lock implementation
      const scrollY = window.scrollY;

      // Lock scroll with comprehensive approach
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100%';

      // Prevent touch/scroll events on mobile
      const preventScroll = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
      };

      document.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('wheel', preventScroll, { passive: false });

      // Store cleanup function for later use
      (window as any).__loaderCleanup = () => {
        document.removeEventListener('touchmove', preventScroll);
        document.removeEventListener('wheel', preventScroll);
      };

    } else {
      // Enhanced scroll restoration
      const cleanup = () => {
        // Restore scroll position
        const scrollY = document.body.style.top;
        const scrollPosition = Math.abs(parseInt(scrollY || '0', 10));

        // Restore styles
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.height = '';

        // Restore scroll position
        window.scrollTo(0, scrollPosition);

        // Clean up event listeners
        if ((window as any).__loaderCleanup) {
          (window as any).__loaderCleanup();
          (window as any).__loaderCleanup = null;
        }
      };

      // Delay cleanup to allow fade-out animation
      const timer = setTimeout(() => {
        cleanup();
        setIsVisible(false);
      }, 300);

      return () => {
        clearTimeout(timer);
        cleanup();
      };
    }
  }, [isLoading]);

  // Enhanced cleanup on component unmount
  useEffect(() => {
    return () => {
      // Final cleanup
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.height = '';

      // Restore scroll position
      const scrollY = document.body.style.top;
      const scrollPosition = Math.abs(parseInt(scrollY || '0', 10));
      window.scrollTo(0, scrollPosition);

      // Clean up event listeners
      if ((window as any).__loaderCleanup) {
        (window as any).__loaderCleanup();
        (window as any).__loaderCleanup = null;
      }
    };
  }, []);

  if (!isVisible) return null;

  // Fallback theme handling
  const currentTheme = theme || 'dark';

  return (
    <div className={`
      fixed inset-0 z-[9999] flex items-center justify-center
      backdrop-blur-sm transition-all duration-300
      ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `}
    style={{
      backgroundColor: currentTheme === 'dark'
        ? 'rgba(10, 10, 10, 0.95)'
        : 'rgba(245, 245, 245, 0.95)'
    }}
    >
      <div
        className="p-6 max-w-sm mx-auto text-center rounded-2xl relative overflow-hidden"
        style={{
          backgroundColor: currentTheme === 'dark'
            ? 'rgba(26, 26, 26, 0.95)'
            : 'rgba(255, 255, 255, 0.95)',
          border: `1px solid ${currentTheme === 'dark'
            ? 'rgba(220, 20, 60, 0.2)'
            : 'rgba(220, 20, 60, 0.15)'}`,
          boxShadow: currentTheme === 'dark'
            ? '0 25px 50px -12px rgba(220, 20, 60, 0.15)'
            : '0 25px 50px -12px rgba(220, 20, 60, 0.08)'
        }}
      >
        {/* Background gradient effect */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${currentTheme === 'dark'
              ? 'rgba(220, 20, 60, 0.1)'
              : 'rgba(220, 20, 60, 0.05)'}, transparent 70%)`
          }}
        ></div>

        <div className="relative">
          {/* Logo */}
          <div className="mb-4 flex justify-center">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] shadow-lg">
                <img
                  src={currentTheme === 'dark' ? "/logo.svg" : "/logo-light.svg"}
                  alt="Scar Logo"
                  className="w-6 h-6 transition-all duration-300"
                  style={{
                    filter: currentTheme === 'dark'
                      ? 'brightness(0) saturate(100%) invert(1) contrast(1.5) drop-shadow(0 0 4px rgba(255,255,255,0.6))'
                      : 'brightness(0) saturate(100%) invert(1) contrast(1.5) drop-shadow(0 0 4px rgba(255,255,255,0.4))',
                    color: 'white'
                  }}
                />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-90 shadow-sm"></div>
            </div>
          </div>

          {/* Modern Spinning Loader */}
          <div className="relative mb-6">
            <div className="w-16 h-16 mx-auto relative">
              {/* Outer spinning ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin"
                style={{
                  background: `conic-gradient(from 0deg, transparent 60%, ${currentTheme === 'dark' ? 'rgba(220, 20, 60, 0.8)' : 'rgba(220, 20, 60, 0.6)'}, transparent 80%)`,
                  borderRadius: '50%',
                  animationDuration: '1.5s'
                }}
              ></div>

              {/* Inner decorative ring */}
              <div
                className="absolute inset-2 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, ${currentTheme === 'dark' ? 'rgba(220, 20, 60, 0.4)' : 'rgba(220, 20, 60, 0.3)'}, transparent 50%, ${currentTheme === 'dark' ? 'rgba(220, 20, 60, 0.6)' : 'rgba(220, 20, 60, 0.4)'})`,
                  borderRadius: '50%'
                }}
              ></div>

              {/* Center logo replacement */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#DC143C] to-[#B91C3C] shadow-lg">
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Loading Text */}
          <div className="space-y-2">
            <h3
              className="font-bold text-lg tracking-tight"
              style={{
                color: currentTheme === 'dark' ? '#E5E5E5' : '#1a1a1a'
              }}
            >
              Welcome to My Portfolio 😊
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: currentTheme === 'dark' ? '#B3B3B3' : '#666666'
              }}
            >
              Loading your experience...
            </p>
          </div>

          {/* Enhanced Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  backgroundColor: '#DC143C',
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '1.2s',
                  boxShadow: `0 0 8px ${currentTheme === 'dark'
                    ? 'rgba(220, 20, 60, 0.6)'
                    : 'rgba(220, 20, 60, 0.4)'}`
                }}
              ></div>
            ))}
          </div>

          {/* Loading percentage indicator */}
          <div className="mt-3">
            <div
              className="w-full h-1 rounded-full overflow-hidden"
              style={{
                backgroundColor: currentTheme === 'dark'
                  ? 'rgba(220, 20, 60, 0.2)'
                  : 'rgba(220, 20, 60, 0.15)'
              }}
            >
              <div
                className="h-full rounded-full animate-pulse"
                style={{
                  backgroundColor: '#DC143C',
                  width: '60%',
                  boxShadow: `0 0 10px ${currentTheme === 'dark'
                    ? 'rgba(220, 20, 60, 0.5)'
                    : 'rgba(220, 20, 60, 0.3)'}`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
