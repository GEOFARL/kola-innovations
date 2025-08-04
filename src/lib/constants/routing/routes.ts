export const APP_ROUTES = {
  ONBOARDING: '/onboarding',
  SETTINGS: '/settings',
  TALENTS: '/talents',
  PROFILE: '/profile',
  PROFILE_SETTINGS: '/profile/settings',
  PROFILE_VOUCH: '/profile/vouch',
  PROFESSIONALS: '/professionals',
  VERIFY_EMAIL: '/verify-email',
  PROFESSIONAL_DETAILS: (id: string) => `/professionals/${id}`,
  TALENT_DETAILS: (id: string) => `/talents/${id}`,
};
