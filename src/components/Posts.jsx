import React, { useState } from 'react'
import { Button, Card, Col, FormControl, InputGroup, Modal, Row } from 'react-bootstrap';

function Posts() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Row>
            <Col md={{ span: 6, offset: 3, order: 'first' }}>
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
            </Col>
            <Col md={{ span: 6, offset: 3, order: 'last' }}
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <Button style={{
                    width: '100%',
                    marginTop: 20
                }} variant="primary" onClick={handleShow}>
                    New message
                    </Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Body>
                        <InputGroup style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <FormControl style={{
                                minHeight: '30px',
                                width: '100%',
                            }}
                                placeholder="Title"
                                as="textarea" aria-label="Title" />
                            <FormControl style={{
                                marginTop: 5,
                                minHeight: '240px',
                                width: '100%',
                            }}
                                placeholder="Message"
                                as="textarea" aria-label="With textarea" />
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleClose}>
                                    Сancel
                                    </Button>
                                <Button variant="success">
                                    Send
                                    </Button>
                            </Modal.Footer>
                        </InputGroup>
                    </Modal.Body>
                </Modal>
            </Col>
        </Row>
    )
}

export default Posts
