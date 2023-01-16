import React, { useEffect } from "react";
import styles from "./Main.module.scss";
import arrow from "../../../assests/LandingArrow.png";
import { motion, useAnimation } from "framer-motion";

const Main = () => {
    const animationControls = useAnimation();

    useEffect(() => {
        async function sequence() {
            await animationControls.start({ scale: 0.1, opacity: 0 });
            await animationControls.start({ scale: 1, opacity: 1 });
        }

        sequence();
    }, [animationControls]);

    return (
        <motion.div
            className={styles.Main}
            id='Main'
            initial={{ opacity: 0, scale: 0.1 }}
            // animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            animate={animationControls}
        >
            <div className={styles.centerdiv}>
                <div className={`${styles.heading}`}>
                    Best Selling Eco-friendly Cleaning
                </div>
                <div className={`${styles.heading}`}>
                    Products for you.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    <img
                        src={arrow}
                        alt=''
                        className={`d-none d-sm-inline ${styles.img}`}
                    />
                </div>
                <br />
                <div className={styles.subHeading}>
                    "Clean with a conscience - our products are good
                </div>
                <div className={styles.subHeading}>
                    for the environment and your business"
                </div>
            </div>
        </motion.div>
    );
};

export default Main;
