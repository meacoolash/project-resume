"use client"
import React, { useEffect, useState } from 'react'
import {FaArrowLeft, FaPrint } from 'react-icons/fa';
import Link from 'next/link';

const PrintButtonComponent = () => {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;


    return (
        <div className='text-xl m-3 flex gap-4 justify-center'>
            <Link href='/'><FaArrowLeft /></Link>
            <button onClick={() => window.print()}><FaPrint /></button>
        </div>
    )
}

export default PrintButtonComponent