import React from 'react';
import { Row, Stack, Col, Card, Button } from 'react-bootstrap';
import Navigation from '../components/Navigation';

function Home() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main style={{ marginTop: '110px' }}>
                <Row>
                    <Col md={8}>
                        <Card className="bg-dark text-white">
                            <Card.Img src="/tokyo60.webp" alt="Tokyo60 Keyboard" height='650px' />
                            <Card.ImgOverlay>
                                <Card.Title>Tokyo60</Card.Title>
                            </Card.ImgOverlay>
                            <Card.Body>
                                <Button>Add To Cart</Button>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Stack height='706px'>
                            <Card className="bg-dark text-white">
                                <Card.Img src="/tofu60.webp" alt="Tofu60 Keyboard" height='272px' />
                                <Card.ImgOverlay>
                                    <Card.Title>Tofu60</Card.Title>
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Button>Add To Cart</Button>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="bg-dark text-white">
                                <Card.Img src="/GH60.webp" alt="GH60 Keyboard" height='272px' />
                                <Card.ImgOverlay>
                                    <Card.Title>GH60</Card.Title>
                                </Card.ImgOverlay>
                                <Card.Body>
                                    <Button>Add To Cart</Button>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Stack>
                    </Col>
                </Row>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Home;