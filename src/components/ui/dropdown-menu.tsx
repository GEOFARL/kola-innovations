'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/cn';
import { ReactNode } from 'react';

type DropdownItem = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
};

type Props = {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: 'start' | 'center' | 'end';
};

const DropdownMenu: React.FC<Props> = ({ trigger, items, align = 'end' }) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          align={align}
          sideOffset={8}
          className="rounded-xl border border-dark-100 bg-white shadow-lg p-1 w-56 z-50"
        >
          {items.map((item, index) => (
            <DropdownMenuPrimitive.Item
              key={index}
              onSelect={(e) => {
                e.preventDefault();
                item.onClick?.();
              }}
              className={cn(
                'flex items-center gap-3 px-3 py-[9.5px] rounded-md cursor-pointer text-dark-700 small-1-md',
                'hover:bg-dark-100 focus:outline-none',
              )}
            >
              <span className="w-5 h-5">{item.icon}</span>
              <span>{item.label}</span>
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

export default DropdownMenu;
