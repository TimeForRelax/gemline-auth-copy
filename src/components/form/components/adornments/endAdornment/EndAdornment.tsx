import styled from '@emotion/styled';
import { IconButton, InputAdornment } from '@mui/material';
import { FC, ReactNode } from 'react';

const StyledIconButton = styled(IconButton)`
  padding: 0;
  width: 30px;
  height: 30px;
  margin-right: 0;
`;

interface AdornmentProps {
  state: boolean;
  handleClickIcon: () => void;
  icon1: ReactNode;
  icon2: ReactNode;
}

export const EndAdornment: FC<AdornmentProps> = ({ state, handleClickIcon, icon1, icon2 }) => {
  return (
    <InputAdornment position="end">
      <StyledIconButton aria-label="toggle password visibility" onClick={handleClickIcon} edge="end">
        {state ? icon1 : icon2}
      </StyledIconButton>
    </InputAdornment>
  );
};
