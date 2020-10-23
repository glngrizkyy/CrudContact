import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faPlaneDeparture,
  faTrain,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="link" expand="md">
        <Container>
          <NavbarBrand href="/"> BeliTiket</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#">
                  {" "}
                  <FontAwesomeIcon icon={faCalendarAlt} /> Event
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <FontAwesomeIcon icon={faPlaneDeparture} /> Pesawat
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <FontAwesomeIcon icon={faTrain} /> Kereta
                </NavLink>
              </NavItem>
            </Nav>
            <NavLink href="#">
              <FontAwesomeIcon icon={faUserLock} /> Admin BeliTiket
            </NavLink>
          </Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </div>
  );
};

export default NavbarComponent;
