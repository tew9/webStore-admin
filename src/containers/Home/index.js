import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout>
      <Jumbotron style={{margin:'5rem', background: 'white'}} className='text-center'>
        <h1>Welcome to Admin dashboard</h1>
        <p>orem ipsum dolor sit amet, cum ullum quando legimus no. Eam scripta viderer neglegentur et. Pro dolorem delicatissimi ad. Cum ea munere possit omittantur. Pri saepe oratio ut. Qui fabellas verterem an, fierent detracto ei qui. Utinam argumentum te has, laboramus voluptaria ad ius, te vix illud percipit.</p>
      </Jumbotron>
    </Layout>
   )

 }

export default Home