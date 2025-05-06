import React from "react";
import back from "../../assets/images/svg/back.svg";
import forward from "../../assets/images/svg/forward.svg";
import { GameCategories, GameGenres } from "../../redux/App/types";
import {MenuViewProps} from "./types";
import Carousel from "../common/Carousel";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";

const Menu: React.FC<MenuViewProps> = ({
    carouselInstance,
    rightScrollHandler,
    leftScrollHandler,
}) => (
    <div className={styles.container}>
        <h1 className={styles.heading}>My Games</h1>
        <div className={styles.menu}>
            <button className={styles.back} onClick={leftScrollHandler}>
                <img src={back} alt="back arrow" />
            </button>

            <Carousel
                numberToShow={3}
                carouselInstance={carouselInstance}
                itemWidth={110}
            >
                <MenuItem filter={GameCategories.all}>All</MenuItem>
                <MenuItem filter={GameGenres.adventure}>Adventure</MenuItem>
                <MenuItem filter={GameGenres.action}>Action</MenuItem>
                <MenuItem filter={GameGenres.puzzle}>Puzzle</MenuItem>

                <button className={styles.forward} onClick={rightScrollHandler}>
                    <img src={forward} alt="forward arrow" />
                </button>
            </Carousel>
        </div>
    </div>
)

export default Menu;