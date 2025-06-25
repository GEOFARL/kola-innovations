export const APP_ROUTES = {
  ONBOARDING: '/onboarding',
  TALENTS: '/talents',
  PROFILE: '/profile',
  PROFILE_SETTINGS: '/profile/settings',
  PROFILE_VOUCH: '/profile/vouch',
  PROFESSIONALS: '/professionals',
  PROFESSIONAL_DETAILS: (id: string) => `/professionals/${id}`,
  TALENT_DETAILS: (id: string) => `/talents/${id}`,
};
