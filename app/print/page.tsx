import PrintButtonComponent from './PrintButtonComponent';
import HeaderComponent from '@components/header/HeaderComponent';
import { Data } from '@data/Data';
import { FilterType } from '@models/FilterType';
import Page1 from './page1';
import Page2 from './page2';
import { FaDisplay } from 'react-icons/fa6';
import Link from 'next/link';

const Print = async () => {
  return (
    <div className='flex flex-col justify-center pb-16 relative
      font-monsterrat align-top min-h-screen
      bg-gradient-to-br from-background-from via-background-via to-background-to'
    >

      {/* HEADER */}
      <div className='no-print'>
        <div className='absolute top-0 w-full'>
          <HeaderComponent page='print' />
        </div>

        <div className='mt-20 hidden md:block'>
          <PrintButtonComponent />
        </div>

        <div className='md:hidden flex justify-center mb-2'>
          <div className='flex flex-col gap-2 items-center w-2/3 text-center text-sm'>
            <div className='shadow-md shadow-accent/30 text-xl opacity-70'>
              <FaDisplay />
            </div>
            <p className="text-accent">
              Full features including <span className="text-text">PDF generation</span> are currently available only on desktop.</p>
            <p className="text-accent">Feel free to <Link href='/contact' className='text-text'>contact me</Link> and I’ll be happy to provide it.</p>


          </div>
        </div>


      </div>

      {/* DESKTOP RESUME */}
      <div id='print-resume' className='print-document-pages text-xs hidden md:block text-gray-500 overflow-hidden'>
        <Page1 />
        <div className='border-t border-gray-400 border-dashed h-1'></div>
        <Page2 />
      </div>

    </div>
  )
}

export default Print