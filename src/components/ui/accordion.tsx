'use client';

import { cn } from '@/lib/cn';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export type AccordionItem = {
  value: string;
  title: string;
  content: React.ReactNode;
};

interface Props {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  className?: string;
  itemClassName?: string;
  contentClassName?: string;
  triggerClassName?: string;
}

const Accordion: React.FC<Props> = ({
  items,
  className,
  itemClassName,
  triggerClassName,
  contentClassName,
  type = 'single',
  collapsible = true,
}) => {
  return (
    <RadixAccordion.Root
      type={type}
      collapsible={collapsible}
      className={cn('w-full space-y-4', className)}
    >
      {items.map(({ value, title, content }) => (
        <RadixAccordion.Item
          key={value}
          value={value}
          className={cn(
            'border border-dark-200 rounded-md overflow-hidden',
            itemClassName,
          )}
        >
          <RadixAccordion.Header>
            <RadixAccordion.Trigger
              className={cn(
                'w-full flex items-center justify-between px-4 py-3 text-left text-dark-900 bg-dark-50 hover:bg-dark-100 radix-state-open:bg-dark-100 radix-state-open:text-primary transition',
                triggerClassName,
              )}
            >
              <span>{title}</span>
              <ChevronDown
                className="w-5 h-5 transform radix-state-open:rotate-180"
                aria-hidden
              />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content
            className={cn(
              'px-4 pt-0 pb-3 text-dark-700 overflow-hidden radix-state-open:animate-accordion-down radix-state-closed:animate-accordion-up',
              contentClassName,
            )}
          >
            {content}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
};

export default Accordion;
