import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Dropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../App.css"; // 

export const CustomNavbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <Navbar
      expand="lg"
      className="shadow-sm sticky-top py-3"
      style={{ background: "linear-gradient(90deg, #7b2ff7, #f107a3)" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white fs-3">
          🛍️ Luxora
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="bg-light"
        />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel"
              className="fw-bold text-white"
            >
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
  {/* This Nav is ONLY for Offcanvas (vertical links) */}
  <Nav className="flex-column gap-2 d-lg-none">
    <Nav.Link as={Link} to="/" className="text-white">
      Home
    </Nav.Link>
    <Nav.Link as={Link} to="/about" className="text-white">
      About
    </Nav.Link>
    <Nav.Link as={Link} to="/contact" className="text-white">
      Contact
    </Nav.Link>
  </Nav>
</Offcanvas.Body>

{/* This Nav is for normal (desktop) view → horizontal */}
<Nav className="d-none d-lg-flex gap-3">
  <Nav.Link as={Link} to="/" className="text-white">
    Home
  </Nav.Link>
  <Nav.Link as={Link} to="/about" className="text-white">
    About
  </Nav.Link>
  <Nav.Link as={Link} to="/contact" className="text-white">
    Contact
  </Nav.Link>
</Nav>

        </Navbar.Offcanvas>

        {!user ? (
          <div className="d-flex gap-2 ms-2">
            <Button as={Link} to="/login" variant="light" size="sm">
              Login
            </Button>
            <Button
              as={Link}
              to="/register"
              style={{ background: "#f107a3", border: "none" }}
              size="sm"
            >
              Sign Up
            </Button>
          </div>
        ) : (
          <Dropdown align="end" className="ms-2">
            <Dropdown.Toggle variant="light" className="border-0">
              <FaUserCircle size={24} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Header>
                👋 {user.firstName} {user.lastName}
              </Dropdown.Header>
              <Dropdown.Item onClick={handleLogout} className="text-danger">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Container>
    </Navbar>
  );
};
