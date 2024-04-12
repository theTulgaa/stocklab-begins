import React from 'react'
import { ChildComp5 } from '../footer/ChildComp5'
import { ButtonComp } from "../ButtonComp"
import "./ChildComp4.css"
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


export const ChildComp4 = () => {
    const isButtonArray1 = [false, false, false];
    const buttonFunctions1 = [
      () => {},
      () => {},
      () => {}
    ];
    const isButtonArray2 = [false, false, false];
    const buttonFunctions2 = [
      () => {},
      () => {},
      () => {}
    ];
    const isButtonArray3 = [false, false, false];
    const buttonFunctions3 = [
      () => {},
      () => {},
      () => {}
    ];
    const btnStyle1 = [
        {
            border: "none",
            outline: "none",
            background: "none"
        },
        {
            border: "none",
            outline: "none",
            background: "none"
        }
    ]
    const function1 = [
        () => {},
        () => {}
    ]
    const function2 = [
        () => {},
        () => {}
    ]
    const function3 = [
        () => {},
        () => {}
    ]
    const btnImages1 = [
        i6, i1
    ]
    const btnImages2 = [
        i8, i1
    ]
    const btnImages3 = [
        i7, i1
    ]
    const images1 = [
        {id: 1, src: i2},
        {id: 2, src: i5},
        {id: 3, src: i11}
      ];
      const images2 = [
        {id: 1, src: i4},
        {id: 2, src: i5},
        {id: 3, src: i10}
      ];
      const images3 = [
        {id: 1, src: i3},
        {id: 2, src: i5},
        {id: 3, src: i9}
      ];
      const style1 = {
        display: "flex",
        flexDirection: "column",
        rowGap: "15px"
      };
      
  return (
    <div className='d-flex outter-con'>
        <button className='btn1'><img src={i12} alt="" /></button>
        <div className="inner-con">
            <div className=''><ChildComp5 isButtonArray={isButtonArray1} buttonFunctions={buttonFunctions1} styling={style1} imgs={images1}/></div>
            <div><ButtonComp styling={null} functions={function1} images={btnImages1} btnStyle={btnStyle1}/> </div>
        </div>
        <div className="inner-con">
            <div className=''><ChildComp5 isButtonArray={isButtonArray2} buttonFunctions={buttonFunctions2} styling={style1} imgs={images2}/></div>
            <div><ButtonComp styling={null} functions={function2} images={btnImages2} btnStyle={btnStyle1}/> </div>
        </div>
        <div className="inner-con">
            <div className=''><ChildComp5 isButtonArray={isButtonArray3} buttonFunctions={buttonFunctions3} styling={style1} imgs={images3}/></div>
            <div><ButtonComp styling={null} functions={function3} images={btnImages3} btnStyle={btnStyle1}/> </div>
        </div>
        <button className='btn1'><img src={i13} alt="" /></button>
    </div>
  )
}
