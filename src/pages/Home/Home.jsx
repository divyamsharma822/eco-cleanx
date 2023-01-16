import React from "react";
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import BeforeAfter from "../../components/Home/BeforeAfter/BeforeAfter";
import CoverPage from "../../components/Home/CoverPage/CoverPage";
import FAQ from "../../components/Home/FAQ/FAQ";
import IndustryWeServe from "../../components/Home/IndustryWeServe/IndustryWeServe";
import OurProducts from "../../components/Home/OurProducts/OurProducts";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.Home}>
            <CoverPage />
            <AboutUs />
            <WhyChooseUs />
            <IndustryWeServe />
            <OurProducts />
            <BeforeAfter />
            <FAQ />
        </div>
    );
};

export default Home;
