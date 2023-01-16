import React from "react";
import styles from "./ProductCard.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ img, name, content, curr }) => {

    const navigate = useNavigate();

    return (
        <motion.div
            className={styles.ProductCard}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
            }}
            onClick={() => navigate("/ProductInfo", {state : curr})}
        >
            <div className={styles.imgwrapper}>
                <img src={img} className={styles.img} alt='' loading="lazy" />
            </div>

            <div className={styles.name}>{name}</div>
            <div>
                <div className={styles.content}>{content}</div>
                <b style={{ color: "#17B5E2" }}> More</b>
            </div>
        </motion.div>
    );
};

export default ProductCard;
