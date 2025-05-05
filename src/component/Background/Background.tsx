import React from "react";
import { mergeClasses } from "../../helper";
import styles from './Background.module.scss'


export interface BackgroundProps {
    style: React.CSSProperties
    background: React.RefObject<HTMLDivElement | null>;
}
const Background: React.FC<BackgroundProps> = ({
    style,
    background,
}) => {
    return <div className={styles.wrapper}>
        <div
            ref={background}
            className={mergeClasses(styles.container)}
            style={style}
        ></div>
    </div>
}

export default Background;