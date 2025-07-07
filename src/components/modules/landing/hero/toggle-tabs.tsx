type Tab = {
  label: string;
  active?: boolean;
};

type Props = {
  tabs: Tab[];
};

const ToggleTabs: React.FC<Props> = ({ tabs }) => {
  return (
    <div className="p-0 justify-center sm:justify-start sm:py-3 sm:px-4 flex items-center gap-1 sm:gap-3">
      {tabs.map((tab) => (
        <div
          key={tab.label}
          className={`small-1-md py-[5px] px-[15px] rounded-full border ${
            tab.active
              ? 'bg-primary text-dark-white border-transparent'
              : 'bg-transparent text-dark-700 border-dark-400'
          }`}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default ToggleTabs;
