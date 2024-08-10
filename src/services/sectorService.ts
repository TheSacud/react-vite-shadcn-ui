import api from './api';
import { Sector } from "../models/Sector";
import { toast } from 'sonner';

export const createSector = async (data: Sector) => {
    try {
        const response = await api.post('/api/sectors/', data);
        toast('Success');
        return response.data;

    } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Error creating sector';
        toast(errorMessage);
        console.error('Error creating sector:', error);
        throw error;
    }
};