import { UseApiMutationOptions } from '@api/types';
import { useMutation } from '@tanstack/react-query';
import { HttpService } from '@utils/http';
import { API_URL } from 'src/consts';

interface ForgotPasswordData {
  Login: string;
}

export const useForgotPassword = ({ onSuccess, onError }: UseApiMutationOptions) => {
  const { mutate } = useMutation<any, any, ForgotPasswordData, any>({
    mutationFn: (data: ForgotPasswordData) => {
      return HttpService.post(`${API_URL}/recovery-password`, data);
    },
    onSuccess,
    onError,
  });

  return mutate;
};
