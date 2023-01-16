import { motion } from "framer-motion";
import React from "react";
import FAQAccordion from "../FAQAccordion/FAQAccordion";
import styles from "./FAQ.module.scss";

const FAQ = () => {
    return (
        <div className={styles.FAQ}>
            <div className={styles.centerContent}>
                <div className={styles.heading}>FAQ's</div>

                {[
                    {
                        question:
                            "1 .   What is the best way to store cleaning products?",
                        answer: "It is generally recommended to store cleaning products in a cool, dry place, out of reach of children and pets. Some products may also need to be stored in a well-ventilated area, away from heat sources or flames.",
                    },
                    {
                        question:
                            "2 .  Can I mix different cleaning products together?",
                        answer: "It is generally recommended to store cleaning products in a cool, dry place, out of reach of children and pets. Some products may also need to be stored in a well-ventilated area, away from heat sources or flames.",
                    },
                    {
                        question:
                            "3 .   How do I choose the best cleaning product for a specific surface?",
                        answer: "It is generally recommended to store cleaning products in a cool, dry place, out of reach of children and pets. Some products may also need to be stored in a well-ventilated area, away from heat sources or flames.",
                    },
                    {
                        question:
                            "4 .  Are natural or organic cleaning products better?",
                        answer: "It is generally recommended to store cleaning products in a cool, dry place, out of reach of children and pets. Some products may also need to be stored in a well-ventilated area, away from heat sources or flames.",
                    },
                    {
                        question:
                            "5 .  Are natural or organic cleaning products better?",
                        answer: "It is generally recommended to store cleaning products in a cool, dry place, out of reach of children and pets. Some products may also need to be stored in a well-ventilated area, away from heat sources or flames.",
                    },
                ].map((curr, index) => (
                    <motion.span
                        initial={{ x: 200, opacity: 1 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        key={index}
                    >
                        <FAQAccordion
                            key={index}
                            question={curr.question}
                            answer={curr.answer}
                        />
                    </motion.span>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
