"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const ThemeToggle = () => {

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
    }, []);

    if (!mounted) return null;


    return (
        <>
            <button
                className="bg-accent text-secondary"
                onClick={() => toggleTheme()}
            >TOGGLE FROM {theme}</button>
        </>

    )
}

export default ThemeToggle