import React from 'react';
import { SectionType } from '../types/SectionType';

interface SectionComponentProps {
    filteredData: Array<SectionType>;
}

const SectionComponent: React.FC<SectionComponentProps> = ({ filteredData }) => {
    return (
        <div className="space-y-8 bg-slate-800 text-white font-modern"> 

            {filteredData.map((section, idx) => (
                <div key={section.id} className="bg-dark-blue hover:bg-darker-blue shadow-md overflow-hidden sm:rounded-lg p-6"> 

                    {/* HEADER */}
                    <div className="text-center border-b pb-4">
                        <p className="text-xl font-bold">{section.start} - {section.end}</p> {/* Year first */}
                        <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>

                    {/* TOOLS */}
                    {section.tools && section.tools.length > 0 && (
                        <div className="pt-4 flex justify-center">
                            <div className="flex flex-wrap gap-2">
                                {section.tools.map((tool, toolIdx) => (
                                    <span key={toolIdx} className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* PROJECTS & CHALLENGES */}
                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                        {section.projects && section.projects.length > 0 && (
                            <div>
                                <ul className="list-disc list-inside">
                                    {section.projects.map((project, projectIdx) => (
                                        <li key={projectIdx} className='list-none'>
                                            <strong>{project.name}</strong> 
                                            <p className='text-yellow-200'>{project.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {section.challenges && section.challenges.length > 0 && (
                            <div>
                                <h3 className="font-semibold">Challenges:</h3>
                                <ul className="list-disc list-inside">
                                    {section.challenges.map((challenge, challengeIdx) => (
                                        <li key={challengeIdx}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* PREVIEW */}
                    {section.live && (
                        <div className="pt-4">
                            <a href={section.live} className="text-blue-400 hover:underline">View Live Project</a>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default SectionComponent;
