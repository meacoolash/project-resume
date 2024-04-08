import { Data } from "@data/Data";
import { FilterType } from "@models/FilterType";

export default function Page1() {
    return (
        <div className="h-[292mm]">
            {/* header */}
            <div className='mb-3'>
                <div className='flex justify-between text-blue-500 font-semibold mb-1 text-sm'>
                    <div>Mikulas Stec - Fullstack Developer (FE Heavy)</div>
                    <div>mikulas@stec.sk</div>
                </div>
                <div>
                    <p>Auto-generated CV for a quick overview.</p>
                    <p>For the full experience, filtering options, previews and details, please visit <a href='https://stec.sk' className='text-blue-500 underline  ml-1'>www.stec.sk</a></p>
                </div>
            </div>

            {/* content */}
            {Data
                .filter((section) => section.print)
                .map((section, idx) => (
                    <div key={idx} className=''>
                        <div className='grid grid-cols-4 border-b py-2'>

                            {/* Column 1 */}
                            <div>
                                <p className='font-semibold text-black'>{section.title}</p>
                                <div className=''>{section.period}</div>
                            </div>

                            {/* Column 2 */}
                            <div className=''>
                                <p className='font-semibold'>{section.role}</p>
                                {section.company && (
                                    <div>{section.company.name}</div>
                                )}
                            </div>

                            {/* Column 3 (tools) */}
                            <div className='col-span-2'>
                                {section.filter && section.filter.length > 0 && (
                                    <div className='flex flex-wrap gap-x-3 '>
                                        {section.filter
                                            .filter((tool) => tool !== FilterType.Solo)
                                            .map((tool, toolIdx) => (
                                                <div key={toolIdx}>
                                                    <span className='font-semibold text-red-700' >{tool}</span>
                                                </div>
                                            ))}
                                    </div>
                                )}
                                {section.info}

                            </div>
                        </div>

                    </div>

                ))}

            {/* footer */}
            <div className='mt-6 flex justify-between '>
                <div>
                    generated on {new Date().toLocaleDateString()}
                </div>
                <div>
                    For more detailed information, please visit <a href='https://stec.sk' className='text-blue-500 underline'>www.stec.sk</a>
                </div>
            </div>








        </div>
    )
}