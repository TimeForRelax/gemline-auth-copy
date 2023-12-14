import { LoadingScreen } from '@features/index';
import { getPath, View } from '@routes/index';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LandingSwitcherProps {}

export const LandingSwitcher: FC<LandingSwitcherProps> = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (type !== UserType.NONE) {
  //     switch (type) {
  //       case UserType.USER:
  //         navigate.push();
  //         break;
  //       case UserType.ADMIN:
  //         navigate.push();
  //         break;
  //       default:
  //         navigate.push();
  //     }
  //   }
  // }, [type]);

  useEffect(() => {
    setTimeout(() => {
      navigate(getPath(View.LANDING_HOMEPAGE));
    }, 1000);
  }, []);

  return <LoadingScreen />;
};
