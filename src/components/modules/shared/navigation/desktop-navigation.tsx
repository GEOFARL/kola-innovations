import NavItem from '../nav-item';

type Props = {
  items: {
    label: string;
    hasDropdown: boolean;
  }[];
};

const DesktopNavigation: React.FC<Props> = ({ items }) => {
  return (
    <nav className="hidden lg:block" aria-label="Main navigation">
      <ul className="flex items-center gap-8">
        {items.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            hasDropdown={item.hasDropdown}
          />
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
