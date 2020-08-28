import React from 'react'
import Card from "react-bootstrap/Card";

export default function UserCard({ cardName }) {
    return (

        <Card>
            <Card.Img
                variant="top"
                src="https://via.placeholder.com/355x160?text=placeholder"
            />
            <Card.Body>
    <Card.Title>{cardName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
            </Card.Text>
            </Card.Body>
        </Card>

    )
}
