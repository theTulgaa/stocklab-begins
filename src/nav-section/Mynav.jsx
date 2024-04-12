import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import brand_logo from "../assets/end12.png";
import fb from "../assets/fb-logo.png";
import insta from "../assets/insta-logo.png";
import "./Mynav.css";


export const Mynav = () => {
  return (
    <Navbar expand="lg" className="my-nav" sticky='top'>
      <Container>
        <Navbar.Brand href="#home"><img src={brand_logo} alt="" className='brand-img'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto inner-nav">
            <Nav.Link href="#about" className='nav-link'>Бидний тухай</Nav.Link>
            <NavDropdown title="Үйлчилгээ" id="basic-nav-dropdown">
              <NavDropdown.Item href="#service">Үйлчилгээ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#info" className='nav-link'>Мэдээлэл</Nav.Link>
            <Nav.Link href="#instruction" className='nav-link'>Заавар</Nav.Link>
          </Nav>
          <div className='d-flex align-items-center log-in'>
            <div className=""><img src={fb} alt="" /></div>
            <div className=""><img src={insta} alt="" /></div>
            <div className=""><button className='enter-btn'>Нэвтрэх</button></div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
