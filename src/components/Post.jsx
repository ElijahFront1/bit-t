import React from 'react'
import { Card } from 'react-bootstrap'

function Post() {
    return (
        <Card style={{
            width: '100%',
            marginTop: 10
        }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Edit</Card.Link>
                <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default Post
