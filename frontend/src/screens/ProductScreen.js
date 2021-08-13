import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Card, Image, ListGroup } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';
import Product from '../components/Product';

const ProductScreen = ({ match }) => {
    const product = products.find((p) => {
        return (p._id === match.params.id)
    })
    return (
        <>
            <Link className='btn btn-light my-3' to="/">Go Back</Link> 
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid ></Image>
                </Col>
                <Col md={3}>
                    <ListGroup.Item variant='flush'>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews}Reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: Rs {product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price: 
                                </Col>
                                <Col>
                                    <strong>INR {product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status: 
                                </Col>
                                <Col>
                                    {product.countInStock ? "In Stock" : "Out of Stock"}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className="btn-block" type='button' disabled={product.countInStock === 0}>Add to cart</Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>   
        </>
    )
}

export default ProductScreen
