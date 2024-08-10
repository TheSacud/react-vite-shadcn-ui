import { useState, useEffect } from 'react';
import api from '../services/api';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem('jwtToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (!accessToken) {
        setIsAuthenticated(false);
        return;
      }

      try {
        // Verify the access token
        const response = await api.post('/api/auth/dj-rest-auth/token/verify/', {
          token: accessToken,
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Access token is invalid or expired, attempting to refresh:', error);

        if (refreshToken) {
          try {
            // Refresh the token
            const response = await api.post('/api/auth/dj-rest-auth/token/refresh/', {
              refresh: refreshToken,
            });

            if (response.status === 200) {
              const { access, refresh } = response.data;
              localStorage.setItem('jwtToken', access);
              localStorage.setItem('refreshToken', refresh);
              setIsAuthenticated(true);
            } else {
              setIsAuthenticated(false);
            }
          } catch (refreshError) {
            console.error('Failed to refresh token:', refreshError);
            setIsAuthenticated(false);
          }
        } else {
          setIsAuthenticated(false);
        }
      }
    };

    checkAuth();
  }, []);

  return isAuthenticated;
};

export default useAuth;
