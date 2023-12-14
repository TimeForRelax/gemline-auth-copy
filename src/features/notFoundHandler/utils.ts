import { getPath, View } from '@routes/index';
import { useCurrentView } from '@utils/index';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useRedirectTo404Error = () => {
  // history RRD v6+
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // VEIW of current page
  const { currentView } = useCurrentView();

  // block of code which redirecting to the error 404 if user trying go to wrong URL
  useEffect(() => {
    if (currentView === View.ERROR_404 && pathname !== getPath(View.ERROR_404)) {
      navigate(queryString.stringifyUrl({ url: getPath(View.ERROR_404) }), { replace: true });
    }
  }, [currentView]);
};
