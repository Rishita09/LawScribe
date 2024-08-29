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
          <NavDropdown title="Create Legal Docs" id="legal-docs-dropdown">
            <NavDropdown.Item as={Link} to="/create-legal-doc/property-sale-agreement">
              Property Sale Agreement
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/employee-service-agreement">
              Employee Service Agreement
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/general-power-of-attorney">
              General Power of Attorney
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/deed-of-lease">
              Deed of Lease
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/defamation-notice">
              Defamation Notice
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/salary-non-payment-notice">
              Salary Non-Payment Notice to Company
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/loan-agreement-with-security">
              Loan Agreement with Security
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/mutual-divorce-petition">
              Mutual Divorce Petition
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/restraining-order">
              Restraining Order
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/gift-deed-for-giving-cash">
              Gift Deed for Giving Cash to Son/Daughter
            </NavDropdown.Item>
          </NavDropdown>
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
