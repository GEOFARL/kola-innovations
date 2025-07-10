'use client';

import { Link } from '@/i18n/navigation';
import { normalizePathname } from '@/lib/utils/normalize-pathname';
import { usePathname } from 'next/navigation';

type Props = {
  icon: React.ReactNode;
  label: string;
  href?: string;
  notActive?: boolean;
};

const SidebarItem: React.FC<Props> = ({ icon, label, href, notActive }) => {
  const pathname = usePathname();
  const normalizedPath = normalizePathname(pathname);
  const isActive =
    href &&
    !notActive &&
    (normalizedPath === href || normalizedPath.startsWith(`${href}/`));
  const className = `flex py-3 px-5 items-center gap-3 small-1-md w-full transition ${
    isActive
      ? 'bg-primary-100 text-primary lg:border-r-[4px] border-primary font-semibold!'
      : 'text-dark-700 hover:bg-dark-100'
  }`;

  const iconClassName = `${isActive ? 'text-primary' : ''}`;

  const content = (
    <>
      <span className={iconClassName}>{icon}</span>
      <span className="max-w-[130px] break-words leading-snug text-left">
        {label}
      </span>
    </>
  );

  return href ? (
    <Link href={href} className={className}>
      {content}
    </Link>
  ) : (
    <button className={className}>{content}</button>
  );
};

export default SidebarItem;
