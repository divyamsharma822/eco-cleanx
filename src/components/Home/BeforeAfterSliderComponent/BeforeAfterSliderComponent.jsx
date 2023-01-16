import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import "./BeforeAfterSliderComponent.scss";

const BeforeAfterSliderComponent = ({ img1, img2 }) => {
    const FIRST_IMAGE = {
        imageUrl: img1
      };
      const SECOND_IMAGE = {
        imageUrl: img2
      };
    return (
        <div className="BeforeAfterSliderComponent">
            <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
            />
        </div>
    );
};

export default BeforeAfterSliderComponent;
