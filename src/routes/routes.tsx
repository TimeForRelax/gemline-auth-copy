import {
  AboutUs,
  Blog,
  Error404,
  ForgotPassword,
  Homepage,
  Investors,
  Login,
  Partners,
  Registration,
  ResetPassword,
} from '@containers/index';
import { AuthenticationLayout, ErrorsLayout, LandingLayout } from '@layouts/index';
import { LandingSwitcher } from '@routes/LandingSwitcher';
import { PATHS } from '@routes/paths';

export const routes = [
  {
    path: PATHS.AUTHENTICATION,
    render: ({ ...props }: any) => <AuthenticationLayout {...props} />,
    routes: [
      {
        path: PATHS.AUTHENTICATION_LOGIN,
        component: <Login />,
      },
      {
        path: PATHS.AUTHENTICATION_REGISTRATION,
        component: <Registration />,
      },
      {
        path: PATHS.AUTHENTICATION_FORGOT_PASSWORD,
        component: <ForgotPassword />,
      },
      {
        path: PATHS.AUTHENTICATION_RESET_PASSWORD,
        component: <ResetPassword />,
      },
    ],
  },
  {
    path: PATHS.LANDING,
    render: ({ ...props }: any) => <LandingLayout {...props} />,
    routes: [
      {
        path: PATHS.LANDING_HOMEPAGE,
        component: <Homepage />,
      },
      {
        path: PATHS.LANDING_ABOUT_US,
        component: <AboutUs />,
      },
      {
        path: PATHS.LANDING_INVESTORS,
        component: <Investors />,
      },
      {
        path: PATHS.LANDING_PARTNERS,
        component: <Partners />,
      },
      {
        path: PATHS.LANDING_BLOG,
        component: <Blog />,
      },
    ],
  },
  {
    path: PATHS.ERROR,
    render: ({ ...props }: any) => <ErrorsLayout {...props} />,
    routes: [{ path: PATHS.ERROR_404, component: <Error404 /> }],
  },
  {
    path: PATHS.REDIRECT,
    component: <LandingSwitcher />,
  },
];
