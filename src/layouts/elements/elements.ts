import styled from '@emotion/styled';
import { media } from '@styles/index';

import background1 from '@assets/backgrounds/bg_body_top.svg';
import background2 from '@assets/backgrounds/bg_body_left.svg';

export const Background = styled.div`
  background-color: #333640;
  position: relative;

  &:after {
    content: '';
    width: 340px;
    height: 102px;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 40px;
    background: url(${background1}) no-repeat center;
    background-size: cover;
  }

  &:before {
    content: '';
    width: 102px;
    height: 340px;
    display: inline-block;
    position: absolute;
    top: 70%;
    left: 0;
    transform: translateY(-70%);
    background: url(${background2}) no-repeat center;
    background-size: cover;
  }

  ${media.tablet} {
    &::after,
    &:before {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1440px;
  padding: 0 40px;

  ${media.tablet} {
    padding: 0 30px;
  }

  ${media.phone} {
    padding: 0 16px;
  }
`;

export const Body = styled.div`
  min-height: 100vh;

  ${media.tablet} {
    margin-left: 0;

    min-height: 100vh;
  }
`;
