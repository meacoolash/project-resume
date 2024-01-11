"use client"
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaPrint, FaFilePdf } from 'react-icons/fa';
import Link from 'next/link';

const PrintButtonComponent = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const generatePdf = async () => {
    // Dynamically import html2pdf.js only on the client-side. Otherwise it will break the build.
    const html2pdf = (await import('html2pdf.js')).default;
    html2pdf(document.getElementById('print-resume'), {
      filename: 'mikulas-stec-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      jsPDF: { format: 'A4', orientation: 'portrait', pagesplit: false },
    });
  };

  return (
    <div className='text-xl m-3 flex gap-4 justify-center'>
        <Link href='/'><FaArrowLeft /></Link>
      <button onClick={window.print}><FaPrint /></button>
      <button onClick={generatePdf}><FaFilePdf /></button>
    </div>
  );
};

export default PrintButtonComponent;
