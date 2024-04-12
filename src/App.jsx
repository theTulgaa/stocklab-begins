import { useState, useEffect } from 'react'
import './App.css'
import { Mynav } from './nav-section/Mynav';
import { Home } from './home-section/Home';
import { Service } from './service/Service';
import { Info } from './information/Info';
import { Instruction } from './instruction/Instruction';
import { Footer } from './footer/Footer';
import { About } from './about/About';


function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  useEffect(() => {
    document.title = "STOCKLAB";
  }, []);

  return (
    <>
    <Mynav />
    <Home />
    <Service />
    <Info />
    <Instruction />
    <About screenSize={screenSize}/>
    <Footer />
    </>
  )
}

export default App
