import { View } from '@routes/index';
import { VIEW_PATH_PAIRS } from '@routes/paths';
import { useEffect, useState } from 'react';
import { matchRoutes, useLocation } from 'react-router-dom';

export const useCurrentView = () => {
  const [currentView, setCurrentView] = useState<(typeof View)[keyof typeof View]>(View.REDIRECT);
  const { pathname } = useLocation();

  useEffect(() => {
    const index = VIEW_PATH_PAIRS.findIndex(({ path }) => {
      const routes = matchRoutes([{ path, exact: true, strict: false }], pathname);

      return !!routes?.length && !!routes[0].pathname;
    });
    index !== -1 ? setCurrentView(VIEW_PATH_PAIRS[index].view) : setCurrentView(View.ERROR_404);
  }, [pathname]);

  return {
    currentView,
  };
};
