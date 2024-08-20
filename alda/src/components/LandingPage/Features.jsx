import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Features.css';

const Features = () => {
  return (
    <Container>
      <Row>
        <Col>
          <i className="fa fa-gavel fa-3x"></i>
          <h3>Legal Advice</h3>
          <p>Get legal advice in real-time.</p>
        </Col>
        <Col>
          <i className="fa fa-users fa-3x"></i>
          <h3>Client Management</h3>
          <p>Manage your clients efficiently.</p>
        </Col>
        <Col>
          <i className="fa fa-file-alt fa-3x"></i>
          <h3>Document Review</h3>
          <p>Review documents with AI assistance.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
