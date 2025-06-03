'use client';

import Button from '@/components/ui/button/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import AuthForm from './auth-form';
import FormField from '@/components/ui/form-field';
import { SignUpSchema } from '@/lib/schemas/auth/sign-up.schema';
import { useAuthModalStore } from '@/lib/stores/auth/auth-modal-store';
import { SignUpFormData } from '@/lib/types/auth/sign-up';

const SignUpForm: React.FC = () => {
  const { setView } = useAuthModalStore();

  const methods = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log('SIGN UP DATA:', data);
  });

  return (
    <FormProvider {...methods}>
      <AuthForm className="flex flex-col">
        <AuthForm.Header
          title="Welcome !"
          description={
            <>
              <p>Discover the benefits of joining the platform</p>
              <p className="-mt-[4px]">Sign up now!</p>
            </>
          }
        />

        <form onSubmit={onSubmit} className="space-y-4 flex-1 flex flex-col">
          <AuthForm.Fields className="flex-1">
            <FormField
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
              required
            />
            <FormField
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
              required
            />
            <FormField
              name="mobile"
              label="Mobile Number"
              placeholder="(000) 000-0000"
              type="tel"
            />
            <FormField
              name="email"
              label="Email Address"
              type="email"
              placeholder="example30@gmail.com"
              required
            />
            <FormField
              name="password"
              label="Password"
              type="password"
              placeholder="Create a password"
              required
            />
            <FormField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Repeat your password"
              required
            />
          </AuthForm.Fields>

          <AuthForm.Footer>
            <Button className="w-full" color="black" size="lg" type="submit">
              Sign up
            </Button>
            <div className="flex items-center small-1-rg text-dark-700">
              Already have an account?{' '}
              <Button
                variant="text-link"
                onClick={() => setView('signIn')}
                className="pl-0"
                type="button"
              >
                Login
              </Button>
            </div>
          </AuthForm.Footer>
        </form>
      </AuthForm>
    </FormProvider>
  );
};

export default SignUpForm;
