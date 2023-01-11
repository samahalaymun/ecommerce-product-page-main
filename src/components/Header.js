import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,

} from "react-bootstrap";
import AvatarImage from "../assets/image-avatar.png";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";
import ButtonWithIcon from "./common/ButtonWithIcon";


function Header() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
 const { cartItems } = useContext(CartContext);
  return (
    <>
      <Navbar className="nav">
        <Container className="navbar-container">
          <ButtonWithIcon
            className="mobileMenuBtn"
            variant="secondary"
            onClick={() => {
              document.body.classList.toggle("mobile-menu");
              document
                .querySelector(".nav-items")
                .classList.toggle("mobile-menu");
              setToggle((prev) => !prev);
            }}
          >
            {toggle ? (
              <i className="fa-solid fa-x"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </ButtonWithIcon>
          <Navbar.Brand href="#" className="nav-brand">
            <h1>sneakers</h1>
          </Navbar.Brand>
          <Nav className="me-auto px-4 nav-items">
            <Nav.Link href="#Collections" className="nav-item px-3">
              Collections
            </Nav.Link>
            <Nav.Link href="#Men" className="nav-item px-3">
              Men
            </Nav.Link>
            <Nav.Link href="#Women" className="nav-item px-3">
              Women
            </Nav.Link>
            <Nav.Link href="#About" className="nav-item px-3">
              About
            </Nav.Link>
            <Nav.Link href="#Contact" className="nav-item px-3">
              Contact
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className="right-nav-side">
              <ButtonWithIcon
                className="cart-shopping"
                onClick={(e) => {
                  e.preventDefault();
                  setCartIsOpen((prev) => !prev);
                }}
                variant="secondary"
              >
                {<i className="fa fa-cart-shopping"></i>}
              </ButtonWithIcon>
              {cartItems.length>0 &&<span className="cart-items-count">{cartItems.length}</span>}
            </div>
            <img
              src={AvatarImage}
              className="rounded-circle nav-avatar"
              alt="Avatar"
            />
          </Navbar.Collapse>
          {cartIsOpen && <Cart />}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
