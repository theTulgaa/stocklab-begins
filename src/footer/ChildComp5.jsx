import React from 'react'
import { ImageContainer } from '../ImageContainer';

export const ChildComp5 = ({imgs, styling, isButtonArray, buttonFunctions, buttonStyle}) => {
  return (
    <div style={styling}>
      {imgs.map((imageUrl, index) => (
        <div key={imageUrl.id} style={imageUrl.styling}>
          {isButtonArray[index] ? (
            <button onClick={buttonFunctions[index]} style={buttonStyle[index]}>
              <ImageContainer height={null} width={null} imgPath={imageUrl.src} />
            </button>
          ) : (
              <ImageContainer height={null} width={null} imgPath={imageUrl.src}/>
          )}
        </div>
      ))}
    </div>
  )
}
