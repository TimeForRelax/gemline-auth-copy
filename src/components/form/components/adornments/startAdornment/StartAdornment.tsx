import { InputAdornment } from '@mui/material';
import { FC } from 'react';

interface StartAdornmentProps {}

export const StartAdornment: FC<StartAdornmentProps> = () => {
  return (
    <InputAdornment position="end">
      {/* <StyledIconButton
        aria-label="toggle password visibility"
        onClick={handleClickIcon}
        edge="end"
      >
        {show ? <Hide /> : <Show />}
      </StyledIconButton> */}
    </InputAdornment>
  );
};
