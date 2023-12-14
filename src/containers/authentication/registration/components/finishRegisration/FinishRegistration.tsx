import { SuccessScreen } from '@components/index';
import { getPath, View } from '@routes/index';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface FinishRegistrationProps {}

export const FinishRegistration: FC<FinishRegistrationProps> = () => {
  const navigate = useNavigate();

  const onClick = (): void => {
    navigate(getPath(View.AUTHENTICATION_LOGIN));
  };

  return (
    <SuccessScreen
      heading={'Завершите регистрацию'}
      subHeading={'Мы отправили ссылку для подтверждения учетной записи на ваш E-mail. Проверьте почту'}
      btnText={'Вернуться на сайт'}
      onClick={onClick}
    />
  );
};
