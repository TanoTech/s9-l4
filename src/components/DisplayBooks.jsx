import React from "react";
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import { Container, Row, Col, Card, ListGroup, Carousel } from "react-bootstrap";
import './DisplayBooks.css';

class DisplayBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAsin: null
        };
    }

    handleBookClick = (asin) => {
        this.setState({ selectedAsin: asin });
        console.log("Libro selezionato:", asin)
    };

    render() {
        const { selectedAsin } = this.state;
        const { searchQuery } = this.props;

        const filteredFantasy = searchQuery ? fantasy.filter((libro) =>
            libro.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) : fantasy ;

        const filteredHorror = searchQuery ? horror.filter((libro) =>
            libro.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) : horror;

        const filteredHistory = searchQuery ? history.filter((libro) =>
            libro.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) : history;

        const filteredScifi = searchQuery ? scifi.filter((libro) =>
            libro.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) : scifi;
        const filteredRomance = searchQuery ? romance.filter((libro) =>
            libro.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) : romance;
    
        return (
            <Container>
                <h1>Fantasy</h1>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            {filteredFantasy.slice(0, 6).map((libro, index) => (
                                <Col key={index} lg={2} md={3} xs={7} sm={5}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} className="img-fluid" />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredFantasy.slice(6, 12).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredFantasy.slice(12, 18).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredFantasy.slice(18, 24).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredFantasy.slice(24, 30).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                </Carousel>
                <h1>History</h1>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            {filteredHistory.slice(0, 6).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {filteredHistory.slice(6, 12).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {history.slice(12, 18).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {history.slice(18, 24).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {history.slice(24, 30).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                </Carousel>
                <h1>Horror</h1>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            {horror.slice(0, 6).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {horror.slice(6, 12).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {horror.slice(12, 18).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {horror.slice(18, 24).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {horror.slice(24, 30).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                </Carousel>
                <h1>Romance</h1>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            {romance.slice(0, 6).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {romance.slice(6, 12).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {romance.slice(12, 18).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {romance.slice(18, 24).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {romance.slice(24, 30).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                </Carousel>
                <h1>Scifi</h1>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            {scifi.slice(0, 6).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {scifi.slice(6, 12).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {scifi.slice(12, 18).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {scifi.slice(18, 24).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />
                                        <Card.Body className={selectedAsin === libro.asin ? "d-block" : "d-none"}>
                                            <Card.Title>{libro.title}</Card.Title>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            {scifi.slice(24, 30).map((libro, index) => (
                                <Col key={index} md={2} xs={12} sm={6}>
                                    <Card style={{ width: '100%' }}
                                        className={selectedAsin === libro.asin ? "selected-book" : ""}
                                        onClick={() => this.handleBookClick(libro.asin)}>
                                        <Card.Img variant="top" src={libro.img} />

                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> {libro.price} €</ListGroup.Item>
                                            <ListGroup.Item><a href="#">Compra adesso</a></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        );
    }
}


export default DisplayBooks; 