import { UseApiMutationOptions } from '@api/types';
import { useMutation } from '@tanstack/react-query';
import { HttpService } from '@utils/http';
import { API_URL } from 'src/consts';

interface ResetPasswordData {
  RecoveryHash: string;
  NewPassword: string;
}

export const useResetPassword = ({ onSuccess, onError }: UseApiMutationOptions) => {
  const { mutate } = useMutation<any, any, ResetPasswordData, any>({
    mutationFn: (data: ResetPasswordData) => {
      return HttpService.patch(`${API_URL}/confirm-recovery-password`, data);
    },
    onSuccess,
    onError,
  });

  return mutate;
};
