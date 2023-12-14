import styled from '@emotion/styled';
import { Link } from '@mui/material';
import { getPath } from '@routes/index';
import { colorFetch, theme } from '@styles/index';
import { FC } from 'react';

interface LinkToProps {
  text: string;
  view: any;
  className?: string | undefined;
}

export const StyledLink = styled(Link)`
  display: inline-block;
  color: ${colorFetch('green')({ theme })};
  font-family: Nunito400;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;

  &.login_link {
    margin-bottom: 30px;
  }
`;

export const LinkTo: FC<LinkToProps> = ({ text, view, className }) => {
  return (
    <StyledLink href={getPath(view as any)} underline="none" className={className || ''}>
      {text}
    </StyledLink>
  );
};
