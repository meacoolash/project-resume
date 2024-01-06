import React from 'react'
import { SectionType } from '@/app/types/SectionType';
import Image from 'next/image';

interface MediaComponentProps {
    section: SectionType;
}

function RoundendImage({ src, alt }: { src: string, alt: string }) {
    return (
        <Image
            src={src}
            alt={alt}
            width="1000"
            height="1000"
            className="rounded-xl shadow-md"
        />
    )
}

const MediaComponent: React.FC<MediaComponentProps> = ({ section }) => {
    return (
        <div className=''>
            {section.media && (
                section.media.type === 'video' ? (
                    <div className="relative">
                        <video
                            className="w-full rounded-xl"
                            src={section.media.url}
                            controls
                        />
                    </div>

                ) : (
                    <RoundendImage src={section.media.url} alt={section.title} />
                )
            ) 
            }
        </div>
    )
}

export default MediaComponent