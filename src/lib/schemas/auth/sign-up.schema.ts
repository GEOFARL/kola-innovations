import { z } from 'zod';

export const SignUpSchema = z
  .object({
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    phone: z
      .string()
      .min(10, 'Mobile Number must be valid')
      .regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Invalid phone number format'),
    email: z.string().email('Entered Email id is incorrect'),
    password: z
      .string()
      .min(
        8,
        '8 character minimum (A-Z, case sensitive, special characters allowed)',
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password entered do not match',
    path: ['confirmPassword'],
  });
