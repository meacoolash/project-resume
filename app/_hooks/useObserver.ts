"useClient"
import { UseObserverType } from "@models/UseObserverType";
import { useEffect, useState } from "react";

const useObserver = (heroRef: React.MutableRefObject<HTMLDivElement | null>): UseObserverType => {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const currentHeroRef = heroRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the hero section is not intersecting (visible), show the nav
                setShowNav(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0,
            }
        );

        if (currentHeroRef) {
            observer.observe(currentHeroRef);
        }

        return () => {
            if (currentHeroRef) {
                observer.unobserve(currentHeroRef);
            }
        };

    }, [heroRef]);

    return { heroRef, showNav };

}


export default useObserver;

