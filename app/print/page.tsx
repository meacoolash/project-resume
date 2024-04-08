import PrintButtonComponent from './PrintButtonComponent';
import HeaderComponent from '@components/header/HeaderComponent';
import { Data } from '@data/Data';
import { FilterType } from '@models/FilterType';
import Page1 from './page1';
import Page2 from './page2';

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

        <div className='mt-20'>
          <PrintButtonComponent />
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