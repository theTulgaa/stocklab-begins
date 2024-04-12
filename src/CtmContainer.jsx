import React from 'react';
import "./CtmContainer.css";

export const CtmContainer = ({height, width, bgColor, backgroundImage, backgroundImage2, bgWidth, bgHeight, bgLeft, bgTop, childComp, bgWidth2, bgHeight2, bgLeft2, bgTop2}) => {
    const styling = {
        height: height,
        width: width,
        backgroundColor: bgColor,
    }
    const imageStyle = {
        position: 'absolute',
        top: bgTop,
        left: bgLeft,
        zIndex: -1,
        width: bgWidth,
        height: bgHeight
    };
    const imageStyle2 = {
        position: 'absolute',
        top: bgTop2,
        left: bgLeft2,
        zIndex: -1,
        width: bgWidth2,
        height: bgHeight2
    }
      
    return (
    <div style={styling} className='custom-outter-div'>
        <img src={backgroundImage} alt="" style={imageStyle} />
        <img src={backgroundImage2} alt="" style={imageStyle2} />
        {childComp}
    </div>
  )
}
