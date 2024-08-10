import api from './api';

interface ProfileData {
  username: string;
  about: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  streetAddress: string;
  city: string;
  region: string;
  postalCode: string;
  notifications: {
    comments: boolean;
    candidates: boolean;
    offers: boolean;
    pushNotifications: 'everything' | 'sameAsEmail' | 'nothing';
  };
}

export const getProfile = async () => {
  try {
    const response = await api.get('/api/profile/');
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

export const updateProfile = async (profileData: ProfileData) => {
  try {
    const response = await api.put('/api/profile/', profileData);
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};
