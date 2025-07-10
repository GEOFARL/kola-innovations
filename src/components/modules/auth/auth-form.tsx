'use client';

import { cn } from '@/lib/cn';
import { PropsWithChildren, ReactNode } from 'react';
import { Toaster } from 'sonner';
import CheckWhite from '@/assets/icons/check-white.svg';

const AuthForm = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={cn(
        'py-8 pb-6 px-3 lg:p-8 w-full min-h-[420px] lg:min-h-auto',
        className,
      )}
    >
      <Toaster
        position="top-center"
        duration={4000}
        className="!z-10"
        visibleToasts={1}
        expand
        icons={{
          success: <CheckWhite />,
        }}
        toastOptions={{
          classNames: {
            success: 'bg-notification-success! text-dark-white! gap-3!',
            title: 'body-2-md',
          },
        }}
      />
      {children}
    </div>
  );
};

AuthForm.Header = ({
  title,
  description,
}: {
  title: string;
  description?: string | ReactNode;
}) => (
  <div className="mb-2 lg:mb-12 text-center">
    <h3 className="h4 text-dark-900 mb-2">{title}</h3>
    {description && (
      <div className="text-dark-700 font-[500] lg:font-normal text-[13px] lg:text-[14px] leading-[150%] lg:space-y-1">
        {typeof description === 'string' ? <p>{description}</p> : description}
      </div>
    )}
  </div>
);
AuthForm.Fields = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => (
  <div className={cn('space-y-2 lg:space-y-4', className)}>{children}</div>
);

AuthForm.Footer = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => (
  <div className={cn('flex flex-col items-center gap-2', className)}>
    {children}
  </div>
);

export default AuthForm;
