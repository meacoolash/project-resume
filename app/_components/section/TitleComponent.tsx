import React from 'react'
import CompanyComponent from './CompanyComponent'
import { SectionType } from '@models/SectionType';

interface CompanyComponentProps {
    section: SectionType;
}

const TitleComponent: React.FC<CompanyComponentProps> = ({ section }) => {
    return (
        <div className=''>
            <p className="text-3xl font-monsterrat">{section.period}</p> 
            <p className="text-2xl font-signika text-text-accent">{section.title}</p>
        </div>

    )
}

export default TitleComponent