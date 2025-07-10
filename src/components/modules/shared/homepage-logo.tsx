'use client';

import Logo from '@/assets/icons/logo.svg';
import { Link } from '@/i18n/navigation';

const HomepageLogo: React.FC = () => (
  <Link href="/" aria-label="Homepage">
    <Logo className="scale-80 -mb-1 lg:mb-0 lg:scale-100" />
  </Link>
);

export default HomepageLogo;
