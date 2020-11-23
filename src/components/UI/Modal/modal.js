import React from 'react'
import { Modal, Button } from 'react-bootstrap';

/**
* @author
* @function Modal
**/

const ModalUI = (props) => {
  return(
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   )

 }

export default ModalUI