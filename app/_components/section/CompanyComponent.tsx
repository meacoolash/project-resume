import { SectionType } from "@models/SectionType";

interface CompanyComponentProps {
    section: SectionType;
}

const CompanyComponent: React.FC<CompanyComponentProps> = ({ section }) => {
    return (
        <div className=''>
            {
                section.company ? (
                    <div className='text-text text-sm mt-2 span:text-xl'>
                        <strong>{section.company.name}</strong>
                        {section.company.via && (
                            <p className='italic'>contract via {section.company.via.name}</p>
                        )
                        }
                    </div>
                ) : (
                    <div>
                        Personal Project
                    </div>
                )
            }
        </div>
    )
}

export default CompanyComponent