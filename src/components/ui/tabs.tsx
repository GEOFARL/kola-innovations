'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/cn';
import React from 'react';

type TabItem = {
  value: string;
  label: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  value: string;
  onValueChange: (val: string) => void;
  className?: string;
  rootClassName?: string;
  itemClassName?: string;
  layout?: 'horizontal' | 'vertical';
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  value,
  onValueChange,
  className,
  rootClassName,
  itemClassName,
  layout = 'horizontal',
}) => {
  return (
    <TabsPrimitive.Root
      value={value}
      onValueChange={onValueChange}
      className={rootClassName}
    >
      <TabsPrimitive.List
        className={cn(
          'flex items-center gap-4',
          layout === 'vertical' && 'flex-col items-start gap-0',
          layout === 'horizontal' && 'border-b border-dark-100',
          className,
        )}
      >
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            className={cn(
              'pb-3 px-4 transition-colors',
              'text-dark-600 hover:text-dark-900',
              'data-[state=active]:text-primary data-[state=active]:font-[600]',
              layout === 'vertical' &&
                'py-3 px-5 w-full small-1-md text-left data-[state=active]:border-r-primary border-r-[4px] border-r-transparent',
              layout === 'horizontal' &&
                'border-b-[1px] h6-md border-b-transparent data-[state=active]:border-b-primary',
              itemClassName,
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
