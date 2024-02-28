import PrintButtonComponent from './PrintButtonComponent';
import HeaderComponent from '@components/header/HeaderComponent';
import { Data } from '@data/Data';
import { FilterType } from '@models/FilterType';

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
            <p>For the full experience, filtering options, previews and details, please visit <a href='https://stec.sk' className='text-blue-500 underline  ml-1'>www.stec.sk</a></p>
          </div>
        </div>

        {/* content */}
        {Data
          .filter((section) => section.print)
          .map((section, idx) => (
            <div key={idx} className='border-b py-1'>
              <div className='grid grid-cols-4'>

                {/* Column 1 (period/company) */}
                <div>
                  <p className='font-semibold'>{section.role}</p>
                  <div className=''>{section.period}</div>
                </div>

                {/* Column 2 (title) */}
                <div className=''>
                  <p className='font-semibold'>{section.title}</p>
                  {section.company && (
                    <div>{section.company.name}</div>
                  )}
                  {/* {!section.company && (
                    <div className='text-gray-400 text-xs'>{FilterType.Solo}</div>
                  )} */}
                </div>

                {/* Column 3 (tools) */}
                <div className='col-span-2'>
                  {section.filter && section.filter.length > 0 && (
                    <div className='flex flex-wrap gap-x-3 mb-1'>
                      {section.filter
                        .filter((tool) => tool !== FilterType.Solo)
                        .map((tool, toolIdx) => (
                          <div key={toolIdx}>
                            <span className='font-semibold text-red-700' >{tool}</span>
                          </div>
                        ))}
                    </div>
                  )}
                  {section.info}

                </div>
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