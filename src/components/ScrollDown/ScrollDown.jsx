import React from "react";
import "./ScrollDown.scss";

const ScrollDown = () => {
    return (
        <div className='mouse_scroll' onClick={() =>  window.scrollBy(0, 500)}>
            <div className='mouse'>
                <div className='wheel'></div>
            </div>
            <div>
                <span className='m_scroll_arrows unu'></span>
                <span className='m_scroll_arrows doi'></span>
                <span className='m_scroll_arrows trei'></span>
            </div>
        </div>
    );
};

export default ScrollDown;
