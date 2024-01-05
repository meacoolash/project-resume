import React from 'react';
import { FilterType } from '../types/FilterType';

interface FilterComponentProps {
    onFilterChange: (filter: FilterType) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange }) => {

    const [activeFilter, setActiveFilter] = React.useState(FilterType.All);

    const handleFilterChange = (filter: FilterType) => {
        setActiveFilter(filter);
        onFilterChange(filter);
    };

    return (
        <div className="flex flex-wrap gap-2 mb-2">
            {Object.values(FilterType).map((filter) => (
                <button
                    key={filter}
                    className={`${activeFilter === filter
                        ? 'bg-green-800 text-white'
                        : 'bg-green-50 text-green-800 hover:bg-green-100'
                        } text-xs font-semibold px-2.5 py-0.5 rounded`}
                    onClick={() => handleFilterChange(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default FilterComponent;
