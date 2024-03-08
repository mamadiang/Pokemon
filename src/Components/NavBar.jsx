import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


const NavBar = () => {
  // Etats -> States

  // Comportements -> Les functions

  // Affichage -> return
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          
          <Link to={"/"}>
            <Navbar.Brand href="#home">Accueil</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              
                <Nav.Link><Link to={"/pokemons"}>Pokemons</Link></Nav.Link>
              

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  
                <Link to={"/generations"}> Génération1</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                   
                    Généartion 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                    Génération 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Génération 4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
