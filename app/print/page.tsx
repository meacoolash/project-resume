import PrintButtonComponent from './PrintButtonComponent';
import HeaderComponent from '@components/header/HeaderComponent';
import { Data } from '@data/Data';

const Print = () => {

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
      <div id='print-resume' className='a4-size text-xs text-black hidden md:block'>
        {/* header */}
        <div className='mb-3'>
          <div className='flex justify-between text-blue-500 font-bold mb-4'>
            <div>Mikulas Stec - Fullstack Developer (FE Heavy)</div>
            <div>mikulas@stec.sk</div>
          </div>
          <div>
            <p>Auto-generated CV from my web profile for a quick overview.</p>
            <p>For the full experience, filtering options, screen recordings and a work details, please visit <a href='https://stec.sk' className='text-blue-500 underline  ml-1'>www.stec.sk</a></p>
          </div>
        </div>

        {/* content */}
        {Data.map((section, idx) => (
          <div key={idx} className='grid grid-cols-4 border-b py-1'>

            {/* Column 1 (period/company) */}
            <div>
              <div className='font-bold'>{section.period}</div>
              <div>
                {section.company ? section.company.name : 'Personal project'}
              </div>
            </div>

            {/* Column 2 (title) */}
            <div className='text-sm font-semibold'>{section.title}</div>

            {/* Column 3 (tools) */}
            <div className='col-span-2'>
              {section.filter && section.filter.length > 0 && (
                <div className='flex flex-wrap gap-x-2 mb-1'>
                  {section.filter.map((tool, toolIdx) => (
                    <div key={toolIdx}>
                      <span className='font-semibold text-red-700' >{tool},</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* footer */}
        <div className='mt-10 flex justify-center font-bold'>
          For more detailed information, please visit <a href='https://stec.sk' className='text-blue-500 underline  ml-1'>www.stec.sk</a>
        </div>

      </div>
    </div>
  )
}

export default Print