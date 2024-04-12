import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const AliceCar = ( {styling, settings, comp} ) => {
  return (
    <>
    <div>{comp}</div>
    <div style={styling}>
      <AliceCarousel 
      {...settings}
      />
    </div>
    </>
  )
}
