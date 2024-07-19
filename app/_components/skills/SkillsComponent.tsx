import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { SkillsData } from "./data";



export default function SkillsComponent() {
    const StartRating = ({ rating }: { rating: number }) => {
        return (
            <div className='flex gap-2 w-40 text-xl text-yellow-400'>
                {Array.from({ length: rating }, (_, i) => (
                    <TiStarFullOutline key={i} />
                ))}
                {rating === 0 ? <TiStarOutline /> : null}
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-6 md:w-1/2">
            {SkillsData.map((skill, idx) => (
                <div key={idx} className="">
                    <div className="grid grid-cols-4">
                        <div className="col-1">
                            <div className='md:text-xl'>{skill.label}</div>
                        </div>
                        <div className="col-span-3">
                            <StartRating rating={skill.rate}></StartRating>
                            <div className="text-sm text-accent">{skill.desc}</div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}