"use client"
import React, { useEffect, useState } from 'react'
import html2pdf from 'html2pdf.js';
import { FaDownload, FaArrowLeft, FaPrint } from 'react-icons/fa';
import Link from 'next/link';

const PrintButtonComponent = () => {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const printMe = () => {
        const opt = {
            filename: 'mikulas-stec_full-stack-developer.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            jsPDF: { unit: 'cm', format: 'A4', orientation: 'portrait' },
            avoid: 'avoid-all'
        };
        if (!mounted) return null;
        const element = document.getElementById('print-resume');
        if (element) {
            html2pdf(element,opt);
        }
    }

    return (
        <div className='text-xl m-3 flex gap-4 justify-center'>
            <Link href='/'><FaArrowLeft /></Link>
            <button onClick={printMe}><FaDownload /></button>
            <button onClick={() => window.print()}><FaPrint /></button>
        </div>
    )
}

export default PrintButtonComponent