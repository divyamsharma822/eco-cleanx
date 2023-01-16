import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./Accordion.module.scss";


const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div className={styles.Accordion}>
            <AnimatePresence>
                <motion.div
                    key='question'
                    className={styles.question}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.div className='d-flex justify-content-between align-items-center'>
                        <div>{question}</div>
                        {!isOpen ? <IoIosArrowDown style={{color:"white"}}/> : <IoIosArrowUp style={{color:"white"}}/>}
                    </motion.div>
                </motion.div>

                {isOpen && (
                    <motion.div
                        key='answer'
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        exit={{ opacity: 0 }}
                        className={styles.answer}
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Accordion;
