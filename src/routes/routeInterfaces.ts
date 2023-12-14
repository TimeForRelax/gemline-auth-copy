import { AuthenticationView, ErrorView, GeneralView, LandingView } from '@enums/index';

export const View = {
  ...GeneralView,
  ...AuthenticationView,
  ...LandingView,
  ...ErrorView,
};

export type View = typeof View;

export type CombinedRoutes = {
  [key in keyof View]: any;
};

export type GeneralRoutes = {
  [key in keyof GeneralView]: any;
};

export type AuthenticationRoutes = {
  [key in AuthenticationView]: any;
};

export type UserRoutes = {
  [key in LandingView]: any;
};

export type ErrorRoutes = {
  [key in ErrorView]: any;
};
