import {
  AuthFormsBox,
  EndAdornment,
  FormsFieldsBox,
  FormsFooterBox,
  FormsFooterText,
  FormsHeading,
  FormsSubmitButton,
  Input,
  InputWithEndAdornment,
  LinkTo,
  Logo,
} from '@components/index';
import { View } from '@routes/index';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ReactComponent as HideIcon } from '@assets/images/common/hide_pass.svg';
import { ReactComponent as ShowIcon } from '@assets/images/common/show_pass.svg';
import { sha256 } from 'js-sha256';
import { useLogin } from '@api/index';

const defaultValues = {
  email: '',
  password: '',
};

interface IFormInput {
  email: string;
  password: string;
}

interface AuthorizationFormProps {}

export const AuthorizationForm: FC<AuthorizationFormProps> = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { handleSubmit, register, formState } = useForm<IFormInput>({ defaultValues });

  const { errors } = formState;

  const loginSuccess = (data: any) => {};

  const login = useLogin({
    onSuccess: loginSuccess,
  });

  const onSubmit = (data: IFormInput) => {
    const { email, password } = data;

    const encryptedPassword = sha256(password);

    login({
      Login: email,
      Password: encryptedPassword,
    });
  };

  return (
    <AuthFormsBox component={'form'} onSubmit={handleSubmit(onSubmit)} {...props}>
      <Logo />
      <FormsHeading>Вход в систему</FormsHeading>
      <FormsFieldsBox className="login_fields">
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
        <InputWithEndAdornment
          label={'Пароль'}
          placeholder={'Введите пароль'}
          type={showPassword ? 'text' : 'password'}
          name={'password'}
          error={!!errors.password}
          helperText={errors.password?.message}
          rules={{
            ...register('password', {
              required: 'Обязательное поле',
              minLength: {
                value: 8,
                message: 'Пароль должен быть длиннее 8 символов',
              },
              maxLength: {
                value: 64,
                message: 'Пароль должен быть меньше 64 символов',
              },
              pattern: {
                value: /^[A-Za-z0-9~`!@#$%^&*()_\-+={[}\]|:;"'<,>.?/]+$/,
                message: 'Пароль может содержать латинские буквы, цифры и некоторые специальные символы',
              },
            }),
          }}
          endAdornment={
            <EndAdornment
              state={showPassword}
              handleClickIcon={handleClickShowPassword}
              icon1={<HideIcon />}
              icon2={<ShowIcon />}
            />
          }
        />
      </FormsFieldsBox>
      <LinkTo view={View.AUTHENTICATION_FORGOT_PASSWORD} text="Забыл пароль" className={'login_link'} />
      <FormsSubmitButton type={'submit'} variant={'contained'}>
        Войти
      </FormsSubmitButton>
      <FormsFooterBox>
        <FormsFooterText>Нет аккаунта?</FormsFooterText>
        <LinkTo view={View.AUTHENTICATION_REGISTRATION} text="Регистрация" />
      </FormsFooterBox>
    </AuthFormsBox>
  );
};
