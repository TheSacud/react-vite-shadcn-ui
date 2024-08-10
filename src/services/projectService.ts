import api from './api';

interface ProjectData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  // Adicione outros campos necessários aqui
}

export const createProject = async (projectData: ProjectData): Promise<void> => {
  try {
    const response = await api.post('/api/projects/', projectData);
    console.log(response.data);
  } catch (error) {
    console.error('Erro ao criar projeto:', error);
    throw error;
  }
};

export const updateProject = async (projectId: string, projectData: ProjectData): Promise<void> => {
  try {
    const response = await api.put(`/api/projects/${projectId}/`, projectData);
    console.log(response.data);
  } catch (error) {
    console.error('Erro ao atualizar projeto:', error);
    throw error;
  }
};
