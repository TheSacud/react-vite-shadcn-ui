import api from './api';
import { CompanyData } from '../models/Company';
import { toast } from 'sonner';

export const createCompany = async (companyData: CompanyData) => {
  try {
    const response = await api.post('/api/companies/', companyData);
    toast.success('');
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Error creating company';
    toast(errorMessage);
    console.error('Error creating company:', error);
    throw error;
}
};