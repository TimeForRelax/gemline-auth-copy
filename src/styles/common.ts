import styled from '@emotion/styled';
import { media } from './media';

export const AuthenticationWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  ${media.phone} {
    padding: 0 20px;
  }
`;
