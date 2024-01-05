import React from 'react';
import { SectionType } from '../../types/SectionType';
import { FaCheck } from 'react-icons/fa';
import CompanyComponent from './CompanyComponent';

interface SectionComponentProps {
    filteredData: Array<SectionType>;
}

const SectionLoopComponent: React.FC<SectionComponentProps> = ({ filteredData }) => {
    return (
        <div className='space-y-8'>
            {filteredData.map((section, idx) => (
                <div key={section.id} className="shadow-md sm:rounded-lg p-6">


                    <div className=''>

                        <div className="text-center border-b pb-4 relative">



                            {/* TITLE */}
                            <div className='text-accent'>
                                <p className="text-3xl font-signika">{section.start} - {section.end}</p> {/* Year first */}
                                <p className="text-2xl font-signika text-accent font-bold">{section.title}</p>

                                {/* COMPANY DETAILS */}
                                <CompanyComponent section={section} />


                            </div>



                            {/* TOOLS */}
                            {section.tools && section.tools.length > 0 && (
                                <div className="pt-4 flex justify-center">
                                    <div className="flex flex-wrap gap-2">
                                        {section.tools.map((tool, toolIdx) => (
                                            <span key={toolIdx} className="text-xs bg-primary font-semibold px-2.5 py-0.5 rounded">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}



                        </div>
                    </div>



                    {/* MEDIA & DETAILS */}
                    <div className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                    >

                        {/* DETAILS */}
                        <div className="w-full md:w-2/3">

                            {/* PROJECT */}
                            <div className="py-4">
                                {section.projects && section.projects.length > 0 && (
                                    <div>
                                        <ul className="list-disc list-inside">
                                            {section.projects.map((project, projectIdx) => (
                                                <li key={projectIdx} className='list-none'>
                                                    <p className='font-playfair font-bold text-3xl py-2'>{project.name}</p>
                                                    <p>{project.description}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>


                            {section.challenges && section.challenges.length > 0 && (
                                <div>
                                    <h3 className="font-semibold">Challenges:</h3>
                                    <ul className="list-inside">
                                        {section.challenges.map((challenge, challengeIdx) => (
                                            <li className='flex items-center gap-2' key={challengeIdx}>
                                                <span className='text-primary'><FaCheck /></span>{challenge}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {/* PREVIEW */}
                            {section.live && (
                                <div className="pt-4">
                                    <a href={section.live} className="hover:underline">View Live Project</a>
                                </div>
                            )}

                        </div>


                        {/* MEDIA */}
                        <div className="w-full md:w-1/3 m-6" >
                            <img src="img.png" alt="" className="w-full" />
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default SectionLoopComponent;
