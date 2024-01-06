import React from 'react'
import { FaEnvelope, FaFilePdf } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'


const HeaderComponent = () => {
    return (
        <header className='flex justify-between items-center p-4 mb-4 text-xl'>
            <div className='font-signika'>Mikuláš Štec <span>Full-Stack Developer</span></div>
            <div className='flex space-x-4'>

                <ThemeToggle />

                <a href="/resume.pdf" download className='flex items-center space-x-2'>
                    <FaFilePdf className='h-4 w-4' />
                </a>
                
                <button className='flex items-center space-x-2'>
                    <FaEnvelope className='h-4 w-4' />
                </button>

            </div>
        </header>

    )
}

export default HeaderComponent