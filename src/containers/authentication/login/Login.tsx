import { Footer } from '@components/index';
import { AuthenticationWrapper } from '@styles/index';
import { FC } from 'react';
import { AuthorizationForm } from './components/authorizationForm/AuthorizationForm';
import styled from '@emotion/styled';

const ContentWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  return (
    <AuthenticationWrapper>
      <ContentWrapper>
        <AuthorizationForm />
      </ContentWrapper>
      <Footer />
    </AuthenticationWrapper>
  );
};
