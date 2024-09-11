import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/images/LawScribe_transparent-.png';  
import avatar from '/images/avatar.png';
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/signin'); 
  };

  return (
    <Navbar expand="lg" className="custom-navbar"> 
      <Navbar.Brand className="navbar-brand">
        <Link to="/">
          <img
            src={logo}
            alt="AI Lawyer Logo"
            className="logo-image"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/summarize" className="nav-link"> 
            Summarize Legal Docs
          </Nav.Link>
          <NavDropdown title="Create Legal Docs" id="legal-docs-dropdown" className="nav-dropdown-toggle">
            <NavDropdown.Item as={Link} to="/create-legal-doc/property-sale-agreement" className="nav-dropdown-item"> 
              Property Sale Agreement
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/employee-service-agreement" className="nav-dropdown-item">
              Employee Service Agreement
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/general-power-of-attorney" className="nav-dropdown-item">
              General Power of Attorney
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/deed-of-lease" className="nav-dropdown-item">
              Deed of Lease
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/defamation-notice" className="nav-dropdown-item">
              Defamation Notice
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/salary-non-payment-notice" className="nav-dropdown-item">
              Salary Non-Payment Notice to Company
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/loan-agreement-with-security" className="nav-dropdown-item">
              Loan Agreement with Security
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/mutual-divorce-petition" className="nav-dropdown-item">
              Mutual Divorce Petition
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/restraining-order" className="nav-dropdown-item">
              Restraining Order
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/create-legal-doc/gift-deed-for-giving-cash" className="nav-dropdown-item">
              Gift Deed for Giving Cash to Son/Daughter
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/interactive-ai" className="nav-link">
            Interactive AI
          </Nav.Link>
          <Nav.Link as={Link} to="/blog" className="nav-link">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/signup" className="nav-link">
            Sign Up
          </Nav.Link>
          <NavDropdown
          title={
            <img src={avatar} alt="Avatar" className="avatar-icon nav-dropdown-toggle" />
          }
          id="basic-nav-dropdown"
          >
          <NavDropdown.Item as={Link} to="/profile" className="nav-dropdown-item">
            Profile
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/settings" className="nav-dropdown-item">
            Settings
          </NavDropdown.Item>
          <NavDropdown.Item onClick={handleLogout} className="nav-dropdown-item">
            Logout
          </NavDropdown.Item>
        </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;