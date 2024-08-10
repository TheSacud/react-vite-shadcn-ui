import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { authenticateWithGoogle } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const GoogleLoginButton: React.FC = () => {

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSuccess = async (response: CredentialResponse) => {
    if (response.credential) {
      const token = response.credential;
      try {
        await authenticateWithGoogle(token,login);
        navigate('/');
      } catch (error) {
        console.error('Erro ao autenticar com o backend:', error);
      }
    }
  };

  const handleFailure = (error: any) => {
    console.error('Erro no login:', error);
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => handleFailure(new Error('Login falhou'))}
    />
  );
};

export default GoogleLoginButton;