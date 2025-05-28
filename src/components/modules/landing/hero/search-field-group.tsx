import ArrowDown from '@/assets/icons/arrow-down.svg';
import SearchField from './search-field';

const SearchFieldGroup: React.FC = () => {
  return (
    <div className="flex gap-5 items-center flex-1">
      <div className="max-w-[164px] w-full">
        <SearchField
          label="Job Category"
          value="Musician"
          icon={<ArrowDown />}
        />
      </div>

      <div className="h-[48px] w-[1px] shrink-0 bg-dark-300" />

      <div className="flex-1">
        <SearchField
          label="Keywords or Title"
          value="Composer, Audio Engineer"
        />
      </div>
    </div>
  );
};

export default SearchFieldGroup;
