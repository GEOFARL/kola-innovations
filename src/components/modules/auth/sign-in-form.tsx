import Button from '@/components/ui/button/button';
import { SignInSchema } from '@/lib/schemas/auth/sign-in.schema';
import { SignInFormData } from '@/lib/types/auth/sign-in';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import AuthForm from './auth-form';
import FormField from '@/components/ui/form-field';

const SignInForm: React.FC = () => {
  const methods = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <AuthForm className="flex flex-col">
        <AuthForm.Header
          title="Let’s Sign in!"
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
              placeholder="Enter your password"
              required
            />
            <Button
              type="button"
              className="ml-auto"
              variant="text-link"
              color="black"
            >
              Forgot Password?
            </Button>
          </AuthForm.Fields>

          <AuthForm.Footer>
            <Button className="w-full" color="black" size="lg" type="submit">
              Login
            </Button>
            <div className="flex items-center small-1-rg text-dark-700">
              Don’t have an account?{' '}
              <Button
                variant="text-link"
                onClick={() => console.log('Navigate to Sign Up')}
                className="pl-1"
                type="button"
              >
                Sign Up
              </Button>
            </div>
          </AuthForm.Footer>
        </form>
      </AuthForm>
    </FormProvider>
  );
};

export default SignInForm;
