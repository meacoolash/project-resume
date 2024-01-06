import React, { useRef, useState } from 'react';
import { SectionType } from '../../types/SectionType';
import {FaGit, FaGithub,  FaCheck, FaPlayCircle, FaGithubAlt, FaGithubSquare } from 'react-icons/fa';
import CompanyComponent from './CompanyComponent';
import Image from 'next/image';

interface SectionComponentProps {
    filteredData: Array<SectionType>;
}

function RoundendImage({ src, alt }: { src: string, alt: string }) {
    return (
        <Image
            src={src}
            alt={alt}
            width="1000"
            height="1000"
            className="rounded-xl shadow-md"
        />
    )
}

const SectionLoopComponent: React.FC<SectionComponentProps> = ({ filteredData }) => {
    return (
        <div className='space-y-8'>
            {filteredData.map((section, idx) => (
                <div key={section.id} className="sm:rounded-lg p-6 shadow-md bg-primary/30">


                    <div className=''>

                        <div className="text-center border-b pb-4 relative">



                            {/* TITLE */}
                            <div className='text-accent'>
                                <p className="text-3xl font-signika">{section.start} - {section.end}</p> {/* Year first */}
                                <p className="text-2xl font-signika text-secondary font-bold">{section.title}</p>

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
                                                <li key={projectIdx} className='list-none pb-2'>
                                                    <p className='font-bold'>{project.name}</p>
                                                    <p>{project.description}</p>
                                                    {project.repository && (
                                                        <button className='flex mt-1 p-2 bg-orange-500 text-white rounded'>
                                                            <FaGithub />
                                                            <span className='pl-2 text-sm'>Public GIT</span>
                                                        </button>
                                                            
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>


                            {section.challenges && section.challenges.length > 0 && (
                                <div>
                                    <h3 className="font-semibold">Highlights:</h3>
                                    <ul className="list-inside text-sm">
                                        {section.challenges.map((challenge, challengeIdx) => (
                                            <li className='flex gap-2' key={challengeIdx}>
                                                <span className='pt-1 text-primary'><FaCheck /></span>{challenge}
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
                        <div className="w-full md:w-1/2 mx-6 mt-6 relative">
                            {section.media ? (
                                section.media.type === 'video' ? (
                                    <div className="relative">
                                        {/* The video */}
                                        <video
                                            className="w-full rounded-xl"
                                            src={section.media.url}
                                            controls
                                        />
                                    </div>

                                ) : (
                                    <RoundendImage src={section.media.url} alt={section.title} />
                                )
                            ) : (
                                <RoundendImage src="/img.png" alt="" />
                            )
                            }
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default SectionLoopComponent;
