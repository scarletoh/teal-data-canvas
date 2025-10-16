import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/theme-provider';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-full transition-all duration-300 ease-in-out",
        "hover:bg-royalBlue/10 hover:scale-110",
        "focus:outline-none focus:ring-2 focus:ring-royalBlue/50",
        "glass-card border border-royalBlue/20"
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun
          className={cn(
            "absolute inset-0 w-5 h-5 transition-all duration-300",
            "text-yellow-500 hover:text-yellow-400",
            theme === 'dark'
              ? 'opacity-0 rotate-90 scale-0'
              : 'opacity-100 rotate-0 scale-100'
          )}
        />

        {/* Moon Icon */}
        <Moon
          className={cn(
            "absolute inset-0 w-5 h-5 transition-all duration-300",
            "text-blue-400 hover:text-blue-300",
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0'
          )}
        />
      </div>

      {/* Background indicator */}
      <div
        className={cn(
          "absolute inset-0 rounded-full transition-all duration-300",
          theme === 'dark'
            ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20'
            : 'bg-gradient-to-br from-yellow-100/20 to-orange-100/20'
        )}
      />
    </button>
  );
}
