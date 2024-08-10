import api from './api';

interface ServiceData {
  serviceName: string;
  description: string;
  price: number;
  duration: string;
  category: string;
}

export const offerService = async (serviceData: ServiceData) => {
  try {
    const response = await api.post('/api/services/', serviceData);
    return response.data;
  } catch (error) {
    console.error('Error offering service:', error);
    throw error;
  }
};
