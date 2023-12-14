import { FC } from 'react';
import { UniversalInput } from '../../common/universalInput/UniversalInput';

interface InputProps {
  rules: any;
  type: string;
  name: string;
  label: string;
  placeholder: string;
  error: boolean;
  helperText: string | undefined;
}

export const Input: FC<InputProps> = ({ ...props }) => {
  return <UniversalInput {...props} />;
};
