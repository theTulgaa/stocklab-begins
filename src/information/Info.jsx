import React from 'react'
import { CtmContainer } from '../CtmContainer'
import bull from "../assets/back_bull.png";
import { ChildComp3 } from './ChildComp3';
import { useEffect, useState } from 'react'

export const Info = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return (
    <div id='info'>
         <CtmContainer 
        height="100vh"
        width="100%"
        bgColor="#111212"
        backgroundImage={bull}
        bgWidth={screenSize > 576 ? 1000 : 682}
        bgHeight={screenSize > 576 ? 1000 : 645}
        bgLeft={screenSize > 576 ? 100 : -154}
        bgTop={screenSize > 576 ? -10 : 83}
        childComp={<ChildComp3 />}
    />
    </div>
  )
}
