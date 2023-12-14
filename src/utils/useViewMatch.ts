import { getPath, View } from '@routes/index';
import { matchPath, useLocation } from 'react-router-dom';

export const useViewMatch = () => {
  const location = useLocation();

  const matchView = (view: View) =>
    matchPath(
      {
        path: getPath(view as any),
        exact: true,
        strict: false,
      },
      location.pathname,
    );

  return matchView;
};
