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
    const element = document.getElementById('print-resume');

    if (element) {
      // Clone the element so HTML2ODF is working even if original elemnt is hidden
      const clonedElement  = element.cloneNode(true) as HTMLElement;
      clonedElement.style.display = 'block';
      
      html2pdf(clonedElement, {
        filename: 'mikulas-stec-resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        jsPDF: { format: 'A4', orientation: 'portrait', pagesplit: false },
      });
    }
  };

  return (
    <>
    
      {/* Desktop */}
      <div className='text-xl m-3 gap-4 justify-center md:flex hidden '>
        <Link href='/'><FaArrowLeft /></Link>
        <button onClick={window.print}><FaPrint /></button>
        <button onClick={generatePdf}><FaFilePdf /></button>
      </div>

      {/* Mobile */}
      <div className='md:hidden flex justify-center'>
        <button onClick={generatePdf} className='flex flex-col gap-2 items-center'>
          <div className='text-text text-9xl'><FaFilePdf /></div>
          <div>Generate PDF</div>
        </button>
      </div>

    </>

  );
};

export default PrintButtonComponent;
