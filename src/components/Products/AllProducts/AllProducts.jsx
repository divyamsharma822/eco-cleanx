import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./AllProducts.module.scss";
import Product2 from "../../../assests/product2.png";
import { dilutedProducts } from "../../../data-json/dilutedProducts";

import { motion } from "framer-motion";

const AllProducts = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div className={styles.AllProducts}>
            <div className='d-flex align-items-center flex-wrap ms-0 ms-md-5'>
                <div className={`${styles.heading}`}>All Products</div>
                <div
                    className={`d-flex justify-content-center justify-content-sm-start ${styles.heading}`}
                >
                    <input
                        type='checkbox'
                        id='switch'
                        onChange={(e) => {
                            setChecked(e.target.checked);
                        }}
                        defaultChecked={checked}
                        value={checked}
                    />
                    <label
                        htmlFor='switch'
                        className='d-flex justify-content-around align-items-center mx-auto mx-md-0'
                    >
                        <div
                            className={`col-6 text-center ${
                                !checked && styles.btn
                            }`}
                        >
                            Waterless
                        </div>
                        <div
                            className={`col-6 text-center ${
                                checked && styles.btn
                            }`}
                        >
                            Diluted
                        </div>
                    </label>
                </div>
            </div>
            <br />
            {!checked && (
                <motion.div
                    className='d-flex flex-wrap justify-content-around justify-content-sm-around'
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                >
                    {dilutedProducts.map((curr, index) => (
                        <ProductCard
                            key={index}
                            img={curr.content.icon}
                            name={
                                <>
                                    <span>
                                        <b>{curr.card.heading1}</b>
                                    </span>
                                    <span>{curr.card.heading2}</span>
                                </>
                            }
                            content={curr.card.description}
                            curr={curr.content}
                        />
                    ))}
                </motion.div>
            )}
            {checked && (
                <motion.div
                    className='d-flex flex-wrap justify-content-around justify-content-sm-around'
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                >
                    {dilutedProducts.map((curr, index) => (
                        <ProductCard
                            key={index}
                            img={Product2}
                            name={
                                <>
                                    <span>
                                        <b>{curr.card.heading1}</b>
                                    </span>
                                    <span>{curr.card.heading2}</span>
                                </>
                            }
                            content={curr.card.description}
                            curr={curr.content}
                        />
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default AllProducts;
