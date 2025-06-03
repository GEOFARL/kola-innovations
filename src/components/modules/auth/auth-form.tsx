'use client';

import { cn } from '@/lib/cn';
import { PropsWithChildren, ReactNode } from 'react';

const AuthForm = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return <div className={cn('p-8 w-full', className)}>{children}</div>;
};

AuthForm.Header = ({
  title,
  description,
}: {
  title: string;
  description?: string | ReactNode;
}) => (
  <div className="mb-12 text-center">
    <h3 className="h4 text-dark-900 mb-2">{title}</h3>
    {description && (
      <div className="text-dark-700 small-1-rg space-y-1">
        {typeof description === 'string' ? <p>{description}</p> : description}
      </div>
    )}
  </div>
);
AuthForm.Fields = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => (
  <div className={cn('space-y-4', className)}>{children}</div>
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
