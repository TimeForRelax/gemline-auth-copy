import { FC, ReactNode } from 'react';
import { useRedirectTo404Error } from './utils';

interface NotFoundHandlerProps {
  children: ReactNode;
}

export const NotFoundHandler: FC<NotFoundHandlerProps> = ({ children }) => {
  // CHECK THE LOGIC INSIDE
  useRedirectTo404Error();

  return <>{children}</>;
};
