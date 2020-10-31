import React from 'react'
import { Form } from 'react-bootstrap';

/**
* @author
* @function Inputs
**/

const Inputs = (props) => {
  return(
    <Form.Group controlId={props.class}>
      <Form.Control type={props.type} required minLength={props.min} placeholder={props.placeholder} 
      />

      <Form.Text className="text-muted">
        { props.errorMessage}
      </Form.Text>
    </Form.Group>
  )
 }

export default Inputs