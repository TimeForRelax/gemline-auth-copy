import {
  AuthFormsBox,
  EndAdornment,
  FormsFieldsBox,
  FormsHeading,
  FormsSubmitButton,
  InputWithEndAdornment,
  Logo,
} from '@components/index';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ReactComponent as HideIcon } from '@assets/images/common/hide_pass.svg';
import { ReactComponent as ShowIcon } from '@assets/images/common/show_pass.svg';
import { sha256 } from 'js-sha256';
import { useResetPassword } from '@api/index';

const defaultValues = {
  new_password: '',
  repeat_password: '',
};

interface IFormInput {
  new_password: string;
  repeat_password: string;
}

export const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowRepeatPassword = () => setShowRepeatPassword((show) => !show);

  const { handleSubmit, register, formState, watch } = useForm<IFormInput>({ defaultValues });

  const passwordValue = watch('new_password');

  const { errors } = formState;

  const resetPasswordSuccess = (data: any) => {};

  const resetPassword = useResetPassword({
    onSuccess: resetPasswordSuccess,
  });

  const onSubmit = (data: IFormInput) => {
    const { new_password } = data;

    const encryptedPassword = sha256(new_password);

    resetPassword({
      NewPassword: encryptedPassword,
      RecoveryHash:
        '6680c25664090054a11a90e4daa6952da6d0e7e10bbb7bc972143213dbc29a35e07f04aea879b103928dbd991f92708ca5b7cf51044c5a5c7a6387fc437e970b3b52e70c1934ad35f8d6f6eb3b9775bf041fbc17b939df16d20cf687003b4996',
    });
  };

  return (
    <AuthFormsBox component={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Logo />
      <FormsHeading>Новый пароль</FormsHeading>
      <FormsFieldsBox>
        <InputWithEndAdornment
          label={'Новый пароль'}
          placeholder={'Введите новый пароль'}
          type={showPassword ? 'text' : 'password'}
          name={'new_password'}
          error={!!errors.new_password}
          helperText={errors.new_password?.message}
          rules={{
            ...register('new_password', {
              required: 'Password is required',
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
              required: 'Password is required',
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
        Сохранить
      </FormsSubmitButton>
    </AuthFormsBox>
  );
};
