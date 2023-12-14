import styled from '@emotion/styled';
import { Box, InputLabel, TextField, Typography } from '@mui/material';
import { colorFetch, theme } from '@styles/index';
import React, { FC } from 'react';

interface UniversalInputProps {
  name: string;
  label: string;
  placeholder: string;
  rules: any;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  type: string;
  error: boolean;
  helperText: string | undefined;
}

const InputBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NotRequiredLabelBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled(InputLabel)`
  color: ${colorFetch('white_seashell')({ theme })};
  font-family: Nunito400;
  font-weight: 400;
  font-size: 16px;
  line-height: normal;
`;

const LabelNotReqDesc = styled(Typography)`
  color: ${colorFetch('dark_gray')({ theme })};
  font-family: Nunito400;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 4px;
    background: ${colorFetch('dark_trout_gray')({ theme })};
    color: ${colorFetch('white')({ theme })};
    &:not(.Mui-error) {
      &:hover {
        fieldset {
          border-color: ${colorFetch('light_pale_sky_gray')({ theme })};
        }
      }
    }
  }

  .Mui-focused {
    &:not(.Mui-error) {
      &:focus-within {
        fieldset {
          border-color: ${colorFetch('light_pale_sky_gray')({ theme })};
        }
      }
    }
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${colorFetch('mid_gray')({ theme })};
  }
`;

export const UniversalInput: FC<UniversalInputProps> = ({
  name,
  label,
  placeholder,
  rules,
  startAdornment,
  endAdornment,
  type,
  error,
  helperText,
}) => {
  const { required } = rules;

  return (
    <InputBox>
      <NotRequiredLabelBox>
        <Label htmlFor={name}>{label}</Label>
        {!!required && <LabelNotReqDesc>Необязательно</LabelNotReqDesc>}
      </NotRequiredLabelBox>
      <StyledTextField
        {...rules}
        placeholder={placeholder}
        type={type ? type : 'text'}
        InputProps={{
          endAdornment: endAdornment,
          startAdornment: startAdornment,
        }}
        error={error}
        helperText={helperText}
        id={name}
      />
    </InputBox>
  );
};
