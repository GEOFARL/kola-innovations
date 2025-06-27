import { basePersonalInfoSchema } from '../profile/base-personal-info-schema';

export const contactInfoSchema = basePersonalInfoSchema.pick({
  email: true,
  phone: true,
});
