import React from "react";
import { Form, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <Container id="main-container" className="d-grid h-100 mt-5 p-5 ">
      <Row >
        <Col></Col>
        <Col >
          <Card>
            <Card className=" fw-normal  text-center bg-warning"> <h4 className="">Sing Up </h4></Card>

            <Form id="sign-in-form" className="text-center p-3 w-100   ">
              <Form.Group controlId="sign-in-email-address " className="mt-3" >
                <Form.Control type="text" size="small" placeholder="First Name" autoComplete="username" className="position-relative" />
              </Form.Group>
              <Form.Group controlId="sign-in-email-address " className="mt-3" >
                <Form.Control type="text" size="small" placeholder="Last Name" autoComplete="username" className="position-relative" />
              </Form.Group>
              <Form.Group controlId="sign-in-email-address " className="mt-3" >
                <Form.Control type="email" size="small" placeholder="Email address" autoComplete="username" className="position-relative" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="sign-in-password">
                <Form.Control type="password" size="small" placeholder="Password" autoComplete="current-password" className="position-relative" />
              </Form.Group>

              <Form.Group className=" d-flex justify-content-md-between" controlId="remember-me">
                {/* <Form.Check label="Remember me" /> */}
                <a href="" className="text-dark " style={{ fontSize: "20px", fontFamily: "serif", }}><Link to="/Login" className="text-dark" >Please Login!!!</Link>  </a>

                <Button variant="success " className="text-light" size="md"  >
                  Sing Up
                </Button>
              </Form.Group>

              <div className="d-grid ">
              </div>
            </Form>
          </Card >
        </Col>

        <Col></Col>
      </Row>
    </Container>
  );
};

export default SignUp;
