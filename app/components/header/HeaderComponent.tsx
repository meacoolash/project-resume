"use client"
import React, { use, useEffect, useState } from 'react'
import { FaEnvelope, FaFilePdf, FaSun, FaHome, FaMoon } from 'react-icons/fa'
import { FaDisplay } from "react-icons/fa6";
import Link from 'next/link'
import { useTheme } from 'next-themes';

interface HeaderComponentProps {
    page?: string;
}

const hoverClass = 'md:hover:text-accent/95 transition-colors duration-200'

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
        <header className='flex justify-between items-center py-4 px-6 text-xl'>
            <Link href='/' className={`${hoverClass}`}>
                <div className='font-signika'>Mikuláš Štec <span className='hidden sm:inline-block'>Full-Stack Developer</span></div>
            </Link>

            <div className='flex gap-4'>
                <button className={`${hoverClass}`} onClick={() => toggleTheme()}>
                    {theme === 'dark' ? (
                        <FaSun />
                    ) : (
                        <FaMoon />
                    )}

                </button>

                <div className={`hidden lg:inline ${hoverClass}`}>
                    {page === 'print' ? (
                        <Link href={'/'} className=''>
                            <FaDisplay/>
                        </Link>
                    ) : (
                        <Link href={'/print'} className=''>
                            <FaFilePdf/>
                        </Link>

                    )}
                </div>

                <button className={`${hoverClass}`}>
                    <FaEnvelope className='' />
                </button>
            </div>
        </header>

    )
}

export default HeaderComponent