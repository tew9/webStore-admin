import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layout/index";
import { signup } from '../../actions/signup.action';
import Input from "../../components/UI/Inputs";
import { Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";
/**
 * @author
 * @function Signup
 **/

const Signup = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isRegistered, registering, message, error} = useSelector(state=>state.signup)
  const {authenticated} = useSelector(state => state.auth);
  
  if(authenticated){
    return <Redirect to='/'/>
  }
  if(registering){
    return <p>Loading...</p>
  }

  const adminRegistration = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      role: 'admin'
    };
    dispatch(signup(user));
  }

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "5rem" }}>
          <Col md={{ span: 6, offset: 3 }}>
          {isRegistered? <span style={{color: "red"}}>{message}</span>:
            <span style={{color: "red"}}>{error}</span> }
            <Form onSubmit={adminRegistration}>
              <Input
                class="forBasicFirstName"
                type="text"
                value={firstName}
                required={true}
                onChange = {(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                errorMessage={props.errorMessage}
                min={3}
              />

              <Input
                class="forBasicLastName"
                type="text"
                value={lastName}
                onChange = {(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required={true}
                errorMessage={props.errorMessage}
                min={3}
              />

              <Input
                class="forBasicEmail"
                type="Email"
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                errorMessage="We'll never share your email"
              />

              <Input
                class="forBasicPassword"
                type="Password"
                placeholder="Password"
                errorMessage={props.errorMessage}
                min={6}
                required={true}
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />

              <Button variant="outline-success" type="submit" block>
                Signup
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
