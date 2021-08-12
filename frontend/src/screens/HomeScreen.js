import React from 'react';
import products from "../products";
import Product from '../components/Product'
import {Row, Col} from 'react-bootstrap';

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => {
                    return(<Col key={product._id} sm={7} md={6} lg={3} xl={4}>
                        <Product product={product}/>
                    </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default HomeScreen
