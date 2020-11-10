import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import './index.css'
/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout>
      <Row>
        <Container fluid>
          <Col md={2} className = "sidebar">Side Bar</Col>
          <Col md={10}>container</Col>
        </Container>
      </Row>
      {/* <Jumbotron style={{margin:'5rem', background: 'white'}} className='text-center'>
        <h1>Welcome to Admin dashboard</h1>
        <p>orem ipsum dolor sit amet, cum ullum quando legimus no. Eam scripta viderer neglegentur et. Pro dolorem delicatissimi ad. Cum ea munere possit omittantur. Pri saepe oratio ut. Qui fabellas verterem an, fierent detracto ei qui. Utinam argumentum te has, laboramus voluptaria ad ius, te vix illud percipit.</p>
      </Jumbotron> */}

    </Layout>
   )

 }

export default Home