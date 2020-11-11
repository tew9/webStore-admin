import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/index";
import Input from "../../components/UI/Inputs";
import { login } from "../../actions";
import { Redirect } from "react-router";

/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const {authenticated, authenticating, user} = useSelector(state=>state.auth)
  const dispatch = useDispatch();

  const adminLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
  }
  
  if(authenticating){
    return <p>Loading...</p>
  }
  
  if(authenticated && user.role === 'admin'){
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
              <Input
                class="forBasicEmail"
                type="email"
                required={true}
                value={email}
                onChange={onEmailChange}
                placeholder="Enter your Email"
                errorMessage={notice}
              />

              <Input
                class="forBasicPassword"
                type="password"
                value={password}
                required={true}
                onChange={onPassChange}
                placeholder="Password"
                min={6}
                errorMessage={props.errorMessage}
              />

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
