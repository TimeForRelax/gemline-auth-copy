import { FormsHeading, FormsSubHeading, FormsSubmitButton, Logo } from '@components/index';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { FC } from 'react';

export const SuccessScreenBox = styled(Box)`
  width: 100%;
  max-width: 535px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DescBtnBox = styled(Box)`
  width: 100%;
  max-width: 430px;
`;

interface SuccessScreenProps {
  heading: string;
  subHeading: string;
  btnText: string;
  onClick: () => void;
}

export const SuccessScreen: FC<SuccessScreenProps> = ({ heading, subHeading, btnText, onClick }) => {
  return (
    <SuccessScreenBox>
      <Logo />
      <FormsHeading>{heading}</FormsHeading>
      <DescBtnBox>
        <FormsSubHeading>{subHeading}</FormsSubHeading>
        <FormsSubmitButton variant={'contained'} onClick={onClick}>
          {btnText}
        </FormsSubmitButton>
      </DescBtnBox>
    </SuccessScreenBox>
  );
};
