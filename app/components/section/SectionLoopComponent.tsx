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


/* 
NOTE: 
'section' passed in full in all child components;
Child components manage data needs. 
Refactor if section would be too big or dynamic (CSR) 
*/

const SectionLoopComponent: React.FC<SectionComponentProps> = ({ filteredData }) => {
    return (
        <div className='space-y-8'>
            {filteredData.map((section, idx) => (
                <div key={section.id} className="sm:rounded-lg p-6 shadow-md bg-primary/30">

                    <div className="text-center border-b pb-4 relative">
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
