import { SuccessScreen } from '@components/index';
import { getPath, View } from '@routes/index';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface FinishResetPasswordProps {}

export const FinishResetPassword: FC<FinishResetPasswordProps> = () => {
  const navigate = useNavigate();

  const onClick = (): void => {
    navigate(getPath(View.AUTHENTICATION_LOGIN));
  };

  return (
    <SuccessScreen
      heading={'Сброс пароля отправлен'}
      subHeading={'Мы отправили инструкцию по восстановлению пароля на ваш E-mail. Проверьте почту'}
      btnText={'Войти'}
      onClick={onClick}
    />
  );
};
