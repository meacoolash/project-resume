import { SkillsData } from "@components/skills/data";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import FooterPrintComponent from "./FooterComponent";
import Image from 'next/image';

const StartRating = ({ rating }: { rating: number }) => {
    return (
        <div className='flex gap-1 w-40 text-xs text-yellow-400 opacity-50'>
            {Array.from({ length: rating }, (_, i) => (
                <TiStarFullOutline key={i} />
            ))}
            {rating === 0 ? <TiStarOutline /> : null}
        </div>
    )
}

export default function Page2() {
    return (
        <div className="h-[292mm] flex flex-col gap-3 mt-4 relative">
            <div className="absolute top-0 right-2">page 2</div>
            <h2 className="text-sm text-black font-semibold text-center">Skills</h2>
            <div className="flex flex-col gap">
                {SkillsData.map((skill, idx) => (
                    <div key={idx} className="">
                        <div className="w-full flex">
                            <div className="w-1/6 space-y-1">
                                <div className='text-sm text-black font-semibold'>{skill.label}</div>
                                <StartRating rating={skill.rate}></StartRating>
                            </div>
                            <div className="w-5/6 mt-0.5">
                                <div className="text-xs">{skill.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* footer */}
            <div className="absolute bottom-4 right-0 w-full">
                <FooterPrintComponent />
            </div>

        </div>
    )
}