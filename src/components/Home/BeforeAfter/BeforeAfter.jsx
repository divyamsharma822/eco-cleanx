import React, { useState } from "react";
import "./BeforeAfter.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import BeforeAfterSliderComponent from "../BeforeAfterSliderComponent/BeforeAfterSliderComponent";
import { HiArrowNarrowRight } from "react-icons/hi";

import before1 from "../../../assests/before1.png";
import after1 from "../../../assests/after1.png";

import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";

const BeforeAfter = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    SwiperCore.use([Pagination]);

    return (
        <div className='BeforeAfter'>
            <div className='centerContent'>
                <div className='content'>
                    <Swiper
                        onSwiper={(swiper) => setSwiperRef(swiper)}
                        slidesPerView={"1"}
                        centeredSlides={true}
                        spaceBetween={30}
                        loop={true}
                        loopedSlides={4}
                        allowTouchMove={false}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className='mySwiper'
                    >
                        {[1, 2, 3, 4].map((curr, index) => (
                            <SwiperSlide key={index}>
                                <div className='row g-0'>
                                    <div className='col-md-5 left d-flex flex-row flex-md-column align-items-center align-items-md-start justify-content-between justify-content-md-start '>
                                        <div>
                                            <div className='leftHeading'>
                                                Before & After
                                            </div>
                                            <div className='leftsubHeading'>
                                                Kitchen Cleaning
                                            </div>
                                        </div>
                                        <div
                                            className='nextBtn'
                                            onClick={nextHandler}
                                        >
                                            Next{" "}
                                            <HiArrowNarrowRight size={20} />
                                        </div>
                                    </div>
                                    <div className='col-md-7 right'>
                                        <BeforeAfterSliderComponent
                                            img1={after1}
                                            img2={before1}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default BeforeAfter;
