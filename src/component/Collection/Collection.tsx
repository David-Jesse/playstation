import React from "react";
import Carousel from "../common/Carousel";
import { CollectionViewProps } from "./types";
import { mergeClasses } from "../../helper";
import styles from "./Collection.module.scss";

const collection: React.FC<CollectionViewProps> = ({
    carouselInstance,
    games,
    selectedIndex,
    cardStyles,
    cardImgStyles,
}) => (
    <div className={styles.container}>
        <Carousel
            carouselInstance={carouselInstance}
            itemWidth={cardStyles.width ? Number(cardStyles.width) : 270}
            showClipped={true}
        >
            {games.map(({coverArtUrl, name}, index) => (
                <div
                    className={mergeClasses(styles.gameWrapper, index === selectedIndex ? styles.selected : '')}
                    key={index}
                >
                    <button className={styles.gameTrigger} style={cardStyles}>
                        <img src={coverArtUrl} alt={name} style={cardImgStyles} />
                    </button>
                </div>
            ))}
        </Carousel>
    </div>
)

export default collection;