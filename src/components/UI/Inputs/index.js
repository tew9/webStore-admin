import React from 'react'
import { Form } from 'react-bootstrap';

/**
* @author
* @function Input
**/

const Input = (props) => {
  return(
    <Form.Group className={props.class}>
      <label for={props.label}>{props.label}</label>
      <Form.Control type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} required={props.required} min={props.min}
      />
      <Form.Text className="text-muted">
        { props.errorMessage}
      </Form.Text>
    </Form.Group>
  )
 }

export default Input