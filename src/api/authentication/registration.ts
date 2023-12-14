import { UseApiMutationOptions } from '@api/types';
import { useMutation } from '@tanstack/react-query';
import { HttpService } from '@utils/http';
import { API_URL } from 'src/consts';

interface RegistrationData {
  Login: string;
  Password: string;
  Host: string;
}

export const useRegistration = ({ onSuccess, onError }: UseApiMutationOptions) => {
  const { mutate } = useMutation<any, any, RegistrationData, any>({
    mutationFn: (data: RegistrationData) => {
      return HttpService.post(`${API_URL}/registration`, data);
    },
    onSuccess,
    onError,
  });

  return mutate;
};
