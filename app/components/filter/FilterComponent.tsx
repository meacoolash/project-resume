import React from 'react';
import { FilterType } from '../../types/FilterType';

interface FilterComponentProps {
    onFilterChange: (filter: FilterType) => void;

}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange }) => {

    const [activeFilter, setActiveFilter] = React.useState(FilterType.All);

    return (
      <></>
    );
};

export default FilterComponent;
