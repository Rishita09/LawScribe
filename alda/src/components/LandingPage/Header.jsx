import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/images/LawScribe_transparent-.png';  // Ensure this path is correct
import avatar from '/images/avatar.png';
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here, e.g., clearing tokens, etc.
    // Redirect to the landing page or login page
    navigate('/signin'); // Or another route if needed
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img
            src={logo}
            alt="AI Lawyer Logo"
            className="logo-image"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/summarize">
            Summarize Legal Docs
          </Nav.Link>
          <Nav.Link as={Link} to="/create-legal-doc">
            Create Legal Docs
          </Nav.Link>
          <Nav.Link as={Link} to="/interactive-ai">
            Interactive AI
          </Nav.Link>
          <Nav.Link as={Link} to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Sign Up
          </Nav.Link>
          <NavDropdown
            title={<img src={avatar} alt="Avatar" className="avatar-icon" />}
            id="basic-nav-dropdown"
            className="ml-auto"
          >
            <NavDropdown.Item as={Link} to="/profile">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/settings">
              Settings
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
