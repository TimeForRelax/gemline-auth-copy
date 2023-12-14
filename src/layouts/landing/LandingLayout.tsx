import { Body, Wrapper } from '@layouts/elements/elements';
import { renderRoutes } from '@utils/index';
import { FC } from 'react';

interface LandingLayoutProps {
  routes: any;
  parentPathLength: number;
}

export const LandingLayout: FC<LandingLayoutProps> = ({ routes, parentPathLength }) => {
  return (
    <Wrapper>
      <Body>{renderRoutes(routes, parentPathLength)}</Body>
    </Wrapper>
  );
};
