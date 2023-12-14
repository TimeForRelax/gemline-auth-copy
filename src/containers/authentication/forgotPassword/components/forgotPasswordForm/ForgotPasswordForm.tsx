import { useForgotPassword } from '@api/index';
import {
  AuthFormsBox,
  FormsFieldsBox,
  FormsFooterBox,
  FormsFooterText,
  FormsHeading,
  FormsSubHeading,
  FormsSubmitButton,
  Input,
  LinkTo,
  Logo,
} from '@components/index';
import { View } from '@routes/routeInterfaces';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

const defaultValues = {
  email: '',
};

interface IFormInput {
  email: string;
}

interface ForgotPasswordFormProps {
  setIsComplete: (data: boolean) => void;
}

export const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({ setIsComplete }) => {
  const { handleSubmit, register, formState } = useForm<IFormInput>({ defaultValues });

  const { errors } = formState;

  const forgotPasswordSuccess = (data: any) => {
    setIsComplete(true);
  };

  const registration = useForgotPassword({
    onSuccess: forgotPasswordSuccess,
  });

  const onSubmit = (data: IFormInput) => {
    const { email } = data;

    registration({
      Login: email,
    });
  };

  return (
    <AuthFormsBox component={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Logo />
      <FormsHeading>Забыл пароль</FormsHeading>
      <FormsSubHeading>
        Введите ваш E-mail, по которому вы регистрировались и мы отправим инструкцию по восстановлению пароля
      </FormsSubHeading>
      <FormsFieldsBox>
        <Input
          label={'E-mail'}
          placeholder={'E-mail'}
          name={'email'}
          type={'email'}
          rules={{
            ...register('email', {
              required: 'Обязательное поле',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Введите корректный адрес e-mail',
              },
            }),
          }}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </FormsFieldsBox>
      <FormsSubmitButton type={'submit'} variant={'contained'}>
        Восстановить пароль
      </FormsSubmitButton>
      <FormsFooterBox>
        <FormsFooterText>Вспомнили пароль?</FormsFooterText>
        <LinkTo view={View.AUTHENTICATION_LOGIN} text="Вход" />
      </FormsFooterBox>
    </AuthFormsBox>
  );
};
