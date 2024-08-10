import { toast } from 'sonner';
import { AxiosError } from 'axios';

export const handleApiError = (error: AxiosError) => {
    if (error.response) {
        // A resposta do servidor foi recebida, mas o status indica um erro
        switch (error.response.status) {
            case 401:
                handle401Error();
                break;
            case 403:
                handle403Error();
                break;
            case 404:
                handle404Error();
                break;
            default:
                handleGenericError(error);
                break;
        }
    } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        handleNoResponseError();
    } else {
        // Algo aconteceu ao configurar a requisição que acionou um erro
        handleUnexpectedError(error);
    }
    console.error('API Error:', error);
    throw error; // Re-lança o erro para que possa ser tratado onde a função foi chamada
};

const handle401Error = () => {
    toast('Unauthorized. Please log in again.');
    // Redirecionar para a página de login, por exemplo
    // window.location.href = '/login';
};

const handle403Error = () => {
    toast('Forbidden. You do not have permission to perform this action.');
};

const handle404Error = () => {
    toast('Not Found. The requested resource could not be found.');
};

const handleGenericError = (error: AxiosError) => {
    const errorMessage = error.response?.data?.message || 'An error occurred. Please try again later.';
    toast(errorMessage);
};

const handleNoResponseError = () => {
    toast('No response from the server. Please check your internet connection.');
};

const handleUnexpectedError = (error: Error) => {
    toast(`Unexpected error: ${error.message}`);
};