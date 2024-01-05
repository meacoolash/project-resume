"use client"
import React from 'react';
import { Data } from './types/Data'
import { FilterType } from './types/FilterType'
import SectionLoopComponent from './components/section/SectionLoopComponent';
import FilterComponent from './components/FilterComponent';
import HeaderComponent from './components/header/HeaderComponent';


export default function Home() {

  const [filteredData, setFilteredData] = React.useState(Data);

  const filterData = (filter: FilterType) => {
    const newData = filter === FilterType.All
      ? Data
      : Data.filter((section) => section.filter?.includes(filter));
    setFilteredData(newData);
  };

  return (
    <main className='bg-background'>

      <HeaderComponent />



      
      <div className='sm:px-10'>
        <div className='py-2'>
          <FilterComponent onFilterChange={filterData} />
        </div>

        {/* FILTER DETAIL */}
        <div className='text-secondary mb-6 text-xs'>
          <p>Selected Sections: {filteredData.length}</p>
        </div>

        {/* SECTION */}
        <div className='flex items-center'>
          <SectionLoopComponent filteredData={filteredData} />
        </div>
      </div>



    </main>
  )
}
