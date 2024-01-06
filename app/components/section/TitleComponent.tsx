import React from 'react'
import CompanyComponent from './CompanyComponent'
import { SectionType } from '@/app/types/SectionType';

interface CompanyComponentProps {
    section: SectionType;
}

const TitleComponent: React.FC<CompanyComponentProps> = ({ section }) => {
    return (
        <div className='text-accent'>
            <p className="text-3xl font-signika">{section.start} - {section.end}</p> {/* Year first */}
            <p className="text-2xl font-signika text-sky-400">{section.title}</p>
            {/* COMPANY DETAILS */}
            <CompanyComponent section={section} />
        </div>

    )
}

export default TitleComponent