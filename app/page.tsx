"use client"
import React, { useRef } from 'react';
import SectionLoopComponent from '@/app/_components/section/SectionLoopComponent';
import HeaderComponent from '@/app/_components/header/HeaderComponent';
import HeroComponent from '@/app/_components/hero/HeroComponent';
import ScrollButtonComponent from '@/app/_components/ui/ScrollButtonComponent';
import ActiveFilterButton from '@/app/_components/filter/ActiveFilterButton';
import FilterComponent from '@/app/_components/filter/FilterComponent';
import useFilter from '@hooks/useFilter';
import useObserver from '@hooks/useObserver';

export default function Home() {
  
  const { filteredData, activeFilter, clearFilter, onFilterChange } = useFilter();
  const heroRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const { showNav } = useObserver(heroRef);
 
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollToSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className='min-h-full bg-gradient-to-br from-background-from via-background-via to-background-to font-sans'>

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
      <div ref={scrollRef} className='min-h-screen sm:px-10 w-full flex flex-col sm:items-center'>

        {/* FILTER */}
        <div className='hidden md:flex justify-center'>
          <FilterComponent activeFilter={activeFilter} onFilterChange={onFilterChange} />
          {/* ACTIVE FILTER BUTTON */}
          {showNav && (
            <ActiveFilterButton activeFilter={activeFilter} action={clearFilter} />
          )}
        </div>

        {/* SECTION LOOP */}
        <div className='lg:w-4/5 mt-16'>
          <SectionLoopComponent filteredData={filteredData} />
        </div>

        {/* SCROLL BUTTON */}
        {showNav && (
          <ScrollButtonComponent scrollToSection={scrollToSection} type='footer' />
        )}

      </div>
    </main>
  )
}
