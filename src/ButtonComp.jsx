import React from 'react'
import { ImageContainer } from './ImageContainer'

export const ButtonComp = ( {images, styling, functions, btnStyle} ) => {
  return (
    <div style={styling}>
        {images.map((image, index) => (
        <button key={index} onClick={functions[index]} style={btnStyle[index]}><ImageContainer key={index} height={null} width={null} imgPath={images[index]} /></button>
      ))}
    </div>
  )
}
