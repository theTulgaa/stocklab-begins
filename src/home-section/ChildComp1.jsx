import React from 'react';
import anujin from "../assets/home_img.png";
import home1 from "../assets/home1.png";
import home2 from "../assets/text3.png";
import "./ChildComp1.css";

export const ChildComp1 = ( {childcomp} ) => {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center child-div'>
        <div className="section1">
            <div className=""><img src={home1} alt="" className='img1' /></div>
            <div className=""><img src={home2} alt="" className='img2'/></div>
            <div className=""><button className='home-btn'>Дэлгэрэнгүй</button></div>
        </div>
        <div className=""><img src={anujin} alt="" className='img3'/></div>
    </div>
    <div>
      {childcomp}
    </div>
    </>
  )
}
