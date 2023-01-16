import React, { useEffect } from "react";
import styles from "./ProductInfo.module.scss";
import { useLocation } from "react-router-dom";

const ProductInfo = () => {
    const location = useLocation();
    let state = location.state;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className={styles.ProductInfo}>
            <div className={styles.centerContent}>
                <div className={styles.imgwrapper}>
                    <img
                        src={state.icon}
                        alt=''
                        className={`img-fluid ${styles.img}`}
                    />
                </div>
                <div className={styles.name}>
                    <b>CLEAN X 18</b> - Multi Utility Liquid Soap
                </div>
                <div className={styles.paraHeading}>Description</div>
                <div className={styles.content}>
                    <ul style={{ listStyleType: "square" }}>
                        {state.description.map((curr, index) => (
                            <li key={index}>{curr}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.paraHeading}>How to use</div>
                <div className={styles.content}>
                    <ul style={{ listStyleType: "square" }}>
                        {state.howToUse.map((curr, index) => (
                            <li key={index}>{curr}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.paraHeading}>Cost efficiency</div>
                <div className={styles.content}>
                    <p>{state.costEfficiency}</p>
                </div>
                <div className={styles.paraHeading}>
                    Live case Examples // Before & After
                </div>
                <div className={styles.content}>
                    <div className='row g-0' style={{ padding: "1em" }}>
                        <div className='col-sm-6' style={{ padding: "1em" }}>
                            <img
                                src={state.otherImgs.Img1}
                                className={`img-fluid`}
                                alt=''
                            />
                        </div>
                        <div
                            className='col-sm-6 d-flex flex-column justify-content-between gap-3'
                            style={{ padding: "1em" }}
                        >
                            <div className='col-12'>
                                <img
                                    src={state.otherImgs.Img2}
                                    className={`img-fluid`}
                                    alt=''
                                />
                            </div>
                            <div className='col-12 d-flex gap-2'>
                                <div className='col-6'>
                                    <img
                                        src={state.otherImgs.Img3}
                                        className={`img-fluid`}
                                        alt=''
                                    />
                                </div>
                                <div className='col-6'>
                                    <img
                                        src={state.otherImgs.Img4}
                                        className={`img-fluid`}
                                        alt=''
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
