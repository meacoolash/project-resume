"use client"
import { useEffect, useRef, useState } from 'react';
import { Data } from '@/app/_data/Data';
import { FilterType } from '@/app/_models/FilterType';
import { SectionType } from '@models/SectionType';
import { UseFilterReturnType } from '@models/UseFilterReturnType';

// TODO: Might be covered by unit tests

const useFilter = (): UseFilterReturnType => {
    const [filteredData, setFilteredData] = useState<SectionType[]>(Data);
    const [activeFilter, setActiveFilter] = useState<FilterType>(FilterType.All);

    const filterTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Clean Timer on Unmount
    useEffect(() => {
        return () => {
            if (filterTimeoutRef.current) {
                clearTimeout(filterTimeoutRef.current);
            }
        };
    }, []);


    const clearFilter = (): void => {
        onFilterChange(FilterType.All);
    };

    const onFilterChange = (filter: FilterType): void => {
        setFilteredData([]);
        setActiveFilter(filter);

        const newData = filter === FilterType.All
            ? Data
            : Data.filter((section) => section.filter?.includes(filter));

        filterTimeoutRef.current = setTimeout(() => {
            setFilteredData(newData);
        }, 100)
    };

    return { filteredData, activeFilter, clearFilter, onFilterChange };
};

export default useFilter;
