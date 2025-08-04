'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSignUp } from '@clerk/nextjs';
import Button from '@/components/ui/button/button';
import { toast } from 'sonner';
import { APP_ROUTES } from '@/lib/constants/routing/routes';

const VerifyEmailPage: React.FC = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const onVerify = async () => {
    if (!isLoaded) return;
    setLoading(true);

    try {
      const result = await signUp.attemptEmailAddressVerification({ code });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        toast.success('Email verified successfully!');
        router.push(APP_ROUTES.ONBOARDING);
      } else {
        toast.error('Verification incomplete, please try again.');
      }
    } catch (err: any) {
      const message =
        err?.errors?.[0]?.longMessage ?? err?.message ?? 'Verification failed';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h1 className="text-xl font-semibold mb-4">Verify your email</h1>
        <p className="text-gray-600 mb-6">
          We sent you a verification code. Enter it below to complete your
          sign-up.
        </p>
        <input
          type="text"
          placeholder="Enter verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <Button
          onClick={onVerify}
          disabled={loading || !code}
          className="w-full"
        >
          {loading ? 'Verifying...' : 'Verify Email'}
        </Button>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
