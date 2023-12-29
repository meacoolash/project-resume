import React from 'react'
import { SectionType } from '../types/SectionType';
import ProjectsComponent from './ProjectsComponent';

interface SectionComponentProps {
    filteredData: Array<SectionType>;
}

const SectionComponent: React.FC<SectionComponentProps> = ({ filteredData }) => {

    return (
        <div className="space-y-8">
            {filteredData.map((section) => (
                <div key={section.id} className="bg-gray-50 hover:bg-gray-100 shadow-md overflow-hidden sm:rounded-lg p-6">

                    {/* HEADER */}
                    <div className="border-b pb-4">
                        <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                        <p className="text-sm text-gray-600">{section.start} - {section.end} ({section.duration})</p>
                        {section.company && (
                            <>
                                {section.company.link && (
                                    <a href={section.company.link} className="text-blue-600 hover:underline">{section.company.name}</a>
                                )}
                                {section.company.via && (
                                    <p className="text-gray-600">via <a href={section.company.via.link} className="text-blue-600 hover:underline">{section.company.via.name}</a> - {section.company.via.type}</p>
                                )}
                            </>
                        )}
                    </div>


                    {/* PROJECTS */}
                    {section.projects && section.projects.length > 0 && (
                        <ProjectsComponent projects={section.projects} />
                    )}



                    {/* TOOLS */}
                    {section.tools && section.tools.length > 0 && (
                        <div className="pt-4">
                            <h3 className="font-semibold text-gray-800">Tools:</h3>
                            <div className="flex flex-wrap gap-2">
                                {section.tools.map((tool, index) => (
                                    <span key={index} className="bg-gray-100 text-gray-400 text-xs font-semibold px-2.5 py-0.5 rounded">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CHALLENGES */}
                    {section.challenges && section.challenges.length > 0 && (
                        <div className="pt-4">
                            <h3 className="font-semibold text-gray-800">Challenges:</h3>
                            <ul className="list-disc list-inside">
                                {section.challenges.map((challenge, index) => (
                                    <li key={index}>{challenge}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* PREVIEW */}
                    {section.live && (
                        <div className="pt-4">
                            <a href={section.live} className="text-blue-600 hover:underline">View Live Project</a>
                        </div>
                    )}
                </div>
            ))}
        </div>

    )
}

export default SectionComponent