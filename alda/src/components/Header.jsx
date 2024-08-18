import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '/images/LawScribe_transparent-.png';  // Ensure this path is correct

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img
            src={logo}
            alt="AI Lawyer Logo"
            style={{ width: '40px', marginRight: '10px' }}
          />
          AI Lawyer
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/summarize">
            Summarize Legal Docs
          </Nav.Link>
          <Nav.Link as={Link} to="/create">
            Create Legal Docs
          </Nav.Link>
          <Nav.Link as={Link} to="/interactive-ai">
            Interactive AI
          </Nav.Link>
          <Nav.Link as={Link} to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/signin">
            Sign In
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Sign Up
          </Nav.Link>
        </Nav>
        <NavDropdown title="Menu" id="basic-nav-dropdown" className="ml-auto">
          <NavDropdown.Item as={Link} to="/profile">
            Profile
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/settings">
            Settings
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/logout">
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
