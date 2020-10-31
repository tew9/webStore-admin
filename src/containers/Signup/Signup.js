import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layout/index";
import Inputs from "../../components/UI/Inputs/index";

/**
 * @author
 * @function Signup
 **/

const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "5rem" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Inputs
                class="forBasicFirstName"
                type="text"
                placeholder="First Name"
                errorMessage={props.errorMessage}
                min={3}
              />

              <Inputs
                class="forBasicLastName"
                type="text"
                placeholder="Last Name"
                errorMessage={props.errorMessage}
                min={3}
              />

              <Inputs
                class="forBasicEmail"
                type="Email"
                placeholder="Enter your Email"
                errorMessage="We'll never share your email"
              />

              <Inputs
                class="forBasicPassword"
                type="Password"
                placeholder="Password"
                errorMessage={props.errorMessage}
                min={6}
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
