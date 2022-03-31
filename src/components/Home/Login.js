import React from "react";
import { Form, Button, Card, Col, Container, Row } from "react-bootstrap";
import {Link} from 'react-router-dom';

export const Login = () => {
  return (
    <Container id="main-container" className="d-grid h-100 mt-5 p-5 ">
      <Row >
        <Col></Col>
        <Col >
          <Card>
            <Card className=" fw-normal  text-center bg-warning"> <h4 className="">Sing In </h4></Card>

            <Form id="sign-in-form" className="text-center p-3 w-100   ">

              <Form.Group controlId="sign-in-email-address " className="mt-3" >
                <Form.Control type="email" size="small" placeholder="Email address" autoComplete="username" className="position-relative" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="sign-in-password">
                <Form.Control type="password" size="small" placeholder="Password" autoComplete="current-password" className="position-relative" />
              </Form.Group>

              <Form.Group className=" d-flex justify-content-md-between" controlId="remember-me">
                <Form.Check label="Remember me" />

                <Button variant="success " className="text-light" size="md"  >
                  Sing In
                </Button>
              </Form.Group>

              <div className="d-grid ">

              </div>
            </Form>
          </Card >
  <a href="" className="text-dark " style={{fontSize:"20px",fontFamily:"serif", }}><Link to="/SignUp" className="text-dark" >You already have account yet?</Link>  </a>
          </Col>

        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
