import React from 'react'
import { CtmContainer } from '../CtmContainer'
import bull1 from "../assets/end9.png"
import bull2 from "../assets/end10.png"
import { AliceCar } from '../AliceCar'
import img1 from "../assets/end3.png";
import img2 from "../assets/end4.png";
import img3 from "../assets/end5.png";
import img4 from "../assets/end6.png";
import img5 from "../assets/end7.png";
import img6 from "../assets/end8.png";
import { ImageContainer } from '../ImageContainer';
import bull from "../assets/back_bull.png";
import ftr1 from "../assets/footer1.png";
import { ChildComp5 } from './ChildComp5'
import ftr2 from "../assets/end11.png"
import ftr3 from "../assets/end12.png"
import ftr4 from "../assets/footer3.png"
import ftr5 from "../assets/footer4.png"
import ftr6 from "../assets/end13.png"
import ftr7 from "../assets/ftr30.png"
import ftr8 from "../assets/ftr40.png"
import { useEffect, useState } from 'react'


export const Footer = () => {
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
    {id: 6, url: img6}
  ]
  const images3 = [
    {id: 1, src: ftr5, styling: {}},
    {id: 2, src: ftr4, styling: {display: screenSize > 576 ? "block" : "none"}},
  ]
  const isButtonArray = [false, false];
  const buttonFunctions = [
    () => {},
    () => {}
  ];
  const style1 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: screenSize > 576 ? "137px" : "60px",
  }
  const style3 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "50px"
  } 
  const items = images.map(image => <ImageContainer key={image.id} height={screenSize > 576 ? null : 40} width={null} styling={style1} imgPath={image.url}/>);
  const style2 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF80',
    marginTop: "50px",
    height: screenSize > 576 ? "211px" : "85px"
  };
  
  const settings = {
    mouseTracking: true,
    autoPlay: true,
    autoPlayInterval: 1000,
    disableDotsControls: true,
    disableButtonsControls: true,
    infinite: true,
    items: items,
    responsive: {
      0: { items: 3 },
      576: { items: 4 },
      1024: { items: 5 }
    }
    
  };
  const images2 = [
    {id: 1, src: screenSize > 576 ? ftr3 : ftr8, styling: {}},
    {id: 2, src: screenSize > 576 ? ftr2 : ftr7, styling: {}},
  ];
  const style4 = {
    display: 'flex',
    marginTop: screenSize > 576 ? "50px" : "10px",
    justifyContent: 'space-around',
    flexDirection: screenSize > 576 ? "row" : "column",
    marginLeft: screenSize > 576 ? 0 : "20px"
  };
  const style5 = {
    display: 'flex',
    marginTop: "8px",
    justifyContent: screenSize > 576 ? 'space-around' : "center",
    alignItems: screenSize > 576 ? null : "flex-start"
    
  };
  
  return (
    <div>
          <CtmContainer 
        height={screenSize > 576 ? "55vh" : "30vh"}
        width="100%"
        bgColor="#01C696"
        backgroundImage={bull2}
        backgroundImage2={bull1}
        bgWidth={screenSize > 576 ? 460 : 198}
        bgHeight={screenSize > 576 ? 300 : 198}
        bgLeft={screenSize > 576 ? 170 : -90}
        bgTop={screenSize > 576 ? -10 : -10}
        childComp={<AliceCar styling={style2} settings={settings} comp={< ImageContainer  height={null} width={null} styling={style3} imgPath={screenSize > 576 ? ftr1 : ftr6}/>} />}
        bgWidth2={screenSize > 576 ? 363 : 189}
        bgHeight2={screenSize > 576 ? 363 : 198}
        bgLeft2={screenSize > 576 ? 1100 : 340} 
        bgTop2={screenSize > 576 ? 70 : 130}
    />
    <CtmContainer 
        height={screenSize > 576 ? "40vh" : "20vh"}
        width="100%"
        bgColor="#111212"
        backgroundImage={screenSize > 576 ? bull : null}
        backgroundImage2={screenSize > 576 ? bull : null}
        bgWidth={1461}
        bgHeight={1382}
        bgLeft={-900}
        bgTop={-300}
        childComp={< ChildComp5 imgs={images2} styling={style4} isButtonArray={isButtonArray} buttonFunctions={null} />}
        bgWidth2={1461}
        bgHeight2={1382}
        bgLeft2={500} 
        bgTop2={-200}
    />
    <CtmContainer 
        height="5vh"
        width="100%"
        bgColor="#17916C"
        backgroundImage={null}
        backgroundImage2={null}
        bgWidth={null}
        bgHeight={null}
        bgLeft={null}
        bgTop={null}
        childComp={< ChildComp5 imgs={images3} styling={style5} isButtonArray={isButtonArray} buttonFunctions={null} divStyle={null}/>}
        bgWidth2={null}
        bgHeight2={null}
        bgLeft2={null} 
        bgTop2={null}
    />
    </div>
  )
}
