import React, {useEffect, useState} from 'react'
import { CtmContainer } from '../CtmContainer'
import bull from "../assets/back_bull.png";
//import { ChildComp4 } from './ChildComp4';
import { ImageContainer } from '../ImageContainer';
import inst2 from "../assets/inst6.png"
import inst3 from "../assets/inst7.png"
import inst4 from "../assets/ins-btn.png"
import inst5 from "../assets/inst-20.png"
import { ChildComp5 } from '../footer/ChildComp5';
import { ChildComp4 } from './ChildComp4';
import {ImageSlider } from "../ImageSlider"
import i1 from "../assets/inst-1.png"
import i2 from "../assets/inst-2.png"
import i3 from "../assets/inst-3.png"
import i4 from "../assets/inst-4.png"
import i5 from "../assets/inst-5.png"
import i6 from "../assets/inst-6.png"
import i7 from "../assets/inst-7.png"
import i8 from "../assets/inst-8.png"
import i9 from "../assets/inst-9.png"
import i10 from "../assets/inst-10.png"
import i11 from "../assets/inst-11.png"
import i12 from "../assets/inst4.png"
import i13 from "../assets/inst5.png"
import i14 from '../assets/line1.png'

export const Instruction = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  const images3 = [
    {id: 1, src: screenSize > 576 ? inst3 : inst5, styling: {}},
    {id: 2, src: screenSize > 576 ? inst2 : inst4, styling: {marginTop: screenSize > 576 ? "0px" : "20px"}},
  ]
  const isButtonArray = [false, true];
  const buttonFunctions = [
    null,
    () => {console.log("hello world")}
  ];
  const style1 = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: "center",
    marginTop: "30px",
    flexDirection: screenSize > 576 ? "row" : "column"
  }
  const buttonStyle = [
    {},
    {
      borderRadius: "50px",
      border: "none",
      outline: "none",
      backgroundColor: "#01C669",
      background: "none"
    }
  ]
  const conStyle = {
    backgroundColor: "white",
    width: "50%",
    height: "200px",
    borderRadius: "15px",
    padding: "10px",
    marginTop: "50px",
    marginLeft: "100px"
  }
  const slides = [
    {
      style: {backgroundColor: "red"},
      content: [
        {
          type: "img",
          src: i2,
          style: {

          },
          imgStyle: {
            height: "40px",
            width: "140px"

          }
        },
        {
          type: "img",
          src: i5,
          style: {

          },
          imgStyle: {
            height: "1px",
            width: "140px"

          }
        },
        {
          type: "img",
          src: i11,
          style: {
            marginBottom: "20px"
          },
          imgStyle: {
            height: "48px",
            width: "100%"
          }
        },
        {
          type: "img",
          src: i6,
          style: {
            display: "inline",
            outline: "none",
            border: "none",
            background: "none",
            marginBottom: "-20px"
          },
          isButton: true,
          command: () => {},
          imgStyle: {
            height: "24px",
            width: "124px"
          }
        },
        {
          type: "img",
          src: i1,
          isButton: true,
          command: () => {},
          style: {
            display: "inline"
          },
          imgStyle: {
            height: "24px",
            width: "24px"
          }
        }
      ]
    },
    {
      style: {},
      content: [
        {
          type: "img",
          src: i3,
          style: {

          },
          imgStyle: {
            height: "40px",
            width: "140px"

          }
        },
        {
          type: "img",
          src: i5,
          style: {

          },
          imgStyle: {
            height: "1px",
            width: "140px"
          }
        },
        {
          type: "img",
          src: i10,
          style: {
            marginBottom: "20px"
          },
          imgStyle: {
            height: "48px",
            width: "100%"
          }
        },
        {
          type: "img",
          src: i6,
          isButton: true,
          command: () => {},
          style: {
            display: "inline"
          },
          imgStyle: {
            height: "24px",
            width: "124px"
          }
        },
        {
          type: "img",
          src: i1,
          isButton: true,
          command: () => {},
          style: {
            display: "inline"
          },
          imgStyle: {
            height: "24px",
            width: "24px"
          }
        }
      ]
    },
    {
      style: {},
      content: [
        {
          type: "img",
          src: i2,
          style: {

          },
          imgStyle: {
            height: "40px",
            width: "140px"
          }
        },
        {
          type: "img",
          src: i5,
          style: {

          },
          imgStyle: {
            height: "1px",
            width: "140px"
          }
        },
        {
          type: "img",
          src: i11,
          style: {
            marginBottom: "20px"
          },
          imgStyle: {
            height: "48px",
            width: "100%"
          }
        },
        {
          type: "img",
          src: i6,
          isButton: true,
          command: () => {},
          style: {
            display: "inline"
          },
          imgStyle: {
            height: "24px",
            width: "124px"

          }
        },
        {
          type: "img",
          src: i1,
          isButton: true,
          command: () => {},
          style: {
            display: "inline"
          },
          imgStyle: {
            height: "24px",
            width: "24px"
          }
        }
      ]
    }
  ]
  return (
    <div id='instruction'>
      {screenSize > 576 ? (
        <>
         <CtmContainer 
         height="20vh"
         width="100%"
         bgColor="#01C696"
         backgroundImage={null}
         bgWidth={null}
         bgHeight={null}
         bgLeft={null}
         bgTop={null}
         childComp={< ChildComp5 imgs={images3} styling={style1} isButtonArray={isButtonArray} buttonFunctions={buttonFunctions} buttonStyle={buttonStyle}/>}
     />
          <CtmContainer 
         height="80vh"
         width="100%"
         bgColor="#111212"
         backgroundImage={bull}
         bgWidth={1000}
         bgHeight={1000}
         bgLeft={100}
         bgTop={-200}
         childComp={<ChildComp4 />}
     />
     </>
      ) :
      <>
       <CtmContainer 
         height="20vh"
         width="100%"
         bgColor="#01C696"
         backgroundImage={null}
         bgWidth={null}
         bgHeight={null}
         bgLeft={null}
         bgTop={null}
         childComp={< ChildComp5 imgs={images3} styling={style1} isButtonArray={isButtonArray} buttonFunctions={buttonFunctions} buttonStyle={buttonStyle}/>}
     />
      <CtmContainer 
      height="80vh"
      width="100%"
      bgColor="#111212"
      backgroundImage={bull}
      bgWidth={682}
      bgHeight={645}
      bgLeft={-154}
      bgTop={20}
      childComp={<ImageSlider slides={slides} showButtons={true} showDotButtons={false} conStyle={conStyle}/>}
      backgroundImage2={i14}
      bgTop2={290}
      bgLeft2={140}
  />
  </>}
    </div>
  )
}
