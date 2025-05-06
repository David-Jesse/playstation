import React, {useEffect, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationStore } from "../../redux/types";
import { useCarousel } from "../common/Carousel";
import { pageLoading } from "../../helper";
import Collection from "./Collection";
import { setSelectedIndex } from "../../redux/App/actionCreators";

const CollectionContainer: React.FC = () => {
    const carouselInstance = useCarousel();
    const cardHeight = useRef(Math.floor(window.innerHeight * 0.26812313803));
    const {selectedIndex, games} = useSelector(
        (state: ApplicationStore) => state.app
    )

    const dispatch = useDispatch();

    useEffect(() => {
        document.onkeydown = (e) => {
            if (!pageLoading()) {
                if (e.key === "ArrowRight") {
                    if (selectedIndex + 1 !== games.length) {
                        dispatch(setSelectedIndex({ index: selectedIndex + 1 }));
                        carouselInstance.carouselData?.scrollRight();
                    }
                } else if (e.key === "ArrowLeft" && selectedIndex !== 0) {
                             dispatch(setSelectedIndex({index: selectedIndex - 1}))
                             carouselInstance.carouselData?.scrollLeft();
                       }
            }
        }
    }, [
        selectedIndex,
        carouselInstance.carouselData,
        games.length,
        dispatch,
        games 
    ])

    useEffect(() => {
        if (carouselInstance.carouselData) {
            const transformDist = carouselInstance.carouselData?.transformCount.current;
            if (selectedIndex !== transformDist) {
                for (let i = 0; i < transformDist; i++) {
                    carouselInstance.carouselData?.scrollLeft();
                }
            }
        }
    }, [selectedIndex, carouselInstance])

    const cardStyles: React.CSSProperties = {
        height: cardHeight.current,
        width: cardHeight.current,
    }

    const cardImgStyles: React.CSSProperties = {
        height: cardHeight.current,
        width:
            cardHeight.current - (cardHeight.current - (70 / 100) * cardHeight.current) / 2,
    }

    return (
        <Collection 
            carouselInstance={carouselInstance}
            games={games}
            selectedIndex={selectedIndex}
            cardStyles={cardStyles}
            cardImgStyles={cardImgStyles}
        />
    )
}

export default CollectionContainer;