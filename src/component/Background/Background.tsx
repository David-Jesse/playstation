import React from "react";
import { mergeClasses } from "../../helper";
import styles from './Background.module.scss'



const Background: React.FC<{style: React.CSSProperties; background: React.RefObject<HTMLDivElement | null>}> = ({
    style,
    background
}) => {
        return (
            
            <div className={styles.wrapper}>
            <div
                ref={background}
                className={mergeClasses(styles.container)}
                style={style}
            ></div>
        </div>

    ) 

}  
export default Background;