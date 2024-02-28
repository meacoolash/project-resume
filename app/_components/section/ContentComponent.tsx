import { SectionType } from "@models/SectionType";
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
                                <li key={projectIdx} className='list-none pb-3'>
                                    <p className='text-xl font-monsterrat font-semibold tracking-wide'>{project.name}</p>
                                    <p>{project.description}</p>
                                        {project.repository && project.repository.link && (
                                            project.repository.link === 'REQUEST' ? (
                                                <p className="text-accent text-sm"> (private git, on request)</p>
                                            ) : (
                                                <a href={project.repository.link} target="_blank" rel="noopener noreferrer" className="flex gap-2 mt-1 p-2 justify-center bg-orange text-white rounded w-32">
                                                    <FaGithub />
                                                    <span className="text-sm">Public GIT</span>
                                                </a>
                                            )
                                        )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>


            {section.challenges && section.challenges.length > 0 && (
                <ul className="list-inside text-sm">
                    {section.challenges.map((challenge, challengeIdx) => (
                        <li className='flex gap-2' key={challengeIdx}>
                            <span className='pt-1 text-cyan-300 text-xs'><FaCheck /></span>{challenge}
                        </li>
                    ))}
                </ul>
            )}
        </>


    )
}

export default ContentComponent