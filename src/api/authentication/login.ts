import { UseApiMutationOptions } from '@api/types';
import { useMutation } from '@tanstack/react-query';
import { HttpService } from '@utils/http';
import { API_URL } from 'src/consts';

interface LoginData {
  Login: string;
  Password: string;
}

export const useLogin = ({ onSuccess, onError }: UseApiMutationOptions) => {
  const { mutate } = useMutation<any, any, LoginData, any>({
    mutationFn: (data: LoginData) => {
      return HttpService.post(`${API_URL}/login`, data);
    },
    onSuccess,
    onError,
  });

  return mutate;
};
