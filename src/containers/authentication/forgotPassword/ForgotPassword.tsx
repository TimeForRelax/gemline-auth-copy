import { Footer } from '@components/index';
import styled from '@emotion/styled';
import { AuthenticationWrapper } from '@styles/index';
import { FC, useEffect, useState } from 'react';
import { FinishResetPassword } from './components/finishResetPassword/FinishResetPassword';
import { ForgotPasswordForm } from './components/forgotPasswordForm/ForgotPasswordForm';

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ForgotPasswordProps {}

export const ForgotPassword: FC<ForgotPasswordProps> = () => {
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    setIsComplete(false);
  }, []);

  return (
    <AuthenticationWrapper>
      <ContentWrapper>
        {!isComplete ? <ForgotPasswordForm setIsComplete={setIsComplete} /> : <FinishResetPassword />}
      </ContentWrapper>
      <Footer />
    </AuthenticationWrapper>
  );
};
