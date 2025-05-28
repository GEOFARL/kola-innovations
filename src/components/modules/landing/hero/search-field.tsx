type Props = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

const SearchField: React.FC<Props> = ({ label, value, icon }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="small-1-md text-dark-600">{label}</p>
      <div className="flex justify-between items-center font-[600] text-dark-900 leading-[130%] text-[14px]">
        {value} {icon && <span>{icon}</span>}
      </div>
    </div>
  );
};
export default SearchField;
