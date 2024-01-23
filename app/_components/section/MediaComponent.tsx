"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import { FaPlay, FaPause } from 'react-icons/fa';
import { SectionType } from "@models/SectionType";

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
    const [isPlaying, setIsPlaying] = React.useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        isPlaying ? pauseVideo() : playVideo();
    }

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const pauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handleVideoEnd = () => setIsPlaying(false);
            video.addEventListener('ended', handleVideoEnd);

            // Cleanup function to remove the event listener
            return () => {
                video.removeEventListener('ended', handleVideoEnd);
            };
        }
    }, []);

    function VideoButton() {
        return (
            <button onClick={() => togglePlay()} className='absolute w-full h-full top-0' aria-label='Play/Pause Video'>
                <div className={`
                bottom-0 left-0 absolute p-2 flex text-sm align-middle gap-1 items-center
                text-text bg-primary/70 hover:bg-primary/60 ${!isPlaying && 'shadow-xl'} transition-all duration-100 shadow-accent rounded-bl-xl rounded-tr-xl
                `}
                >
                    {isPlaying ? (
                        <>
                            <FaPause />Pause
                        </>
                    ) : (
                        <>
                            <FaPlay />Play
                        </>
                    )}
                </div>
            </button>
        )
    }


    return (
        <div className=''>
            {section.media && (
                section.media.type === 'video' ? (
                    <div className="relative">
                        <video
                            ref={videoRef}
                            className="w-full rounded-xl"
                            src={section.media.url}
                            poster={section.media.urlThumbnail}
                            playsInline
                        />
                        <VideoButton />
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