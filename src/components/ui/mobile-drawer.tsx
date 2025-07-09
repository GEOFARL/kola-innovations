'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { ReactNode } from 'react';
import Button from '@/components/ui/button/button';
import BurgerIcon from '@/assets/icons/burger.svg';
import CloseIcon from '@/assets/icons/x.svg';

type Props = {
  children: ReactNode;
  trigger?: (props: { onClick: () => void }) => ReactNode;
  navElement?: ReactNode;
  titleId?: string;
};

const MobileDrawer: React.FC<Props> = ({
  children,
  trigger,
  navElement,
  titleId = 'mobile-drawer-title',
}) => {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [open]);

  return (
    <>
      {trigger ? (
        trigger({ onClick: () => setOpen(true) })
      ) : (
        <Button
          iconOnly
          iconCircle
          size="sm"
          variant="secondary"
          color="black"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          <BurgerIcon />
        </Button>
      )}

      <div
        ref={drawerRef}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={cn(
          'fixed top-0 left-0 bottom-0 w-full z-50 bg-white shadow-lg outline-none',
          'transform transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="py-[10px] px-3 flex gap-3 justify-between border-b-[1.5px] border-dark-100">
          <Button
            iconOnly
            iconCircle
            size="sm"
            variant="secondary"
            color="black"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </Button>
          {navElement}
        </div>

        <div className="overflow-y-auto h-[calc(100%-55px)]">{children}</div>
      </div>
    </>
  );
};

export default MobileDrawer;
