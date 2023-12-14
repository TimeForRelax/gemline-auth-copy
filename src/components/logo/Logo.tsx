import { FC } from 'react';
import styled from '@emotion/styled';

import { ReactComponent as GemLineLogo } from '@assets/images/common/logo/colored_logo.svg';

export const StyledGemLineLogo = styled(GemLineLogo)`
  display: flex;
  width: 255px;
  height: 90px;
  flex-shrink: 0;
  margin: 0 auto 30px auto;
`;

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return <StyledGemLineLogo />;
};
