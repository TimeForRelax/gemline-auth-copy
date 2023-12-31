export enum GeneralView {
  REDIRECT = 'REDIRECT',
  AUTHENTICATION = 'AUTHENTICATION',
  LANDING = 'LANDING',
  ERROR = 'ERROR',
}

export enum AuthenticationView {
  AUTHENTICATION_LOGIN = 'AUTHENTICATION_LOGIN',
  AUTHENTICATION_REGISTRATION = 'AUTHENTICATION_REGISTRATION',
  AUTHENTICATION_FORGOT_PASSWORD = 'AUTHENTICATION_FORGOT_PASSWORD',
  AUTHENTICATION_RESET_PASSWORD = 'AUTHENTICATION_RESET_PASSWORD',
}

export enum LandingView {
  LANDING_HOMEPAGE = 'LANDING_HOMEPAGE',
  LANDING_ABOUT_US = 'LANDING_ABOUT_US',
  LANDING_INVESTORS = 'LANDING_INVESTORS',
  LANDING_PARTNERS = 'LANDING_PARTNERS',
  LANDING_BLOG = 'LANDING_BLOG',
}

export enum ErrorView {
  ERROR_404 = 'ERROR_404',
}
