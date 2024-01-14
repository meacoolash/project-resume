"use client"
import React, { use, useEffect, useState } from 'react'
import { FaSun, FaMoon, FaHome } from 'react-icons/fa'
import { FaDisplay } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Link from 'next/link'
import { useTheme } from 'next-themes';


interface HeaderComponentProps {
    page?: string;
}

const hoverClass = 'md:hover:text-accent/95 transition-colors duration-200'

const HeaderComponent: React.FC<HeaderComponentProps> = ({ page }) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }


    useEffect(() => {
        setMounted(true);
        theme === 'system' && setTheme('dark');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!mounted) return null;


    return (
        <header className='flex justify-between items-center py-4 px-6 text-xl'>
            <Link href='/' className={`${hoverClass}`}>
                <div className='font-signika'>
                    Mikulas Stec
                    <span className='hidden sm:inline ml-2'>
                        Full-Stack/FE Developer
                        <span className='text-sm'> </span>
                    </span>
                </div>
            </Link>

            <div className='flex gap-5'>
                <button className={`${hoverClass}`} onClick={() => toggleTheme()}>
                    {theme === 'dark' ? (
                        <FaSun />
                    ) : (
                        <FaMoon />
                    )}
                </button>

                <div className={`${hoverClass}`}>
                    {page === 'print' ? (
                        <Link href={'/'} className=''>
                            <FaDisplay />
                        </Link>
                    ) : (
                        <Link href={'/print'} className=''>
                            <FaRegFilePdf />
                        </Link>

                    )}
                </div>

                <Link href={'/contact'} className={`${hoverClass}`}>
                {page === 'contact' ? (
                        <Link href={'/'} className=''>
                            <FaHome />
                        </Link>
                    ) : (
                        <Link href={'/contact'} className=''>
                            <IoChatbubbleEllipses  />
                        </Link>

                    )}
                </Link>
            </div>
        </header>
    )
}

export default HeaderComponent