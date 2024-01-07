"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Data } from './types/Data'
import { FilterType } from './types/FilterType'
import SectionLoopComponent from './components/section/SectionLoopComponent';
import FilterComponent from './components/FilterComponent';
import HeaderComponent from './components/header/HeaderComponent';


export default function Home() {

  const [filteredData, setFilteredData] = React.useState(Data);
  const [showNav, setShowNav] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the hero section is not intersecting (visible), show the nav
        setShowNav(!entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0, // trigger callback when hero is completely out of view
      }
    );

    const currentHeroRef = heroRef.current;

    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);


  const filterData = (filter: FilterType) => {
    const newData = filter === FilterType.All
      ? Data
      : Data.filter((section) => section.filter?.includes(filter));
    setFilteredData(newData);
  };

  const myRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <main className='bg-gradient-to-br from-background-from via-background-via to-background-to'>

      <div className="isolate overflow-hidden relative">
        <div
          className="grid relative min-h-screen place-items-center place-content-center gap-16 before:absolute before:h-3/4 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-red-300/70 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-blue-300/50 after:animate-spin-slow after:-z-10"
        >
          <div className='text-center'>
            <div className='text-2xl font-monsterrat'>
              Finding balance between perfection and progress.
            </div>
          </div>

        </div>
        <div className='absolute top-0 w-full'>
          <HeaderComponent />
        </div>
        <div ref={heroRef} className="w-12 h-12 sm:w-8 sm:h-8 absolute bottom-10 left-1/2">
          <button className='-translate-x-8' onClick={scrollToSection}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <div className='sm:px-10 mt-6 w-full flex flex-col items-center'>
        {/* 
        <div className='py-2'>
          <FilterComponent onFilterChange={filterData} />
        </div>
        */}

        {/* FILTER DETAIL
        <div className='mb-6 text-xs'>
          <p>Selected Sections: {filteredData.length}</p>
        </div>
        */}



        {/* SECTION */}
        <div ref={myRef} />
        <div className='lg:w-4/5 mt-16'>
          {showNav}
          <SectionLoopComponent filteredData={filteredData} />
        </div>

        <div className="w-12 h-12 mb-12 flex justify-center items-center hover:bg-accent/10 bg-accent/5 shadow-accent shadow-lg transition-all duration-500 hover:shadow-sm hover:shadow-accent rounded-full ml-auto mr-3 relative">
          <button onClick={scrollToSection} className="flex justify-center items-center w-full h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 transform rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>


      </div>


      {showNav && (
        <div className='bg-primary/60 fixed top-0 w-full h-14 border-b border-b-background-via'>
          <HeaderComponent />
        </div>
      )}


    </main>
  )
}
