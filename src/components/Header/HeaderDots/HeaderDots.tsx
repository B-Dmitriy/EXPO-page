import React from 'react';
import styles from "./HeaderDots.module.css";

const HeaderDots = () => {
    return (
        <>
            <div className={styles.header__selector_orange_dot}/>
            <div className={styles.header__selector_red_dot}/>
            <div className={styles.header__selector_brown_dot}/>
            <div className={styles.header__selector_yellow_dot}/>
            <div className={styles.header__selector_turquoise_dot}/>
            <div className={styles.header__selector_blue_dot}/>
            <div className={styles.header__selector_green_dot}/>
            <div className={styles.header__selector_blue_secondDot}/>
            <div className={styles.header__selector_turquoise_secondDot}/>
            <div className={styles.header__selector_yellow_secondDot}/>
            <div className={styles.header__selector_brown_secondDot}/>
        </>
    );
};

export default HeaderDots;