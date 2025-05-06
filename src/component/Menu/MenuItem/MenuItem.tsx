import React from "react";
import styles from "./MenuItem.module.scss";
import { mergeClasses } from "../../../helper";

const MenuItem: React.FC<{onClick: () => void; active: boolean; children?: React.ReactNode}> = ({
    children,
    onClick,
    active,
}) => (
    <button
        className={mergeClasses(styles.menuItem, active ? styles.active : '')}
        onClick={onClick}
    >
        {children}
    </button>
)

export default MenuItem