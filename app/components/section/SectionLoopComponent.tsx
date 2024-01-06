import React from 'react';
import { SectionType } from '../../types/SectionType';
import TitleComponent from './TitleComponent';
import ToolsComponent from './ToolsComponent';
import ContentComponent from './ContentComponent';
import MediaComponent from './MediaComponent';

interface SectionComponentProps {
    filteredData: Array<SectionType>;
}


function alternatedColumnsClass(idx: number): string {
    return `flex flex-col md:flex-row 
    ${idx % 2 !== 0 && 'md:flex-row-reverse'}`
}

const sectionBorderClass = 'shadow-2xl shadow-cyan-200 rounded-3xl bg-green-300/15'
const connectionLineClass = 'bg-gradient-to-b from-indigo-700/5 via-purple-200 to-indigo-700/5 to-90%'


/* 
NOTE: 
'section' passed in full in all child components;
Child components manage data needs. 
Refactor if section would be too big or dynamic (CSR) 
*/

const SectionLoopComponent: React.FC<SectionComponentProps> = ({ filteredData }) => {
    return (
        <div className=''>
            {filteredData.map((section, idx) => (
                <div key={section.id} className={`relative p-6 mb-20`}>

                    {idx !== 0 && (
                        <div className={`absolute left-1/2 transform -top-20 w-0.5 h-20 ${connectionLineClass}`}></div>
                    )}

                    <div className="text-center pb-4 relative">
                        <TitleComponent section={section} />
                        <ToolsComponent section={section} />
                    </div>

                    <div className={alternatedColumnsClass(idx)}>
                        <div className="w-full md:w-1/2 mx-6 mt-6 relative">
                            <MediaComponent section={section} />
                        </div>
                        <div className="w-full md:w-2/3">
                            <ContentComponent section={section} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SectionLoopComponent;
