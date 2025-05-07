import React from "react";
import plus from "../../assets/images/svg/plus.svg";
import house from "../../assets/images/svg/house.svg";
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.container}>
            <button className={styles.add}>
                <img src={plus} alt="plus" /> Add New Game
            </button>
            <div className={styles.home}>
                <img src={house} alt="house img" /> Home
            </div>
        </footer>
    )
}

export default Footer;