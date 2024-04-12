import React from 'react'
import { ImageContainer } from '../ImageContainer'
import info1 from "../assets/info1.png"
import info2 from "../assets/info2.png"
import info3 from "../assets/info3.png"
import "./ChildComp3.css"
import { useEffect, useState } from 'react'

export const ChildComp3 = () => {

  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return (
    <div className='d-flex justify-content-center align-items-center flex-column info-main'>
        <div>
        <ImageContainer height={screenSize > 576 ? null : 45} width={null} styling={null} imgPath={info2} />
        </div>
        <div className='info-main-last'>
            <div className=""><ImageContainer height={screenSize > 576 ? 280 : 177} width={null} styling={null} imgPath={screenSize > 576 ? info1 : info3} /></div>
            <div className=""> <ImageContainer height={screenSize > 576 ? 280 : 177} width={null} styling={null} imgPath={screenSize > 576 ? info1 : info3} /></div>
            <div className=""> <ImageContainer height={screenSize > 576 ? 280 : 177} width={null} styling={null} imgPath={info3} /></div>
            <div className=""> <ImageContainer height={screenSize > 576 ? 280 : 177} width={null} styling={null} imgPath={screenSize > 576 ? info1 : info3} /></div>
            <div className=""> <ImageContainer height={screenSize > 576 ? 280 : 177} width={null} styling={null} imgPath={screenSize > 576 ? info1 : info3} /></div>
            <div className=""> <ImageContainer height={screenSize > 576 ? 280 : 177} width={null} styling={null} imgPath={screenSize > 576 ? info1 : info3} /></div>
        </div>
    </div>
  )
}
