
import React from 'react'
import { Data } from '../data/Data'
import PrintButtonComponent from './PrintButtonComponent';
import HeaderComponent from '../components/header/HeaderComponent';

const Print = () => {

  return (
    <div className='flex flex-col justify-center font-monsterrat pb-16'>
      <div className='no-print'>
        <HeaderComponent page='print'/>
        <PrintButtonComponent />
      </div>

      <div id='print-resume' className='a4-size text-xs'>

        <div className='flex justify-between text-blue-500 font-bold'>
          <div>Mikuláš Štec - Fullstack Developer</div>
          <div>mikulas@stec.sk</div>
        </div>

        {Data.map((section, idx) => (
          <div key={idx} className='mt-4 mb-2 grid grid-cols-4 border-b'>
            <div className=''>
              <div className='text-xs font-bold'>{section.start} - {section.end}</div>
              {section.company ? (
                <div className='text-xs'>{section.company.name}</div  >
              ) : (
                <div className='text-xs'>peronal project</div>
              )
              }
            </div>
            <div className='text-sm font-semibold'>{section.title}</div>
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

        <div className='mt-10 flex justify-center font-bold'>
           For more detailed information, please visit <a href='https://stec.sk' className='text-blue-500 underline  ml-1'>www.stec.sk</a>           
        </div>
      
      </div>
    </div>
  )
}

export default Print