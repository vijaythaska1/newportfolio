import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { FaLock, FaEnvelope } from 'react-icons/fa';

const PrivateContent = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:Vijaythaska1@gmail.com';
  };

  return (
    <Container className="d-flex justify-content-center align-items-center container-fluid main_container" style={{ minHeight: '100vh' }}>
      <Card 
        className="shadow-lg text-center" 
        style={{ 
          maxWidth: '500px', 
          borderRadius: '15px', 
          background: 'linear-gradient(145deg, #f0f0f0, #e0e0e0)',
          border: 'none'
        }}
      >
        <Card.Header 
          className="bg-dark text-white d-flex align-items-center justify-content-center" 
          style={{ 
            borderTopLeftRadius: '15px', 
            borderTopRightRadius: '15px',
            padding: '1rem'
          }}
        >
          <FaLock size={30} className="me-3" />
          <h3 className="mb-0">Private Content</h3>
        </Card.Header>
        
        <Card.Body className="p-4">
          <div className="mb-4">
            <p className="text-muted">
              <strong>Restricted Access</strong>
            </p>
            <p className="lead">
              The details of this project are confidential and not publicly available.
            </p>
          </div>
          
          <Card 
            border="warning" 
            className="mb-3 text-center"
            style={{ 
              backgroundColor: 'rgba(255, 193, 7, 0.1)',
              borderRadius: '10px'
            }}
          >
            <Card.Body>
              <Card.Text className="text-muted">
                For more information or special access, please reach out directly.
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Button 
            variant="outline-dark" 
            onClick={handleContactClick}
            className="w-100 d-flex align-items-center justify-content-center"
          >
            <FaEnvelope className="me-2" />
            Contact for Details
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PrivateContent;