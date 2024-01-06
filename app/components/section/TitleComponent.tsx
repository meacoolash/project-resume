import React from 'react'
import CompanyComponent from './CompanyComponent'
import { SectionType } from '@/app/types/SectionType';

interface CompanyComponentProps {
    section: SectionType;
}

const TitleComponent: React.FC<CompanyComponentProps> = ({ section }) => {
    return (
        <div className=''>
            <p className="text-3xl font-signika">{section.start} - {section.end}</p> 
            <p className="text-2xl font-signika text-text-accent">{section.title}</p>
            
            <CompanyComponent section={section} />
        </div>

    )
}

export default TitleComponent