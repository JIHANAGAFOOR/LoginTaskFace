import './Login.css'
import { Container, Row,Col, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import PropTypes from 'prop-types'
import Toastify from 'toastify-js'
import Redirect, { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
export default function Login(){
  const navigate=useNavigate()
const [username,setUsername]=useState();
const [password,setPassword]=useState();
const click=(e)=>{
e.preventDefault()
  if(username==="foo" && password==="bar"){
    navigate("/home")
  }
else{
  Toastify({
    text: "Incorrect Password",
    duration: 3000,
    // newWindow: true,
    // close: true,
    // stopOnFocus: true, // Prevents dismissing of toast on hover
    offset: {
          x: 300, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 500 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
    style: {
      background: "red",
    }
  }).showToast();
}
}
    return(
        <div  className="Login-main">
            <Container>
  <Row>
    <Col >
    <div className='main_box_logo'>
    <img src="https://th.bing.com/th/id/R.984b01c0f67ba27e34818766d543b630?rik=n%2fD8PKDRpIaMTQ&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2ff%2f1%2fI%2fk%2fG%2fW%2fwhite-un-logo-md.png&ehk=sxHESAuI23sPSQ8nUDPwN1ORKzsbwdCXX3tHAnUMhio%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" className='logo'/>
    <h1 className='logo-text'>Dec</h1>
    </div>
    </Col>
  </Row>
  <Row className='blankSpace'>
  </Row>
  <Row>
  <Col></Col>
    <Col xs={10} lg={5} >
        <div  className='login-box'>
            <h5 className='heading-text'>User Login</h5>
            <p className="small-text">Enter username and password</p>
        <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter email" className='input'   name="email"onChange={e=>setUsername(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" className='input'  name="password"onChange={e=>setPassword(e.target.value)} />
  </Form.Group >

 
     <Button  type="submit" className='btn'  onClick={click}>
      <h4 className='button-text'>LOGIN</h4>
  </Button>
    
     
  
  
</Form>
        </div>
    </Col>
    <Col></Col>
  </Row>
</Container>
        </div>
    )
}
 