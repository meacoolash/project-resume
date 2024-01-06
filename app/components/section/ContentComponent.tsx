import { SectionType } from '@/app/types/SectionType'
import React from 'react'
import { FaCheck, FaGithub } from 'react-icons/fa';

interface ContentComponentProps {
    section: SectionType;
}

const ContentComponent: React.FC<ContentComponentProps> = ({ section }) => {
    return (

        <>

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



        </>


    )
}

export default ContentComponent