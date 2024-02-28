import { FilterType } from "@models/FilterType";
import { SectionType } from "@models/SectionType";

interface CompanyComponentProps {
    section: SectionType;
}

const CompanyComponent: React.FC<CompanyComponentProps> = ({ section }) => {
    return (
        <>
            {
                section.company && (
                    <div className='text-text'>
                        <p className="text-text-accent text-sm">Company:</p>
                        <span className="">{section.company.name}</span>
                        {section.company.via && (
                            <p className='italic text-sm'>contract via {section.company.via.name}</p>
                        )
                        }
                    </div>
                )

                /* : (
                    <div className="text-xs">
                        {FilterType.Solo}
                    </div>
                ) */
            }
        </>
    )
}

export default CompanyComponent