import React from "react";
import { CarouselViewProps } from "./types";
import { mergeClasses } from "../../../helper";
import styles from "./Carousel.module.scss";

const Carousel: React.FC<CarouselViewProps> = ({
    children,
    refs,
    windowRef,
    containerRef,
    showClipped,
}) => (
    <div
        className={mergeClasses(styles.window, showClipped ? styles.showClipped : '')}
        ref={windowRef}
    >
        <div className={styles.container} ref={containerRef}>
            {React.Children.map(children, (child, index) => (
                <div ref={refs[index]}>
                    {React.isValidElement(child) ? React.cloneElement(child) : null}
                </div>
            ))}
        </div>
    </div>
)

export default Carousel;