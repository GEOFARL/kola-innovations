'use client';

import { cn } from '@/lib/cn';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  className?: string;
  showClose?: boolean;
  ariaTitle?: string;
};

const Modal: React.FC<Props> = ({
  open,
  onOpenChange,
  children,
  className = '',
  showClose = true,
  ariaTitle = 'Dialog',
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-101" />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-101 translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white shadow-xl focus:outline-none',
            className,
          )}
        >
          <Dialog.Title className="sr-only">{ariaTitle}</Dialog.Title>

          {showClose && (
            <Dialog.Close className="absolute top-[25px] lg:top-4 right-3 lg:right-4 text-gray-500 hover:text-black">
              <div className="h-5 w-5 flex items-center justify-center rounded-full border-[1.5px] border-[#292D32]">
                <X className="w-3 h-3 text-[#292D32]" />
              </div>
            </Dialog.Close>
          )}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
