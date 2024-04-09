"use client"
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaPrint, FaFilePdf } from 'react-icons/fa';

const PrintButtonComponent = () => {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleGeneratePdf = async () => {
    setProgress(true);
    // Dynamically import html2pdf.js only on the client-side. Otherwise it will break the build.
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.getElementById('print-resume');

    if (element) {
      // Clone the element so HTML2ODF is working even if original elemnt is hidden
      const clonedElement = element.cloneNode(true) as HTMLElement;
      clonedElement.style.display = 'block';

      const currentDate = new Date();
      const yy = currentDate.getFullYear().toString().slice(2);
      const mm = ('0' + (currentDate.getMonth() + 1)).slice(-2);
      const dd = ('0' + currentDate.getDate()).slice(-2);
      const formattedDate = `${yy}${mm}${dd}`;

      html2pdf(clonedElement, {
        filename: `mikulas-stec-cv_${formattedDate}.pdf`,
        image: { type: 'jpeg', quality: .8 },
        html2canvas: {
          dpi: 192,
          scale: 4,
          letterRendering: true,
          useCORS: true
        },
        jsPDF: { unit: 'mm', format: 'A4', orientation: 'portrait', pagesplit: false }
      });
    }
    setProgress(false)
  };

  return (
    <>
      {/* Desktop */}
      <div className='m-3 gap-4 justify-center md:flex hidden hover:opacity-90 '>
        <button onClick={handleGeneratePdf} aria-label='PDF' className='flex gap-2'><FaFilePdf className='text-3xl' />

          <div className='text-xl'>
            {progress ? 'Generating PDF ...' : 'Generate and download PDF'}
          </div>
        </button>
      </div>

      {/* Mobile */}
      <div className='md:hidden flex justify-center'>
        <button onClick={handleGeneratePdf} aria-label='Generate PDF' className='flex flex-col gap-2 items-center'>
          <div className='text-text text-9xl'><FaFilePdf /></div>
          <div>Generate PDF</div>
        </button>
      </div>

    </>

  );
};

export default PrintButtonComponent;
