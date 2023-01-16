import React from "react";
import styles from "./Footer.module.scss";
import darklogo from "../../assests/darklogo.png";
import Accordion from "../Accordion/Accordion";
import { Link } from "react-router-dom";
import FacebookLogo from "../../assests/Facebook.png";
import LinkedInLogo from "../../assests/LinkedIn.png";
import YoutubeLogo from "../../assests/Youtube.png";

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div
                className={`row g-0 d-flex justify-content-between ${styles.row}`}
            >
                <div className={`col-md-4 d-flex flex-column gap-3`}>
                    <img
                        src={darklogo}
                        className='img-fluid'
                        alt=''
                        width={150}
                    />
                    <span className='d-block d-md-none'>
                        <Accordion
                            question={"Quick Links"}
                            answer={
                                <div className='d-flex flex-column gap-2 mt-4'>
                                    <Link
                                        to='/Home'
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <div className={styles.accordionBtn}>
                                            Home
                                        </div>
                                    </Link>

                                    <Link
                                        to='/AboutUs'
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <div className={styles.accordionBtn}>
                                            About us
                                        </div>
                                    </Link>

                                    <Link
                                        to='/PrivacyPolicy'
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <div className={styles.accordionBtn}>
                                            Privacy Policy
                                        </div>
                                    </Link>

                                    <Link
                                        to='/Products'
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <div className={styles.accordionBtn}>
                                            Products
                                        </div>
                                    </Link>
                                </div>
                            }
                        />
                    </span>
                    <span className='d-block d-md-none'>
                        <Accordion
                            question={"Products"}
                            answer={
                                <div className='d-flex flex-column gap-2 mt-4'>
                                    <Link
                                        to='/Home'
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <div className={styles.accordionBtn}>
                                            CX 18, 51
                                        </div>
                                    </Link>

                                    <Link
                                        to='/AboutUs'
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <div className={styles.accordionBtn}>
                                            CX 69,45,96
                                        </div>
                                    </Link>

                                    <Link
                                        to='/PrivacyPolicy'
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <div className={styles.accordionBtn}>
                                            CX Handwash
                                        </div>
                                    </Link>

                                    <Link
                                        to='/Products'
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <div className={styles.accordionBtn}>
                                            CX Dishwash
                                        </div>
                                    </Link>

                                    <Link
                                        to='/Products'
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                    >
                                        <div className={styles.accordionBtn}>
                                            CX Detergent
                                        </div>
                                    </Link>
                                </div>
                            }
                        />
                    </span>
                    <div className='d-flex flex-column gap-1'>
                        <div className={styles.question}>Factory</div>
                        <div className={`${styles.answer}`}>
                            Factory K-211, 2nd Floor,Ansa Industrial Estate,
                            Saki Vihar Road, Saki Naka, Andheri (East), Mumbai
                            400072
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-1'>
                        <div className={styles.question}>Communications</div>
                        <div className={styles.answer}>
                            Communications 76/78, Nagdevi Street, Ground Floor,
                            Mumbai 400003
                        </div>
                    </div>
                </div>
                <div className={`col-md-2 d-none d-md-block`}>
                    <div className='d-flex flex-column gap-1'>
                        <div className={styles.question}>Quick Links</div>
                        <div className={styles.answer}>
                            <div className='d-flex flex-column gap-4 mt-4'>
                                <Link
                                    to='/Home'
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <div className={styles.accordionBtn}>
                                        Home
                                    </div>
                                </Link>

                                <Link
                                    to='/AboutUs'
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <div className={styles.accordionBtn}>
                                        About us
                                    </div>
                                </Link>

                                <Link
                                    to='/PrivacyPolicy'
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <div className={styles.accordionBtn}>
                                        Privacy Policy
                                    </div>
                                </Link>

                                <Link
                                    to='/Products'
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <div className={styles.accordionBtn}>
                                        Products
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col-md-2 d-none d-md-block`}>
                    <div className='d-flex flex-column gap-1'>
                        <div className={styles.question}>Products</div>
                        <div className={styles.answer}>
                            <div className='d-flex flex-column gap-4 mt-4'>
                                <Link
                                    to='/Home'
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <div className={styles.accordionBtn}>
                                        CX 18, 51
                                    </div>
                                </Link>

                                <Link
                                    to='/AboutUs'
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <div className={styles.accordionBtn}>
                                        CX 69,45,96
                                    </div>
                                </Link>

                                <Link
                                    to='/PrivacyPolicy'
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <div className={styles.accordionBtn}>
                                        CX Handwash
                                    </div>
                                </Link>

                                <Link
                                    to='/Products'
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <div className={styles.accordionBtn}>
                                        CX Dishwash
                                    </div>
                                </Link>

                                <Link
                                    to='/Products'
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <div className={styles.accordionBtn}>
                                        CX Detergent
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`col-md-2 d-flex flex-column gap-4 mt-3 mt-md-0`}
                >
                    <div className='d-flex flex-column gap-1'>
                        <div className={styles.question}>Phone</div>
                        <div className={styles.answer}>+91 (22) 40900000</div>
                    </div>
                    <div className='d-flex flex-column gap-1'>
                        <div className={styles.question}>E-Mail</div>
                        <div className={styles.answer}>Sales@ecocleanx.in</div>
                    </div>
                    <div className='d-flex flex-row gap-4 align-items-center'>
                        <img
                            src={FacebookLogo}
                            alt='facebook'
                            width={30}
                            className='img-fluid'
                        />
                        <img
                            src={LinkedInLogo}
                            alt='facebook'
                            width={30}
                            className='img-fluid'
                        />
                        <img
                            src={YoutubeLogo}
                            alt='facebook'
                            width={30}
                            className='img-fluid'
                        />
                    </div>
                </div>
            </div>
            <div className={styles.hr}></div>
            <div className={styles.copyright}>
                Copyright © 2023 • Ecocleanx • All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;
