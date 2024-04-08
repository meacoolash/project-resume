/* eslint-disable @next/next/no-img-element */
import { Data } from "@data/Data";
import { FilterType } from "@models/FilterType";
import FooterPrintComponent from "./FooterComponent";

export default function Page1() {
    return (
        <div className="h-[292mm] relative">

            {/* header */}
            <div className='mb-3'>
                <div className='flex justify-between text-blue-500 font-semibold mb-1 text-sm'>
                    <div>Mikulas Stec - Fullstack Developer (FE Heavy)</div>

                    <div className="flex gap-4">
                        <div className="flex flex-col items-end">
                            <div>mikulas@stec.sk</div>
                            <div>+421 903 988 101</div>
                        </div>

                        <img src={'/profile_200x200.jpg'} alt={'Mikulas Stec profile picture'} width="50" height="50" className="rounded-lg shadow-sm shadow-black object-cover" />

                    </div>
                </div>
                <div className="-mt-6">
                    <p>Auto-generated CV for a quick overview.</p>
                    <p>For the full experience, filtering options and project details, please visit <a href='https://stec.sk' className='text-blue-500 underline  ml-1'>www.stec.sk</a></p>
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

            <div className="absolute bottom-4 right-0 w-full">
                <FooterPrintComponent />
            </div>

        </div>
    )
}