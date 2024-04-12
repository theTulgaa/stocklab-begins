import React from 'react'
import { CtmContainer } from '../CtmContainer'
import bull from "../assets/back_bull.png";
import { ChildComp1 } from './ChildComp1';
import img1 from "../assets/market1.png";
import img2 from "../assets/market2.png";
import img3 from "../assets/market3.png";
import img4 from "../assets/market4.png";
import img5 from "../assets/market5.png";
import img6 from "../assets/market6.png";
import { ImageContainer } from '../ImageContainer';
import { AliceCar } from '../AliceCar';
import { useEffect, useState } from 'react'


export const Home = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  const images = [
    {id: 1, url: img1},
    {id: 2, url: img2},
    {id: 3, url: img3},
    {id: 4, url: img4},
    {id: 5, url: img5},
    {id: 6, url: img6},
  ]
  const style1 = {
    // kinda useless but it can be used later.
    marginRight: "50px",
  }
  const style2 = {
    marginTop: screenSize > 576 ? "80px" : "120px",
  }
  const items = images.map(image => <ImageContainer key={image.id} height={screenSize > 576 ? 100: 50} width={screenSize > 576 ? 250 : 180} styling={style1} imgPath={image.url} />);
  const settings = {
    mouseTracking: true,
    autoPlay: true,
    autoPlayInterval: 1000,
    disableDotsControls: true,
    disableButtonsControls: true,
    infinite: true,
    items: items,
    responsive: {
      0: { items: 2 },
      576: { items: 2 },
      1024: { items: 5 }
    }
    
  };
  return (
    <div id='home'>
        <CtmContainer 
        height="100vh"
        width="100%"
        bgColor="#111212"
        backgroundImage={bull}
        bgWidth={screenSize > 576 ? 750: 500}
        bgHeight={screenSize > 576 ? 700: 500}
        bgLeft={screenSize > 576 ? 150: -200}
        bgTop={screenSize > 576 ? 0: 20}
        childComp={<ChildComp1 childcomp={<AliceCar styling={style2} settings={settings}/>} />}
    />
    </div>

  )
}
