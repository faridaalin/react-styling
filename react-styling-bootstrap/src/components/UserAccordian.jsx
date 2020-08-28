import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";


export default function UserAccordian() {
    return (
        <Accordion className="d-md-none">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Lorem
</Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        Suspendisse massa diam, efficitur eu massa euismod, pretium
    lacinia magna.{" "}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    Ipsum
</Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        Suspendisse massa diam, efficitur eu massa euismod, pretium
    lacinia magna.{" "}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                    Dolo
</Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        Suspendisse massa diam, efficitur eu massa euismod, pretium
    lacinia magna.{" "}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                    Porta
</Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                    <Card.Body>
                        Suspendisse massa diam, efficitur eu massa euismod, pretium
    lacinia magna.{" "}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
