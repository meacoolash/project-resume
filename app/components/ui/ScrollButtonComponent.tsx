import React from 'react'

interface ScrollButtonComponentProps {
    scrollToSection: () => void
    type: 'hero' | 'footer'
}


function svgShape() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 9l-7 7-7-7" />
        </svg>
    )
}

const ScrollButtonComponent: React.FC<ScrollButtonComponentProps> = ({ scrollToSection, type }) => {
    return (
        <>
            {type === 'hero' ? (
                <div className="w-8 h-8 absolute bottom-10 left-1/2">
                    <button className='-translate-x-2 w-full h-full' onClick={scrollToSection}>
                        {svgShape()}
                    </button>
                </div>
            ) : (

                <div className="relative w-8 h-8 bottom-10 ml-auto mr-3 transform rotate-180">
                <button className='w-full h-full' onClick={scrollToSection}>
                    {svgShape()}
                </button>
                </div>

                /* POC - shadowed scroll button:
                <div className="mb-12 flex justify-center items-center hover:bg-accent/10 bg-accent/5 shadow-accent shadow-lg transition-all duration-500 hover:shadow-sm hover:shadow-accent rounded-full ml-auto mr-3 relative">
                <button onClick={scrollToSection} className="flex justify-center items-center w-6 h-6 transform rotate-180">
                {svgShape()}
                </button>
                </div>
                */
            )}
        </>
    )
}

export default ScrollButtonComponent