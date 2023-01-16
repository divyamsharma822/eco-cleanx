import React from "react";
import styles from "./AboutUs.module.scss";
import leftImage from "../../../assests/aboutus.png";

const AboutUs = () => {
    return (
        <div className={styles.AboutUs} id="AboutUs">
            <div
                className={`d-flex justify-content-center ${styles.centerContent}`}
            >
                <div className={` ${styles.left}`}>
                    <img src={leftImage} alt='aboutUs' className={styles.img} />
                </div>
                <div className={`${styles.right}`}>
                    <div className={styles.subheading}>About Us</div>
                    <div className={styles.heading}>What do we do?</div>
                    <div className={styles.content}>
                        We are specialised in making useful, unique and safe to
                        use cleaning products. Our products are useful in all
                        the industries as they are eco-friendly. We are trying
                        to reduce the use of harmful, dangerous, flammable and
                        toxic cleaning chemicals with eco-friendly, waterless
                        and green solutions for the cleaning industry.
                    </div>
                    <div className={styles.learnMore}>Learn More</div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
