"use client"
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import {
    GrHomeRounded, GrDocumentPdf, GrChatOption, GrDesktop, GrBlockQuote, GrArchive,
    GrIteration
} from "react-icons/gr";
import Link from 'next/link'
import { useTheme } from 'next-themes';
import { TbHeartStar } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";

interface HeaderComponentProps {
    page?: string;
}

const hoverClass = 'md:hover:text-accent/95 transition-colors duration-200 flex flex-col items-center'

const HeaderComponent: React.FC<HeaderComponentProps> = ({ page }) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const handleToggleTheme = () => {
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
        <header className='flex justify-between items-center py-4 px-2 md:px-6 text-xl'>
            <Link href='/' className={`${hoverClass}`}>
                <div className='font-signika text-xl'>
                    Mikulas Stec
                    <span className='hidden sm:inline ml-2'>
                        - Fullstack Developer
                    </span>
                </div>
            </Link>

            <div className='flex gap-4 md:gap-6'>

                <div className={page === undefined ? 'text-accent/95' : ''}>
                    <Link href={'/'} aria-label='Print View' className={`${hoverClass}`}>
                        <GrIteration />
                        <span className='text-xs'>Work</span>
                    </Link>
                </div>

                <div className={page === 'skills' ? 'text-accent/95' : ''}>
                    <Link href={'/skills'} aria-label='Print View' className={`${hoverClass}`}>
                        <GiSkills />
                        <span className='text-xs md:block'>Skills</span>
                    </Link>
                </div>

                <div className={page === 'testimonials' ? 'text-accent/95' : ''}>
                    <Link href={'/testimonials'} aria-label='Print View' className={`${hoverClass}`}>
                        <TbHeartStar />
                        <span className='text-xs md:block'>Trust</span>
                    </Link>
                </div>

                <div className={page === 'print' ? 'text-accent/95' : ''}>
                    <Link href={'/print'} aria-label='Print View' className={`${hoverClass}`}>
                        <GrDocumentPdf />
                        <span className='text-xs md:block'>PDF</span>
                    </Link>
                </div>

                <div className={page === 'contact' ? 'text-accent/95' : ''}>
                    <Link href={'/contact'} aria-label='Print View' className={`${hoverClass}`}>
                        <GrChatOption />
                        <span className='text-xs md:block'>Talk</span>
                    </Link>
                </div>

                <div className='md:text-2xl'>
                    <button className={`${hoverClass}`} onClick={() => handleToggleTheme()} aria-label='Set Theme'>
                        {theme === 'dark' ? (
                            <FaSun />
                        ) : (
                            <FaMoon />
                        )}
                    </button>
                </div>

            </div>
        </header>
    )
}

export default HeaderComponent