import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
        
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/Ls449TbQ/kisspng-kfc-fried-chicken-restaurant-logo-clip-art-kfc-portugal-1-5-5-seedroid-5b6aca92e8e936-373635.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <strong>KFC</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header