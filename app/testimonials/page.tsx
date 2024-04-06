import HeaderComponent from "@components/header/HeaderComponent";
import { TiStarFullOutline } from "react-icons/ti";
import Image from 'next/image';

export default function TestimonialsPage() {
    return (
        <>
            <div className='flex flex-col w-full pt-40 items-center pb-16 relative p-4
      font-monsterrat align-top min-h-screen
      bg-gradient-to-br from-background-from via-background-via to-background-to'
            >
                <div className='absolute top-0 w-full'>
                    <HeaderComponent page='testimonials' />
                </div>


                <div className="flex flex-col lg:w-3/4 gap-16 italic md:text-xl font-monsterrat">
                    <h1 className="text-3xl font-playfair not-italic text-accent md:flex gap-2 items-center">
                        <span>Testimonials: Stories of Success</span>
                        <div className="flex gap-2 text-yellow-400 text-2xl">
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                            <TiStarFullOutline />
                        </div>
                    </h1>
                    <div>
                        <p>&quot;Dear Miki,</p>
                        <p>I would like to thank you for your <span className="text-accent not-italic">advice and guidance</span>, you may not even know it, but working with you
                            has helped me a lot in developing myself.&quot;</p>

                        <p className="not-italic mt-1 text-right">Adam, Uniqa 2022</p>
                    </div>

                    <div>
                        <p>&quot;Dear Mikuláš,</p>
                        <p>Thank you for being a calm <span className="text-accent not-italic">productive member that was always ready to learn</span> adapt and create a nice environment in the team. For sure you will be missed.&quot;</p>
                        <p className="not-italic mt-1 text-right">Benea, Uniqa 2022</p>
                    </div>

                    <div>
                        <p>&quot;… You know, I&apos;ve worked with many FE developers, but their code was sometimes quite mess - all the codebase in one place! But <span className="text-accent not-italic">the architecture you implemented</span> for our back office in Varden with service layouts, it&apos;s completely testable! It&apos;s such a pleasure for me to work on that, both in implementing features and maintenance. I&apos;ve adopted your approach in all my FE work after that.&quot;</p>
                        <p className="not-italic mt-1 text-right">Eugene, Varden 2021</p>
                    </div>
                </div>


                <p className="mt-16">Additional testimonials, success stories, and reference contacts are available upon request.</p>

            </div>
        </>
    )

}