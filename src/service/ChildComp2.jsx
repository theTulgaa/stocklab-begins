import React from 'react'
import { ImageContainer } from '../ImageContainer'
import serv1 from "../assets/serv1.png"
import serv2 from "../assets/serv2.png"
import serv3 from "../assets/serv3.png"
import serv4 from "../assets/serv4.png"
import serv5 from "../assets/serv5.png"
import line from "../assets/line.png"
import "./ChildComp2.css"
import { useEffect, useState } from 'react'

export const ChildComp2 = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return (
    <div className='d-flex justify-content-center align-items-center flex-column service-main'>
        <div className="">
            <ImageContainer height={null} width={350} styling={null} imgPath={serv3} />
        </div>
        <div><ImageContainer height={null} width={200} styling={null} imgPath={serv4} /></div>
        <div className="d-flex service-main-last">
            <div className=""><ImageContainer height={null} width={screenSize > 576 ? 300: null} styling={null} imgPath={serv2} /></div>
            <div className='mdl-sec'><ImageContainer height={null} width={null} styling={null} imgPath={screenSize > 576 ? serv5 : line} /></div>
            <div className=""><ImageContainer height={null} width={screenSize > 576 ? 270 : null} styling={null} imgPath={serv1} /></div>
        </div>
    </div>
  )
}
