import React from 'react';
import UserCard from './UserCard';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function CardContainer() {
    return (
        <div className="card-container">
            <Row>
                <Col md={4}>
                    <UserCard cardName="Card 1" />
                </Col>
                <Col md={4}>
                    <UserCard cardName="Card 2" />
                </Col>
                <Col md={4}>
                    <UserCard cardName="Card 3" />
                </Col>

            </Row>

        </div>
    )
}
