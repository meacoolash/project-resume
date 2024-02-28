import React from 'react';
import { InView } from 'react-intersection-observer';
import TitleComponent from './TitleComponent';
import ToolsComponent from './ToolsComponent';
import MediaComponent from './MediaComponent';
import ContentComponent from './ContentComponent';
import { SectionType } from '@models/SectionType';
import CompanyComponent from './CompanyComponent';
import { RiExternalLinkLine } from "react-icons/ri";

interface SectionComponentProps {
    filteredData: Array<SectionType>;
}

function alternatedColumnsClass(idx: number): string {
    return `flex flex-col md:flex-row gap-6 mt-6
    ${idx % 2 !== 0 && 'md:flex-row-reverse'}`
}

//POC  const sectionBorderClass = 'shadow-2xl shadow-cyan-200 rounded-3xl bg-green-300/15'
const connectionLineClass = 'bg-gradient-to-b from-indigo-700/5 via-purple-200 to-indigo-700/5 to-90%'


/* 
NOTE: 
'section' passed in full in all child components;
Child components manage data needs. 
Refactor if section would be too big or dynamic (CSR) 
*/

const SectionLoopComponent: React.FC<SectionComponentProps> = ({ filteredData }) => {
    return (
        <>
            {filteredData.map((section, idx) => (
                <div key={section.id} className={`relative p-6 mb-20`}>

                    {/* Vertical Line (Timeline visual effect) */}
                    {idx !== 0 && (
                        <div className={`absolute left-1/2 transform -top-20 w-0.5 h-20 ${connectionLineClass}`}></div>
                    )}

                    {/* Title and Tools Animated InView */}
                    <InView triggerOnce threshold={1}>
                        {({ inView, ref, entry }) => (
                            <div
                                ref={ref}
                                className={inView ?
                                    'transition-all duration-300'
                                    : 'opacity-0 -translate-y-12'
                                }
                            >
                                <div className="text-center pb-4 relative">
                                    <TitleComponent section={section} />
                                    <ToolsComponent section={section} />
                                </div>
                            </div>
                        )}
                    </InView>

                    {/* Media and Content */}
                    <div className={alternatedColumnsClass(idx)}>
                        <div className="w-full md:w-1/2 relative">
                            <MediaComponent section={section} />
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col">
                            <CompanyComponent section={section} />
                            <ContentComponent section={section} />

                            {/* PREVIEW */}
                            {section.live && (
                                <div className="pt-4">
                                    <a href={section.live} target='_blank' className="hover:underline flex align-middle items-center gap-2">
                                        View Live Project <RiExternalLinkLine className='text-xl' />
                                    </a>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default SectionLoopComponent;
