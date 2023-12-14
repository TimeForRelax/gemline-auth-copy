import { useRegistration } from '@api/index';
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
import { sha256 } from 'js-sha256';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ReactComponent as HideIcon } from '@assets/images/common/hide_pass.svg';
import { ReactComponent as ShowIcon } from '@assets/images/common/show_pass.svg';

const defaultValues = {
  name: '',
  reference: '',
  email: '',
  password: '',
  repeat_password: '',
};

interface IFormInput {
  name: string;
  reference: string;
  email: string;
  password: string;
  repeat_password: string;
}

interface RegistrationFormProps {
  setIsComplete: (data: boolean) => void;
}

export const RegistrationForm: FC<RegistrationFormProps> = ({ setIsComplete }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowRepeatPassword = () => setShowRepeatPassword((show) => !show);

  const { handleSubmit, register, formState, watch } = useForm<IFormInput>({ defaultValues });

  const passwordValue = watch('password');

  const { errors } = formState;

  const registrationSuccess = (data: any) => {
    setIsComplete(true);
  };

  const registration = useRegistration({
    onSuccess: registrationSuccess,
  });

  const onSubmit = (data: IFormInput) => {
    const { email, name, password, reference, repeat_password } = data;

    const encryptedPassword = sha256(password);

    registration({
      Login: email,
      Password: encryptedPassword,
      Host: window.location.host,
    });
  };

  return (
    <AuthFormsBox component={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Logo />
      <FormsHeading>Регистрация</FormsHeading>
      <FormsFieldsBox>
        <Input
          label={'Имя'}
          placeholder={'Введите имя'}
          name={'name'}
          type={'text'}
          rules={{
            ...register('name', {
              required: 'Обязательное поле',
              minLength: {
                value: 4,
                message: 'Имя должно быть длиннее 4 символов',
              },
              maxLength: {
                value: 24,
                message: 'Имя должно быть меньше 24 символов',
              },
              pattern: {
                value: /(.*[а-яА-ЯёЁ].*){2,}|(.*[a-zA-Z].*){2,}/,
                message: 'Имя должно содержать хотя бы 2 буквы',
              },
            }),
          }}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <Input
          label={'Реферальный код'}
          placeholder={'Введите код'}
          name={'reference'}
          type={'text'}
          rules={{ ...register('reference', { required: false }) }}
          error={!!errors.reference}
          helperText={errors.reference?.message}
        />
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
        <InputWithEndAdornment
          label={'Повторите пароль'}
          placeholder={'Повторите пароль'}
          type={showRepeatPassword ? 'text' : 'password'}
          name={'repeat_password'}
          error={!!errors.repeat_password}
          helperText={errors.repeat_password?.message}
          rules={{
            ...register('repeat_password', {
              required: 'Обязательное поле',
              validate: (value) => value === passwordValue || 'Пароли не совпадают',
            }),
          }}
          endAdornment={
            <EndAdornment
              state={showRepeatPassword}
              handleClickIcon={handleClickShowRepeatPassword}
              icon1={<HideIcon />}
              icon2={<ShowIcon />}
            />
          }
        />
      </FormsFieldsBox>
      <FormsSubmitButton type={'submit'} variant={'contained'}>
        Зарегистрироваться
      </FormsSubmitButton>
      <FormsFooterBox>
        <FormsFooterText>Уже есть аккаунт?</FormsFooterText>
        <LinkTo view={View.AUTHENTICATION_LOGIN} text="Вход" />
      </FormsFooterBox>
    </AuthFormsBox>
  );
};
