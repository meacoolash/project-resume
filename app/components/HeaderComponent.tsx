import React from 'react'
import { FaEnvelope, FaFilePdf } from 'react-icons/fa'


const HeaderComponent = () => {
    return (
        <header className='sticky top-0 flex justify-between items-center bg-gray-200 p-4 mb-4'>
            <div className='text-lg font-bold'>Mikuláš Štec <span>Full-Stack Developer</span></div>
            <div className='flex space-x-4'>
                <a href="/resume.pdf" download className='flex items-center space-x-2'>
                    <FaFilePdf className='h-4 w-4' />
                    <span>PDF</span>
                </a>
                <button className='flex items-center space-x-2'>
                    <FaEnvelope className='h-4 w-4' />
                    <span>Contact</span>
                </button>
            </div>
        </header>

    )
}

export default HeaderComponent