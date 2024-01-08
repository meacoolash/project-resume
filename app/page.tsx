"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Data } from './data/Data'
import { FilterType } from './types/FilterType'
import SectionLoopComponent from './components/section/SectionLoopComponent';
import FilterComponent from './components/filter/FilterComponent';
import HeaderComponent from './components/header/HeaderComponent';
import HeroComponent from './components/HeroComponent';
import ScrollButtonComponent from './components/ui/ScrollButtonComponent';

export default function Home() {

  /* FILTER DATA IS COMMENTED OUT AS A POC */
  const [filteredData, setFilteredData] = React.useState(Data);
  const [showNav, setShowNav] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    /* FILTER DATA POC */
    const filterData = (filter: FilterType) => {
      const newData = filter === FilterType.All
        ? Data
        : Data.filter((section) => section.filter?.includes(filter));
      setFilteredData(newData);
    };
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the hero section is not intersecting (visible), show the nav
        setShowNav(!entry.isIntersecting);
      },
      {
        root: null,
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

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollToSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className='bg-gradient-to-br from-background-from via-background-via to-background-to'>

      {/* HERO */}
      <div ref={heroRef} >
        <HeroComponent scrollToSection={scrollToSection} />
      </div>

      {/* STICKY CONTENT NAV */}
      {showNav && (
        <div className='fixed bg-primary/60 top-0 w-full h-14 border-b border-b-background-via z-10'>
          <HeaderComponent />
        </div>
      )}

      {/* CONTENT */}
      <div ref={scrollRef} className='sm:px-10 mt-6 w-full flex flex-col items-center'>
        {/* FILTER POC 
        <div className='py-2'>
          <FilterComponent onFilterChange={filterData} />
          <p>Selected Sections: {filteredData.length}</p>
        </div>
        */}

        {/* SECTION LOOP */}
        <div className='lg:w-4/5 mt-16'>
          <SectionLoopComponent filteredData={filteredData} />
        </div>

        <ScrollButtonComponent scrollToSection={scrollToSection} type='footer' />
      </div>

    </main>
  )
}
