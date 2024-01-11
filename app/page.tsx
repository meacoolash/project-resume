"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Data } from './data/Data'
import { FilterType } from './types/FilterType'
import SectionLoopComponent from './components/section/SectionLoopComponent';
import HeaderComponent from './components/header/HeaderComponent';
import HeroComponent from './components/HeroComponent';
import ScrollButtonComponent from './components/ui/ScrollButtonComponent';
import ActiveFilterButton from './components/filter/ActiveFilterButton';

export default function Home() {
  const [filteredData, setFilteredData] = useState(Data);
  const [activeFilter, setActiveFilter] = useState(FilterType.All);

  const [showNav, setShowNav] = useState(false);
  const heroRef = useRef(null);

  /* FILTER DATA POC */
  const filterData = (filter: FilterType) => {
    setFilteredData([]);
    const newData = filter === FilterType.All
      ? Data
      : Data.filter((section) => section.filter?.includes(filter));
    setTimeout(() => {
      setFilteredData(newData);
    }, 100)
  };

  const clearFilter = () => {
    setFilteredData(Data);
    setActiveFilter(FilterType.All);
  }

  const filterAction = () => {
    if (activeFilter === FilterType.All) {
      scrollToSection()
    } else {
      setTimeout(() => {
        clearFilter();
      }, 200)
    }
  }

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
    filterData(filter);
  };

  useEffect(() => {
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
    <main className='min-h-full bg-gradient-to-br from-background-from via-background-via to-background-to'>

      {/* HERO */}
      <div ref={heroRef}>
        <HeroComponent scrollToSection={scrollToSection} />
      </div>

      {/* STICKY CONTENT NAV */}
      {showNav && (
        <div className='fixed bg-primary/60 top-0 w-full h-14 border-b border-b-background-via z-10'>
          <HeaderComponent />
        </div>
      )}

      {/* CONTENT */}
      <div ref={scrollRef} className='pt-16 min-h-screen sm:px-10 w-full flex flex-col items-center'>

        {/* FILTER */}
        <div className='w-1/2 flex justify-center align-middle font-monsterrat'>
          <div className='text-2xl font-semibold mr-2'>Filter</div>
          <div className="flex flex-wrap gap-2">
            {Object.values(FilterType).map((filter) => (
              <button
                key={filter}
                className={`${activeFilter === filter
                  ? 'bg-green'
                  : 'bg-accent/80 text-purple-950 hover:bg-accent/40'
                  } px-2.5 py-0.5 rounded`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {showNav && (
            <ActiveFilterButton count={filteredData.length} activeFilter={activeFilter} action={filterAction} />
          )}
        </div>


        {/* SECTION LOOP */}
        <div className='lg:w-4/5 mt-16'>
          <SectionLoopComponent filteredData={filteredData} />
        </div>

        <ScrollButtonComponent scrollToSection={scrollToSection} type='footer' />
      </div>

    </main>
  )
}
