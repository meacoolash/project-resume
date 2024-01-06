import React from 'react'
import { SectionType } from '@/app/types/SectionType';

interface ToolsComponentProps {
    section: SectionType;
}

const ToolsComponent: React.FC<ToolsComponentProps> = ({ section }) => {
    return (
        <>
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
        </>
    )

}

export default ToolsComponent