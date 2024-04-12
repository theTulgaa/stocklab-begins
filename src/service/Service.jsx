import React from 'react'
import { CtmContainer } from '../CtmContainer'
import bull from "../assets/back_bull.png";
import { ChildComp2 } from './ChildComp2';
import { useEffect, useState } from 'react'

export const Service = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return (
    <div id='service'>
         <CtmContainer 
        height="100vh"
        width="100%"
        bgColor="#111212"
        backgroundImage={bull}
        bgWidth={screenSize > 576 ? 1216: 608}
        bgHeight={screenSize > 576 ? 800: 575}
        bgLeft={screenSize > 576 ? -750 : -350}
        bgTop={screenSize > 576 ? 20 : 70}
        childComp={<ChildComp2 />}
    />
    </div>
  )
}
