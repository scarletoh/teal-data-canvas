import { useNavigate } from 'react-router-dom';

interface AuthRedirectOptions {
  action: 'login' | 'signup';
  redirectTo?: string;
}

export const useAuthRedirect = () => {
  const navigate = useNavigate();

  const handleAuthRedirect = (options: AuthRedirectOptions) => {
    const { action, redirectTo } = options;

    // For a portfolio site, we'll redirect to contact page for login/quote requests
    // In a real app with authentication, this would handle actual auth flow
    if (redirectTo) {
      navigate(redirectTo);
    } else if (action === 'login') {
      navigate('/contact');
    } else {
      navigate('/contact');
    }
  };

  return { handleAuthRedirect };
};
