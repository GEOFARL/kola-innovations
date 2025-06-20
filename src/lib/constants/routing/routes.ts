export const APP_ROUTES = {
  ONBOARDING: '/onboarding',
  TALENTS: '/talents',
  PROFESSIONALS: '/professionals',
  PROFESSIONAL_DETAILS: (id: string) => `/professionals/${id}`,
  TALENT_DETAILS: (id: string) => `/talents/${id}`,
};
