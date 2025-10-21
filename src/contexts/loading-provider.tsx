import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingOperations, setLoadingOperations] = useState(0);

  // Handle initial page load - simplified without location dependency
  useEffect(() => {
    console.log('LoadingProvider: Starting initial load'); // Debug log
    const timer = setTimeout(() => {
      console.log('LoadingProvider: Stopping initial load'); // Debug log
      setIsLoading(false);
    }, 1000); // Reduced to 1 second for better UX

    return () => clearTimeout(timer);
  }, []);

  // Enhanced loading management
  const startLoading = () => {
    setLoadingOperations(prev => prev + 1);
    setIsLoading(true);
  };

  const stopLoading = () => {
    setLoadingOperations(prev => {
      const newCount = prev - 1;
      if (newCount <= 0) {
        setIsLoading(false);
        return 0;
      }
      return newCount;
    });
  };

  return (
    <LoadingContext.Provider value={{
      isLoading,
      setIsLoading,
      startLoading,
      stopLoading
    }}>
      {children}
    </LoadingContext.Provider>
  );
};
