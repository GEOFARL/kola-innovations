type Props = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

const SearchField: React.FC<Props> = ({ label, value, icon }) => {
  return (
    <div className="flex flex-col gap-1 sm:gap-2">
      <p className="font-[600] sm:font-medium text-[13px] sm:text-[14px] leading-[150%] text-dark-600">
        {label}
      </p>
      <div className="flex gap-3 sm:gap-0 sm:justify-between items-center font-[600] text-dark-900 leading-[130%] text-nowrap sm:text-wrap text-[13px] sm:text-[14px]">
        {value} {icon && <span>{icon}</span>}
      </div>
    </div>
  );
};
export default SearchField;
