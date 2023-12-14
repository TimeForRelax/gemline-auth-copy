import { Footer } from '@components/index';
import { AuthenticationWrapper } from '@styles/index';
import { FC, useEffect, useState } from 'react';
import { FinishRegistration } from './components/finishRegisration/FinishRegistration';
import { RegistrationForm } from './components/registrationForm/RegistrationForm';
import styled from '@emotion/styled';

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface RegistrationProps {}

export const Registration: FC<RegistrationProps> = () => {
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    setIsComplete(false);
  }, []);

  return (
    <AuthenticationWrapper>
      <ContentWrapper>
        {!isComplete ? <RegistrationForm setIsComplete={setIsComplete} /> : <FinishRegistration />}
      </ContentWrapper>
      <Footer />
    </AuthenticationWrapper>
  );
};
