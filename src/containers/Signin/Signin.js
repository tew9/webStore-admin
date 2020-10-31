import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout/index";
import Inputs from "../../components/UI/Inputs";

/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "5rem" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
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
