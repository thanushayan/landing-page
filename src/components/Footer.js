import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import logo from '../asset/logo.png';


function Footer() {
  return (
    <>
      <div className='text-light footer navFont' style={{ backgroundColor: '#6B3CC9' }}>
        <Container className='p-4 font-popins leading-6 tracking-wider'>
          <Row>

        
            <Col sm={5} className='text-start'>
              <ul className='list-unstyled '>
                <li className='py-2'>
                <img
                  alt="Logo"
                  src={logo} // Replace with the path to your logo image
                  width="200"            
                 className="d-inline-block align-center"
                 />
                </li>
                <li className='py-2'>
                  <p>Your goal is our target. Not anything in between. We use
                    online marketing platforms and tools to achieve single
                    objective-your business results.
                  </p>
                </li>               
              </ul>
            </Col>
            <Col sm={1}></Col>
            <Col sm={3} className='text-start'>
              <ul className='list-unstyled'>
                <li className='py-2'>
                  <h4 style={{ color: 'white' }}>Our Technologies</h4>
                </li>
                <li><p>ReactJS</p></li>
                <li><p>Gatsby</p></li>
                <li><p>NextJS</p></li>
                <li><p>NodeJS</p></li>
                <li><p>GraphQL</p></li>
                <li><p>Laravel</p></li>
              </ul>
            </Col>
            <Col sm={3} className='text-start'>
              <ul className='list-unstyled'>
                <li className='py-2'>
                  <h4 style={{ color: 'white' }}>Our Services</h4>
                </li>
                <li><p>Social Media Marketing</p></li>
                <li><p>Web & Mobile App Development</p></li>
                <li><p>Data & Analytics</p></li>
                <li><p>Google Marketing Solutions</p></li>
                <li><p>Search Engine Optimization</p></li>
              </ul>
            </Col>
          </Row>
          <hr className="my-4 mx-auto" style={{ width: '50%' }} />


          <Row>
            <Col sm={12}>
            <p className='copyright text-center'>
  Privacy Policy | Terms & Conditions
</p>

            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer