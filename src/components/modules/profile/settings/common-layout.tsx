import Card from '@/components/ui/card';
import { cn } from '@/lib/cn';
import { PropsWithChildren } from 'react';

type Props = {
  title: string;
  className?: string;
} & PropsWithChildren;

const CommonLayout: React.FC<Props> = ({ title, children, className }) => {
  return (
    <section className="space-y-4 lg:space-y-6">
      <h2 className="body-1 text-[14px]! lg:text-[18px]! lg:text-center text-dark-900">
        {title}
      </h2>

      <Card
        className={cn(
          'grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3 lg:gap-y-6 px-3 py-6 lg:p-6 rounded-[6px] lg:rounded-[16px]',
          className,
        )}
      >
        {children}
      </Card>
    </section>
  );
};

export default CommonLayout;
