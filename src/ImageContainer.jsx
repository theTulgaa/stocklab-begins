import React from 'react'

export const ImageContainer = ( {height, width, styling, imgPath} ) => {
  return (
    <div style={styling}>
        <img src={imgPath} alt="" style={{height: height, width: width}} />
    </div>
  )
}
