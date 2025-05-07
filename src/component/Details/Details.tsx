import React from "react";
import styles from './Details.module.scss';

const Details: React.FC<{
    name: string;
    time: string;
    progression: number;
    title: string;
    titleUrl: string
}> = ({name, time, progression, title, titleUrl}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                {name}
            </div>
            <div className={styles.stats}>
                <div className={styles.statBox}>
                    <div>Average Play Time</div>
                    <div>{time}</div>
                </div>
                <div className={styles.statBox}>
                    <div>Story Progression</div>
                    <div>{`${progression}%`}</div>
                </div>
                <div className={styles.statBox}>
                    <div>Last Earned Title</div>
                </div>
                <div>
                    {title} <img src={titleUrl} alt={title} />
                </div>
            </div>
        </div>
    )   
    
}

export default Details;