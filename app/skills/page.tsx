import HeaderComponent from "@components/header/HeaderComponent";
import { TiStarFullOutline } from "react-icons/ti";
import Image from 'next/image';
import SkillsComponent from "@components/skills/SkillsComponent";

export default function SkillsPage() {
    return (
        <>
            <div className='
            flex flex-col w-full gap-6
            pt-32 items-center pb-16 relative p-2
      font-monsterrat align-top min-h-screen
      bg-gradient-to-br from-background-from via-background-via to-background-to'
            >
                <div className='absolute top-0 w-full'>
                    <HeaderComponent page='skills' />
                </div>

                <h1 className="text-3xl">Skills</h1>

                <SkillsComponent />


            </div>
        </>
    )

}