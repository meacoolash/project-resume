import { SkillsData } from "@components/skills/data";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

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
        <div className="h-[292mm] flex flex-col gap-3 mt-4">
            <h2 className="text-sm text-black font-semibold text-center">Skills</h2>
            <div className="flex flex-col gap-1">
                {SkillsData.map((skill, idx) => (
                    <div key={idx} className="">
                        <div className="w-full flex">
                            <div className="w-1/6 space-y-1.5">
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