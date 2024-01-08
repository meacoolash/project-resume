import React from 'react'
import HeaderComponent from './header/HeaderComponent'
import ScrollButtonComponent from './ui/ScrollButtonComponent'

interface HeroComponentProps {
  scrollToSection: () => void
}


const HeroComponent: React.FC<HeroComponentProps> = ({ scrollToSection }) => {
  return (
    <div className="isolate overflow-hidden relative">
      {/* Red/Blue Balance ANIMATION using pseudoclasses */}
      <div
        className="grid relative min-h-screen place-items-center place-content-center gap-16 before:absolute before:h-3/4 before:w-3/4 before:rounded-tr-full before:rounded-bl-full before:blur-3xl before:bg-red-300/70 before:animate-spin-slower before:-z-10 after:absolute after:h-2/3 after:w-2/3 after:rounded-tr-full after:rounded-bl-full after:blur-3xl after:bg-blue-300/50 after:animate-spin-slow after:-z-10"
      >

        {/* HERO HEADER */}
        <div className='absolute top-0 w-full'>
          <HeaderComponent />
        </div>

        {/* SLOGAN */}
        <div className='text-center text-2xl font-monsterrat'>
          Finding balance between perfection and progress.
        </div>

      </div>

      {/* Scroll to content button */}
      <ScrollButtonComponent scrollToSection={scrollToSection} type='hero' />
    </div>
  )
}

export default HeroComponent