import React from 'react'
import { Data } from '../data/Data'
import PrintButtonComponent from './PrintButtonComponent';
import HeaderComponent from '../components/header/HeaderComponent';

const Print = () => {

  return (
    <div className='flex flex-col justify-center font-monsterrat pb-16'>

      {/* HEADER */}
      <div className='no-print'>
        <HeaderComponent page='print' />
        <PrintButtonComponent />
      </div>

      {/* RESUME */}
      <div id='print-resume' className='a4-size text-xs'>

        {/* header */}
        <div className='flex justify-between text-blue-500 font-bold'>
          <div>Mikuláš Štec - Fullstack Developer</div>
          <div>mikulas@stec.sk</div>
        </div>

        {/* content */}
        {Data.map((section, idx) => (
          <div key={idx} className='mt-4 mb-2 grid grid-cols-4 border-b'>

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
              {section.tools && section.tools.length > 0 && (
                <div className='flex flex-wrap gap-x-2 mb-1'>
                  {section.tools.map((tool, toolIdx) => (
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