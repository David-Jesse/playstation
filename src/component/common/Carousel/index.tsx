import React, { useState, createRef, useRef, useEffect, useCallback } from "react";
import {CarouselProps, RefType, CarouselData} from "./types";
import Carousel from "./Carousel";
import { playNavigationAudio } from "../../../helper";

// eslint-disable-next-line react-refresh/only-export-components
export const useCarousel = () => {
    const [carouselData, setCarouselData] = useState<CarouselData | null>(null);
    return {carouselData, setCarouselData}
}

const CarouselContainer: React.FC<CarouselProps> = ({
    children, 
    numberToShow = 1,
    carouselInstance,
    itemWidth,
    showClipped
}) => {
    const transform = useRef(0);
    const transformCount = useRef(0);
    const windowRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [refs] = useState<Array<RefType>>(
        React.Children.map(children, () => createRef<HTMLDivElement>()) as RefType[]
    )

    const onNavMove = useCallback(() => {
        playNavigationAudio()
    }, []);

    const scrollRight = useCallback(
        (step = 1) => {
            if (transformCount.current < refs.length - numberToShow) {
                transform.current = transform.current + step + itemWidth;
                containerRef.current!.style.transform = `translateX(-${transform.current}px)`;
                transformCount.current += 1;
                onNavMove();
            }
        },
        [itemWidth, numberToShow, onNavMove, refs, transform]
    );

    const scrollLeft = useCallback(
        (step = 1) => {
            if (transformCount.current > 0) {
                transform.current -= step * itemWidth;
                containerRef.current!.style.transform = `translateX(-${transform.current}px)`;
                transformCount.current -= 1;
                onNavMove();
            }
        },
        [itemWidth, onNavMove, transform]
    );
    
    useEffect(() => {
        if(containerRef.current) {
            containerRef.current.style.width = 'translateX(0)';
        }

        if (!carouselInstance.carouselData) {
            carouselInstance.setCarouselData({
                scrollRight,
                scrollLeft,
                transformCount
            })
        }
    }, [carouselInstance, scrollLeft, scrollRight])

    return (
        <Carousel
            refs={refs}
            windowRef={windowRef}
            containerRef={containerRef}
            showClipped={showClipped}
        >
            {children}
        </Carousel>
    )
}

export default CarouselContainer;