import api, { setJwtToken } from './api';

interface GoogleAuthResponse {
  access: string;
  refresh: string;
}

export const authenticateWithGoogle = async (token: string, login: (access: string, refresh: string) => void): Promise<void> => {
  try {
    const response = await api.post<GoogleAuthResponse>('/api/auth/google/', {
      access_token: token,
    });
    console.log(response.data);
    const { access, refresh } = response.data;
    setJwtToken(access);
    localStorage.setItem('refreshToken', refresh);
    login(access, refresh);
  } catch (error) {
    console.error('Erro ao enviar o token para o backend:', error);
    throw error;
  }
};

interface RegisterUserParams {
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
}

export const registerUser = async (newUser: RegisterUserParams, login: (access: string, refresh: string) => void): Promise<void> => {
  try {
    const response = await api.post('/api/auth/dj-rest-auth/registration/', newUser);
    const { access, refresh } = response.data;
    setJwtToken(access);
    localStorage.setItem('refreshToken', refresh);
    login(access, refresh);
  } catch (error) {
    console.error('Erro ao registrar o usuário:', error);
    throw error;
  }
};

interface LoginUserParams {
  email: string;
  password: string;
}

export const loginUser = async (credentials: LoginUserParams, login: (access: string, refresh: string) => void): Promise<void> => {
  try {
    const response = await api.post('/api/auth/dj-rest-auth/login/', credentials);
    const { access, refresh } = response.data;
    console.log(response.data);
    setJwtToken(access);
    localStorage.setItem('refreshToken', refresh);
    login(access, refresh);
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export const refreshToken = async (login: (access: string, refresh: string) => void): Promise<void> => {
  try {
    const refresh = localStorage.getItem('refreshToken');
    if (!refresh) {
      throw new Error('No refresh token found');
    }

    const response = await api.post('/api/auth/dj-rest-auth/token/refresh/', { refresh });
    const jwtToken = response.data.access;
    setJwtToken(jwtToken);
    login(jwtToken, refresh);
  } catch (error) {
    console.error('Erro ao renovar o token:', error);
    throw error;
  }
};
