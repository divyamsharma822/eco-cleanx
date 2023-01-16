import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styles from "./FAQAccordion.module.scss";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

const FAQAccordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className={styles.FAQAccordion}
            onClick={() => setIsOpen(!isOpen)}
        >
            <AnimatePresence>
                <motion.div className={styles.question} key='question'>
                    <motion.div>{question}</motion.div>
                    <motion.div>
                        {isOpen ? (
                            <HiOutlineMinus size={25} />
                        ) : (
                            <HiOutlinePlus size={25} />
                        )}
                    </motion.div>
                </motion.div>
                {isOpen && (
                    <motion.div
                        className={styles.answer}
                        key='answer'
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        exit={{
                            opacity: 0,
                        }}
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FAQAccordion;
