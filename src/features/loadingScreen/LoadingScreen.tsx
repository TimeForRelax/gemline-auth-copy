import styled from '@emotion/styled';
import { SpinnerClassic } from '@features/index';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LoadingScreen = () => {
  return (
    <Wrapper>
      <SpinnerClassic />
    </Wrapper>
  );
};
