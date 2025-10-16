import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, ArrowLeft, Search, Zap, Star, Database, TrendingUp } from "lucide-react";
import { useTheme } from "@/contexts/theme-provider";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { name: "Home", href: "/", icon: Home, description: "Portfolio overview" },
    { name: "Projects", href: "/projects", icon: Database, description: "Featured work" },
    { name: "About", href: "/about", icon: Star, description: "Personal journey" },
    { name: "Services", href: "/services", icon: TrendingUp, description: "Professional services" },
    { name: "Contact", href: "/contact", icon: Zap, description: "Get in touch" }
  ];

  return (
    <div className={cn(
      "min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000",
      theme === 'dark'
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
        : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
    )}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-[#DC143C]/5 to-[#B91C3C]/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#B91C3C]/5 to-[#DC143C]/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-[#DC143C]/3 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

          {/* 404 Icon/Graphic */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C] to-[#B91C3C] rounded-full flex items-center justify-center">
                <Search className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Error Message */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] bg-clip-text text-transparent font-montserrat-bold">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-helvetica-medium mb-4 text-gray-800 dark:text-gray-200">
              Oops! Page Not Found
            </h2>
            <p className="text-lg font-inter-regular text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Looks like this page went on a data adventure without leaving a forwarding address.
              Don't worry though – let's get you back to exploring amazing projects and insights!
            </p>
          </div>

          {/* Fun Suggestions */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#DC143C]/10 to-[#B91C3C]/10 px-6 py-3 rounded-full border border-[#DC143C]/20">
              <Star className="w-4 h-4 text-[#DC143C]" />
              <span className="text-[#DC143C] font-inter-regular">Try these popular destinations instead:</span>
            </div>
          </div>

          {/* Navigation Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            {popularPages.map((page, index) => (
              <Link
                key={page.href}
                to={page.href}
                className={cn(
                  "group glass-card p-6 hover:scale-105 transition-all duration-300 border border-border/50 hover:border-[#DC143C]/30",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#DC143C]/20 to-[#B91C3C]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <page.icon className="w-5 h-5 text-[#DC143C]" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-helvetica-medium text-gray-900 dark:text-white group-hover:text-[#DC143C] transition-colors">
                      {page.name}
                    </h3>
                    <p className="text-sm font-inter-regular text-gray-600 dark:text-gray-400">
                      {page.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#B91C3C] hover:from-[#B91C3C] hover:to-[#A0163C] text-white font-poppins-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#DC143C]/25"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-3 px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-[#DC143C]/10 dark:hover:bg-[#DC143C]/10 text-gray-700 dark:text-gray-300 hover:text-[#DC143C] dark:hover:text-[#DC143C] font-poppins-medium rounded-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 hover:border-[#DC143C]"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Fun Footer Message */}
          <div className="text-center">
            <p className="text-sm font-inter-regular text-gray-500 dark:text-gray-400">
              Lost in the data stream? 🔍 Let's find your way back to amazing insights!
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .dark .glass-card {
          background: rgba(31, 41, 55, 0.8);
          border: 1px solid rgba(75, 85, 99, 0.3);
        }
      `}</style>
    </div>
  );
};

export default NotFound;
