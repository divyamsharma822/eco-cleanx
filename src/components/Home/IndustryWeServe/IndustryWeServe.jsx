import React, { useState } from "react";
import "./IndustryWeServe.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";

import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";

import IndustryWeServe_Img1 from "../../../assests/IndustryWeServe_Img1.png";
import IndustryWeServe_Img2 from "../../../assests/IndustryWeServe_Img2.png";
import IndustryWeServe_Img3 from "../../../assests/IndustryWeServe_Img3.png";
import IndustryWeServe_Img4 from "../../../assests/IndustryWeServe_Img4.png";
import IndustryWeServe_Img5 from "../../../assests/IndustryWeServe_Img5.png";

import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";

const IndustryWeServe = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    const sliderSettings = {
        576: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
            centeredSlides: false,
        },
    };

    return (
        <div className='IndustryWeServe'>
            <div className='centerContent'>
                <div className='heading'>Industries we serve</div>
                <div className='content'>
                    Our cleaning products are specifically formulated for use in
                    industrial settings. They are highly effective and
                    environment friendly. making them a responsible choice for
                    any business. Whether you need to clean machinery, floors,
                    surfaces, or any other type of equipment, we have a product
                    that can get the job done.
                </div>
                <Swiper
                    onSwiper={(swiper) => setSwiperRef(swiper)}
                    breakpoints={sliderSettings}
                    slidesPerView={"2"}
                    centeredSlides={true}
                    spaceBetween={30}
                    loop={true}
                    loopedSlides={5}
                    mousewheel={false}
                    freeMode={true}
                    modules={[Mousewheel]}
                    className='mySwiper'
                >
                    {[
                        { img: IndustryWeServe_Img1, name: "Government" },
                        { img: IndustryWeServe_Img2, name: "Automotive" },
                        { img: IndustryWeServe_Img3, name: "Railways" },
                        { img: IndustryWeServe_Img4, name: "Hospitality" },
                        { img: IndustryWeServe_Img5, name: "Textile" },
                    ].map((curr, index) => (
                        <SwiperSlide key={index}>
                            <div className='row g-0 slide ms-1'>
                                <img src={curr.img} alt='' className='img' />
                                <div className='cardheading'>{curr.name}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className='navigations'>
                        <IoIosArrowDropleftCircle
                            size={40}
                            onClick={prevHandler}
                            className='icon'
                        />
                        <IoIosArrowDroprightCircle
                            size={40}
                            onClick={nextHandler}
                            className='icon'
                        />
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default IndustryWeServe;
