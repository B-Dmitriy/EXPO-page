import React from 'react';
import dotsStyles from "./MainDots.module.css";

const MainDots = () => {
    return (
        <>
            <div className={dotsStyles.main__turquoise_dot}/>
            <div className={dotsStyles.main__yellow_dot}/>
            <div className={dotsStyles.main__brown_dot}/>
            <div className={dotsStyles.main__red_dot}/>
            <div className={dotsStyles.main__orange_secondDot}/>
            <div className={dotsStyles.main__green_dot}/>
            <div className={dotsStyles.main__red_secondDot}/>
            <div className={dotsStyles.main__brown_secondDot}/>
            <div className={dotsStyles.main__yellow_secondDot}/>
            <div className={dotsStyles.main__blue_secondDot}/>
            <div className={dotsStyles.main__green_secondDot}/>
            <div className={dotsStyles.main__orange_thirdDot}/>
            <div className={dotsStyles.main__red_thirdDot}/>
            <div className={dotsStyles.main__brown_thirdDot}/>
            <div className={dotsStyles.main__yellow_thirdDot}/>
            <div className={dotsStyles.main__blue_thirdDot}/>
        </>
    );
};

export default MainDots;