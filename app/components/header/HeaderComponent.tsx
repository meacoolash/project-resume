"use client"
import React, { use, useEffect, useState } from 'react'
import { FaEnvelope, FaFilePdf, FaSun, FaHome, FaMoon } from 'react-icons/fa'
import { FaDisplay } from "react-icons/fa6";
import Link from 'next/link'
import { useTheme } from 'next-themes';

interface HeaderComponentProps {
    page?: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ page }) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [pathname, setPathname] = useState('/');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;


    return (
        <header className='flex justify-between items-center p-4 mb-4 text-xl'>
            <Link href='/'>
                <div className='font-signika'>Mikuláš Štec <span>Full-Stack Developer</span></div>
            </Link>

            <div className='flex space-x-4'>

                <button onClick={() => toggleTheme()}>
                    {theme === 'dark' ? (
                        <FaSun />
                    ) : (
                        <FaMoon />
                    )}

                </button>
                        
                {page === 'print' ? (
                    <Link href={'/'} className='flex items-center space-x-2'>
                        <FaDisplay className='h-4 w-4' />
                    </Link>
                ) : (
                    <Link href={'/print'} className='flex items-center space-x-2'>
                        <FaFilePdf className='h-4 w-4' />
                    </Link>

                )}

                <button className='flex items-center space-x-2'>
                    <FaEnvelope className='h-4 w-4' />
                </button>
            </div>
        </header>

    )
}

export default HeaderComponent