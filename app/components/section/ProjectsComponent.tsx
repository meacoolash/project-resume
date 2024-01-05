import React from 'react'
import { ProjectType, SectionType } from '../../types/SectionType'
import { Project } from 'next/dist/build/swc'

interface ProjectsComponentProps {
    projects: ProjectType[]
}

const ProjectsComponent: React.FC<ProjectsComponentProps> = ({ projects }) => {
    return (
        <>
            {projects && projects.length > 0 && (
                <div className="pt-4">
                    <h3 className="font-semibold text-gray-800">Projects:</h3>
                    <ul className="list-disc list-inside">
                        {projects.map((project, index) => (
                            <li key={index}>
                                <strong>{project.name}:</strong> {project.description}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default ProjectsComponent