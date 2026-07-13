import React from 'react'


function Banner() {
    return (
        <div>
            <section className="display-img">
                <div id="buttonbox">

                    <button id="prevbutton"><i className="fa-solid fa-chevron-left"></i></button>
                    <button id="nextbutton"><i className="fa-solid fa-chevron-right"></i></button>

                </div>

                <div className="dis-left">
           
             <img
               src="/images/IMG_20221119_212310.jpg"
               alt="Banner"
               className="banner-img"
             />
                    <div id="scroll_indicator">
                        <div className="scroll_dot activeScroll_dot"></div>
                        <div className="scroll_dot"></div>
                        <div className="scroll_dot"></div>
                        <div className="scroll_dot"></div>
                        <div className="scroll_dot"></div>
                        <div className="scroll_dot"></div>
                        <div className="scroll_dot"></div>
                    </div>
                    {/* <a href="" id="dis_left_a"></a> */}

                </div>
                <div className="dis-right">
                    <div className="dis-right1">
                        <img src="images/New Project 5 [295ECFC].png" alt='image' className='left-up' />
                        {/* <a href="" id="dis_left_up_a"></a> */}
                    </div>
                    <div className="float-down-container">
                        <img src="images/IMG_20221122_215737.jpg" alt='image' className='left-down'/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner;