import React, { useState } from "react";
import ScrollDown from "../../ScrollDown/ScrollDown";
import styles from "./CoverPage.module.scss";
import coverimg from "../../../assests/HomeShowScreen.png";
import { motion, useCycle } from "framer-motion";

import bg1 from "../../../assests/CoverPage_Carsousel3.png";
import bg2 from "../../../assests/CoverPage_Carsousel1.png";
import bg3 from "../../../assests/CoverPage_Carsousel2.png";

const CoverPage = () => {
    const [currentSlide, cycleSlide] = useCycle(0, 1, 2);
    const [imgarr] = useState([bg1, bg2, bg3]);

    return (
        <div className={styles.CoverPage}>
            <div
                className={styles.centerContent}
                style={{ backgroundImage: `url(${imgarr[currentSlide]})` }}
            >
                {currentSlide === 0 && (
                    <div>
                        <div
                            className={styles.heading}
                            style={{ color: "black" }}
                        >
                            Eco-friendly Cleaning
                        </div>
                        <div
                            className={styles.heading}
                            style={{ color: "black" }}
                        >
                            Solutions for your{" "}
                            <span style={{ color: "white" }}>House</span>
                        </div>
                    </div>
                )}
                {currentSlide === 1 && (
                    <div>
                        <div
                            className={styles.heading}
                            style={{ color: "white" }}
                        >
                            Top-notch Industrial
                        </div>
                        <div
                            className={styles.heading}
                            style={{ color: "white" }}
                        >
                            cleaning solutions for factories.
                        </div>
                    </div>
                )}
                {currentSlide === 2 && (
                    <div>
                        <div
                            className={styles.heading}
                            style={{ color: "white" }}
                        >
                            Top-notch cleaning solution
                        </div>
                        <div
                            className={styles.heading}
                            style={{ color: "white" }}
                        >
                            for all your needs.
                        </div>
                    </div>
                )}
                <div>
                    <div className={styles.subheading}>
                        "Clean with a conscience - our products
                    </div>
                    <div className={styles.subheading}>
                        are good for the environment and your business"
                    </div>
                </div>

                <div
                    className={`d-flex justify-content-center justify-content-sm-start  ${styles.btns}`}
                >
                    <motion.div
                        className={styles.btn}
                        whileHover={{
                            scale: 1.04,
                            transition: { duration: 0.1 },
                        }}
                    >
                        Explore Now
                    </motion.div>
                    <motion.div
                        className={styles.btn}
                        whileHover={{
                            scale: 1.04,
                            transition: { duration: 0.1 },
                        }}
                    >
                        Learn More
                    </motion.div>
                </div>
                <div className='w-100'>
                    <svg
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className={styles.svg}
                        onClick={() => cycleSlide()}
                    >
                        <path
                            d='M21 4.5C30.1127 4.5 37.5 11.8873 37.5 21C37.5 30.1127 30.1127 37.5 21 37.5C11.8873 37.5 4.5 30.1127 4.5 21C4.5 11.8873 11.8873 4.5 21 4.5Z'
                            stroke='white'
                            strokeWidth='2'
                        />
                        <path
                            d='M24.5169 14.8225C24.5169 15.155 24.3944 15.4875 24.1319 15.75L18.8819 21L24.1319 26.25C24.6394 26.7575 24.6394 27.5975 24.1319 28.105C23.6244 28.6125 22.7844 28.6125 22.2769 28.105L16.0994 21.9275C15.5919 21.42 15.5919 20.58 16.0994 20.0725L22.2769 13.895C22.7844 13.3875 23.6244 13.3875 24.1319 13.895C24.3944 14.1575 24.5169 14.49 24.5169 14.8225Z'
                            fill='white'
                        />
                    </svg>

                    <svg
                        width='42'
                        height='42'
                        viewBox='0 0 42 42'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className={styles.svg}
                        onClick={() => cycleSlide()}
                    >
                        <path
                            d='M21 37.5C11.8873 37.5 4.5 30.1127 4.5 21C4.5 11.8873 11.8873 4.5 21 4.5C30.1127 4.5 37.5 11.8873 37.5 21C37.5 30.1127 30.1127 37.5 21 37.5Z'
                            stroke='white'
                            strokeWidth='2'
                        />
                        <path
                            d='M17.4831 27.1775C17.4831 26.845 17.6056 26.5125 17.8681 26.25L23.1181 21L17.8681 15.75C17.3606 15.2425 17.3606 14.4025 17.8681 13.895C18.3756 13.3875 19.2156 13.3875 19.7231 13.895L25.9006 20.0725C26.4081 20.58 26.4081 21.42 25.9006 21.9275L19.7231 28.105C19.2156 28.6125 18.3756 28.6125 17.8681 28.105C17.6056 27.8425 17.4831 27.51 17.4831 27.1775Z'
                            fill='white'
                        />
                    </svg>
                </div>
                {currentSlide === 0 && (
                    <motion.img
                        src={coverimg}
                        alt=''
                        className={`img-fluid d-none d-lg-block ${styles.img}`}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, opacity: 0 }}
                        transition={{ duration: 1 }}
                    />
                )}
            </div>

            <div className={`d-none d-md-none d-lg-block ${styles.bottom}`}>
                <ScrollDown />
            </div>
        </div>
    );
};

export default CoverPage;
