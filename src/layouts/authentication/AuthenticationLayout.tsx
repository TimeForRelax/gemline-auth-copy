import { Background, Body, Wrapper } from '@layouts/elements/elements';
import { renderRoutes } from '@utils/renderRoutes';
import { FC } from 'react';

interface AuthenticationLayoutProps {
  routes: any;
  parentPathLength: number;
}

export const AuthenticationLayout: FC<AuthenticationLayoutProps> = ({ routes, parentPathLength }) => {
  return (
    <Background>
      <Wrapper>
        <Body>{renderRoutes(routes, parentPathLength)}</Body>
      </Wrapper>
    </Background>
  );
};
