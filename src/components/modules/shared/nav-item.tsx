import ArrowDown from '@/assets/icons/arrow-down.svg';

type Props = {
  label: string;
  hasDropdown?: boolean;
};

const NavItem: React.FC<Props> = ({ label, hasDropdown = false }) => {
  return (
    <li>
      <button
        type="button"
        className="flex items-center gap-2 small-1 text-dark-900 hover:text-dark-700 transition"
        aria-haspopup={hasDropdown ? 'true' : undefined}
        aria-expanded={hasDropdown ? 'false' : undefined}
      >
        {label}
        {hasDropdown && <ArrowDown />}
      </button>
    </li>
  );
};

export default NavItem;
