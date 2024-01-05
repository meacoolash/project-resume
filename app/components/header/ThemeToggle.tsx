"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FaSun } from 'react-icons/fa'

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
        <button onClick={() => toggleTheme()}><FaSun /></button>
    )
}

export default ThemeToggle