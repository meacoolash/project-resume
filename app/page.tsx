"use client"
import React from 'react';
import { Data } from './types/Data'
import { FilterType } from './types/FilterType'
import SectionComponent from './components/SectionComponent';
import FilterComponent from './components/FilterComponent';
import HeaderComponent from './components/HeaderComponent';


export default function Home() {

  const [filteredData, setFilteredData] = React.useState(Data);

  const filterData = (filter: FilterType) => {
    const newData = filter === FilterType.All
      ? Data
      : Data.filter((section) => section.filter?.includes(filter));
    setFilteredData(newData);
  };

  return (
    <main className='m-6'>
      
      
      <HeaderComponent />
     

      {/* FILTER */}
      <FilterComponent onFilterChange={filterData} />

      {/* FILTER DETAIL */}
      <div className='text-orange-500 mb-3 text-xs'>
        <p>Selected Sections: {filteredData.length}</p>
      </div>

      {/* SECTION */}
      <SectionComponent filteredData={filteredData} />

    </main>
  )
}
