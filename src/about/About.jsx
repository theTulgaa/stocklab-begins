import React from 'react'
import bull from "../assets/back_bull.png";
import { CtmContainer } from '../CtmContainer'
import { ChildComp5 } from '../footer/ChildComp5';
import {ImageSlider } from "../ImageSlider"
import abt1 from "../assets/abt1.png"
import abt2 from "../assets/abt2.png"
import abt3 from "../assets/about3.png"
import abt4 from "../assets/about4.png"
import abt5 from "../assets/about5.png"
import abt6 from "../assets/about6.png"
import abt7 from "../assets/about7.png"
import abt8 from "../assets/about8.png"
import abt9 from "../assets/abt12.png"
import abt10 from "../assets/abt14.png"
/*
isButton: true, // Image is also a button
command: () => { /* Your command function here
*/
export const About = ( {screenSize} ) => {
  const images3 = [
    {id: 1, src: abt2},
    {id: 2, src: abt1},
  ]
  const isButtonArray = [false, true];
  const buttonFunctions = [
    null,
    () => {}
  ];
  const style1 = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: "center",
    marginTop: "30px"
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
  const slides = [
    {
      style: { backgroundColor: 'blue' },
      content: [
        {
          type: 'img',
          src: abt5,
          style: {
            margin: "40px 0px 0px 400px"
          },
          imgStyle: {
            width: "200px"
          }
        },
        {
          type: 'img',
          src: abt7,
          style: {
            margin: "30px 0px 0px 600px"
          },
          imgStyle: {
            height: "400px"
          }
        }
      ]
    },
    {
      style: { backgroundColor: 'red' },
      content: [
        {
          type: 'img',
          src: abt3,
          style: {
            margin: "20px 0px 0px 400px"
          },
          imgStyle: {
            height: "30px",
          }
        },
        {
          type: 'img',
          src: abt6,
          style: {
            margin: "20px 0px 0px 400px"
          },
          imgStyle: {
            height: "50px"
          }
        },
        {
          type: 'img',
          src: abt4,
          style: {
            margin: "20px 0px 0px 250px"
          },
          imgStyle: {
            height: "400px"
          }
        }
      ]
    },
  ];
  const images5 = [
    {id: 1, src: abt9, styling: {}},
    {id: 2, src: abt10, styling: {marginTop: "50px"}},
  ]
  const isButtonArray1 = [false, false];
  const buttonFunctions1 = [
    () => {},
    () => {}
  ];
  const style2 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "130px"
  }
  return (
    <div id='about'>
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
        childComp={< ChildComp5 imgs={images3} styling={style1} isButtonArray={isButtonArray} buttonFunctions={buttonFunctions} buttonStyle={buttonStyle} divStyle={null}/>}
    />
         <CtmContainer 
        height="80vh"
        width="100%"
        bgColor="#111212"
        backgroundImage={bull}
        bgWidth={900}
        bgHeight={800}
        bgLeft={100}
        bgTop={0}
        childComp={<ImageSlider slides={slides} showButtons={false} showDotButtons={true}/>}
    />
    </>
      ) : <CtmContainer 
      height="100vh"
      width="100%"
      bgWidth={682}
      bgHeight={645}
      bgLeft={-154}
      bgTop={83}
      backgroundImage={bull}
      bgColor="#111212"
      childComp={<ChildComp5 imgs={images5} styling={style2} isButtonArray={isButtonArray1} buttonFunctions={buttonFunctions1}/>}
      />}
    </div>
  )
}
