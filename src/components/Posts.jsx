import React, { useEffect, useState } from 'react'
import { Button, Col, FormControl, InputGroup, Modal, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAndComments } from '../store/actions';
import Post from './Post';

function Posts() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPostsAndComments())
    }, []);

    const posts = useSelector(({ reducer }) => reducer.data)
    console.log(posts);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Row>
            <Col md={{ span: 6, offset: 3, order: 'first' }}>
                {posts && posts.map(item => {
                    <Post
                        key={posts.id}
                    />
                })}
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
