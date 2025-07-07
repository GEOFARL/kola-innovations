import { cn } from '@/lib/cn';
import { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

const MaxWidthWrapper: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-[1504px] px-3 sm:px-6 lg:px-8',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
