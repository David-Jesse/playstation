import React from "react";
import playstation from "../../assets/images/svg/playstation-logo.svg";
import bell from "../../assets/images/svg/bell.svg"; 
import gear from "../../assets/images/svg/gear.svg";
import {assets} from '../../constants';
import styles from './Navigation.module.scss'

export const Navigation: React.FC = () => {
    return (
        <div className={styles.container}>
            <img src={playstation} alt="playstation logo" />
            <ul className={styles.links}>
                <li>
                    <a href="https://github.com/David-Jesse/playstation">Github</a>
                </li>
                <li>
                    <a href="https://github.com/David-Jesse">Developer</a>
                </li>
                <li>
                    <a href="https://dribble.com/413thKnight">Designer</a>
                </li>
            </ul>
            <div className={styles.userInfo}>
                <div className={styles.avatarContainer}>
                    <div className={styles.status}/>
                    <img src={assets.avatar} className={styles.avatar} alt="avatar" />
                </div>
                <div className={styles.playerDetail}>
                    <div className={styles.username}>
                        Knight Forty 
                    </div>
                    <div className={styles.badges}>
                        <img src={assets.crown} alt="crown" />
                        <img src={assets.shield} alt="shield" />
                        <img src={assets.blades} alt="blades" />
                    </div>
                </div>
                <button className={styles.notificationTrigger}>
                    <img src={bell} alt="bell logo" />
                </button>
                <button className={styles.settingsTrigger}>
                    <img src={gear} alt="gear logo" />
                </button>
            </div>
        </div>
    )
}