import React, { useState } from 'react';
import "./ImageSlider.css"
import left from "./assets/inst4.png"
import right from "./assets/inst5.png"
import line from "./assets/line1.png"

export const ImageSlider = ({ slides, showButtons, showDotButtons, conStyle}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="">
      {showButtons && <button onClick={goToPrevSlide} className='btn btnR'><img src={left} alt="" /></button>}
      <div className="">
        <div className="" style={conStyle}>
          {slides[currentIndex].content.map((element, index) => (
            <div key={index} style={element.style}>
              {element.type === 'img' && (
                element.isButton ? (
                  <button onClick={element.command} className='btn-style'>
                    <img src={element.src} alt={`Slide ${currentIndex}`} style={element.imgStyle} />
                  </button>
                ) : (
                  <img src={element.src} alt={`Slide ${currentIndex}`} style={element.imgStyle}  />
                )
              )}
            </div>
          ))}
        </div>
      </div>
      {showButtons && <button onClick={goToNextSlide} className='btn btnL'><img src={right} alt="" /></button>}
      {showDotButtons && (
        <div className="dot-container">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={index === currentIndex ? 'dot-button active1' : 'dot-button'}
              onClick={() => goToSlide(index)}
            >
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

