"use client"
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { GrHomeRounded, GrDocumentPdf, GrChatOption, GrDesktop, GrBlockQuote } from "react-icons/gr";
import Link from 'next/link'
import { useTheme } from 'next-themes';
import { TbHeartStar } from "react-icons/tb";

interface HeaderComponentProps {
    page?: string;
}

const hoverClass = 'md:hover:text-accent/95 transition-colors duration-200'

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

                <button className={`${hoverClass}`} onClick={() => handleToggleTheme()} aria-label='Set Theme'>
                    {theme === 'dark' ? (
                        <FaSun />
                    ) : (
                        <FaMoon />
                    )}
                </button>

                <div className={`${hoverClass}`}>
                    {page === 'print' ? (
                        <Link href={'/'} aria-label='Default View' className=''>
                            <GrDesktop />
                        </Link>
                    ) : (
                        <Link href={'/print'} aria-label='Print View' className=''>
                            <GrDocumentPdf />
                        </Link>
                    )}
                </div>

                 <div className={`${hoverClass}`}>
                    {page === 'testimonials' ? (
                        <Link href={'/'} aria-label='Default View' className=''>
                            <GrHomeRounded />
                        </Link>
                    ) : (
                        <Link href={'/testimonials'} aria-label='Print View' className=''>
                            <TbHeartStar />
                        </Link>
                    )}
                </div>

                {page === 'contact' ? (
                    <Link href={'/'} aria-label='Home' className=''>
                        <GrHomeRounded />
                    </Link>
                ) : (
                    <Link href={'/contact'} aria-label='Contact' className=''>
                        <GrChatOption />
                    </Link>

                )}

            </div>
        </header>
    )
}

export default HeaderComponent