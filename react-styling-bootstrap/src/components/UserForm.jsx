import React from "react";
import Form from "react-bootstrap/Form";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';


export default function UserForm() {
    return (
        <Col md={6}>
            <Header title="Submit a comment" />
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="name" placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Button variant="form" type="submit">Send</Button>
            </Form>
        </Col>

    );
}
