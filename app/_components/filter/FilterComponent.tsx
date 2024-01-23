import { FilterType } from "@models/FilterType";

interface FilterComponentProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className='flex justify-center align-middle font-monsterrat text-sm w-1/2 pt-16'>
      <div className='text-2xl font-semibold mr-2'>Filter</div>
      <div className="flex flex-wrap gap-2">
        {Object.values(FilterType).map((filter) => (
          <button
            key={filter}
            className={`${activeFilter === filter
              ? 'bg-green'
              : 'bg-accent/80 text-purple-950 hover:bg-accent/40'
              } px-2.5 py-0.5 rounded`}
            onClick={() => onFilterChange(filter)}
            aria-label="Filter"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
