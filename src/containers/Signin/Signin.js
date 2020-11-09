import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/index";
import Inputs from "../../components/UI/Inputs";
import { login } from "../../actions";
import { Redirect } from "react-router";
import * as authAction from '../../actions/auth.action'
/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const auth = useSelector(state=>state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    if(!auth.authenticated  && localStorage.getItem('token')){
      dispatch(authAction.isUserLoggedIn());
    }
  })

  const adminLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  }

  if(auth.authenticated){
    return <Redirect to='/'/>
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    if(e.target.value !== undefined)
    {
      setNotice("We'll not share your email")
    }
  };

  const onPassChange = (e) => {
    setPassword(e.target.value)
  };

  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "5rem" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={adminLogin}>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={onEmailChange}
                />

                <Form.Text className="text-muted">
                  {notice}
                </Form.Text>
              </Form.Group>
              {/* <Inputs
                class="forBasicEmail"
                type="email"
                value={email}
                onChange={onEmailChange}
                placeholder="Enter your Email"
                errorMessage="We'll never share your email"
              /> */}

              {/* <Inputs
                class="forBasicPassword"
                type="password"
                value={password}
                onChange={onPassChange}
                placeholder="Password"
                min={6}
                errorMessage={props.errorMessage}
              /> */}

              <Form.Group>
                <Form.Control
                  type='password'
                  value={password}
                  onChange={onPassChange}
                  placeholder='Enter Password'
                />

                <Form.Text className="text-muted">
                  {props.errorMessage}
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Signin
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
