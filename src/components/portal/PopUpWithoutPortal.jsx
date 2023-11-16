import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const PopUpWithoutPortal = ({closeModal,showModal}) => {


  return (
    <div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Your Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your modal content goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          {/* Add additional buttons or actions here */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PopUpWithoutPortal