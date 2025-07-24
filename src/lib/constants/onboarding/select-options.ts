export const provinces = [
  { value: 'quebec', labelKey: 'provinces.quebec' },
  { value: 'ontario', labelKey: 'provinces.ontario' },
  { value: 'alberta', labelKey: 'provinces.alberta' },
];

export const cities = [
  { value: 'montreal', labelKey: 'cities.montreal' },
  { value: 'toronto', labelKey: 'cities.toronto' },
  { value: 'calgary', labelKey: 'cities.calgary' },
];

export const ethnicities = [
  { value: 'asian', labelKey: 'ethnicities.asian' },
  { value: 'black', labelKey: 'ethnicities.black' },
  { value: 'hispanic', labelKey: 'ethnicities.hispanic' },
  { value: 'white', labelKey: 'ethnicities.white' },
  { value: 'mixed', labelKey: 'ethnicities.mixed' },
  { value: 'other', labelKey: 'ethnicities.other' },
];

export const orientations = [
  { value: 'heterosexual', labelKey: 'orientations.heterosexual' },
  { value: 'homosexual', labelKey: 'orientations.homosexual' },
  { value: 'bisexual', labelKey: 'orientations.bisexual' },
  { value: 'asexual', labelKey: 'orientations.asexual' },
  { value: 'other', labelKey: 'orientations.other' },
];

export const languages = [
  { value: 'english', label: 'English' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
];

export const workTypes = [
  { value: 'remote', labelKey: 'workTypes.remote' },
  { value: 'hybrid', labelKey: 'workTypes.hybrid' },
  { value: 'in-office', labelKey: 'workTypes.inOffice' },
];

export const primaryRoles = [
  { value: 'developer', labelKey: 'primaryRoles.developer' },
  { value: 'designer', labelKey: 'primaryRoles.designer' },
  { value: 'manager', labelKey: 'primaryRoles.manager' },
  { value: 'analyst', labelKey: 'primaryRoles.analyst' },
];

export const preferredRoles = [
  { value: 'frontend-developer', labelKey: 'preferredRoles.frontendDeveloper' },
  { value: 'backend-developer', labelKey: 'preferredRoles.backendDeveloper' },
  {
    value: 'fullstack-developer',
    labelKey: 'preferredRoles.fullstackDeveloper',
  },
  { value: 'designer', labelKey: 'preferredRoles.designer' },
  { value: 'product-manager', labelKey: 'preferredRoles.productManager' },
  { value: 'qa-engineer', labelKey: 'preferredRoles.qaEngineer' },
  { value: 'data-analyst', labelKey: 'preferredRoles.dataAnalyst' },
];

export const preferredJobTypes = [
  { value: 'full-time', labelKey: 'preferredJobTypes.fullTime' },
  { value: 'part-time', labelKey: 'preferredJobTypes.partTime' },
  { value: 'contract', labelKey: 'preferredJobTypes.contract' },
  { value: 'internship', labelKey: 'preferredJobTypes.internship' },
  { value: 'freelance', labelKey: 'preferredJobTypes.freelance' },
];

export const industryKeys = [
  'musicComposition',
  'instrumentProficiency',
  'guitars',
  'musicTheory',
  'pianos',
  'audioInterfaces',
  'musicProduction',
  'collaboration',
  'effectPedals',
  'performer',
  'musicDirector',
  'soundEngineer',
  'songwriter',
  'musicLibrarian',
] as const;
