import React from 'react';
import styles from './Footer.module.css'
import footer from './../../assets/img/eectangle.png'
import next from './../../assets/icons/vectorR.png'
import back from './../../assets/icons/vectorL.png'

const Footer = () => {
    return (
        <div className={styles.footer__wrapper}>
            <div className={styles.footer__container}>
                <div className={styles.footer__buttons_box}>
                    <div className={styles.footer__button_back}>
                        <img src={back} alt="next"/>
                        Précédent
                    </div>
                    <div className={styles.footer__buttons_next}>
                        Suivant
                        <img src={next} alt="next"/>
                    </div>
                </div>
            </div>
            <img className={styles.footer__img} src={footer} alt="footer"/>
        </div>
    );
};

export default Footer;