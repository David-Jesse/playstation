import React, {ReactNode} from "react";

export type RefType = React.RefObject<HTMLDivElement>;


export interface CarouselViewProps {
    refs: RefType[];
    children: ChildrenType;
    windowRef: React.RefObject<HTMLDivElement | null>;
    containerRef: React.RefObject<HTMLDivElement | null>;
    showClipped?: boolean;
}

export type ChildrenType = 
| ReactNode
| ReactNode[];

export interface CarouselProps {
    children: ChildrenType;
    numberToShow?: number;
    carouselInstance: UseCarouselType;
    itemWidth: number;
    showClipped?: boolean;
}

export interface CarouselData {
    scrollRight: (step?: number) => void;
    scrollLeft: (step?: number) => void;
    transformCount: React.RefObject<number>;
}

export interface UseCarouselType {
    carouselData: CarouselData| null;
    setCarouselData: React.Dispatch<React.SetStateAction<CarouselData | null>>;
}