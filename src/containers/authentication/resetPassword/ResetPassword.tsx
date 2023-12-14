import { Footer } from '@components/index';
import styled from '@emotion/styled';
import { AuthenticationWrapper } from '@styles/index';
import { FC } from 'react';
import { ResetPasswordForm } from './components/resetPasswordForm/ResetPasswordForm';

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ResetPasswordProps {}

export const ResetPassword: FC<ResetPasswordProps> = () => {
  return (
    <AuthenticationWrapper>
      <ContentWrapper>
        <ResetPasswordForm />
      </ContentWrapper>
      <Footer />
    </AuthenticationWrapper>
  );
};
