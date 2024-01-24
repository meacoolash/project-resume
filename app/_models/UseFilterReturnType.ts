import { FilterType } from "./FilterType";
import { SectionType } from "./SectionType";

export interface UseFilterReturnType {
    filteredData: SectionType[];
    activeFilter: FilterType;
    clearFilter: () => void;
    onFilterChange: (filter: FilterType) => void;
  };
  
