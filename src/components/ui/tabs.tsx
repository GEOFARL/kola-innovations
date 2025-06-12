'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/cn';

type TabItem = {
  value: string;
  label: string;
};

type TabsProps = {
  tabs: TabItem[];
  value: string;
  onValueChange: (val: string) => void;
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onValueChange,
  className,
}) => {
  return (
    <TabsPrimitive.Root value={value} onValueChange={onValueChange}>
      <TabsPrimitive.List
        className={cn(
          'flex items-center border-b border-dark-100 gap-4',
          className,
        )}
      >
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            className={cn(
              'pb-3 px-4 h6-md transition-colors border-b-[1px] border-b-transparent',
              'text-dark-700 hover:text-dark-900',
              'data-[state=active]:text-primary data-[state=active]:font-[600] data-[state=active]:border-b-primary',
            )}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
    </TabsPrimitive.Root>
  );
};

export default Tabs;
