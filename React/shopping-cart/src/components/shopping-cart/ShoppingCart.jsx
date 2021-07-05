import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Cart from "./cart/Cart.jsx";
import Filters from "./filters/Filters.jsx";
import ProductList from "./product-list/ProductList.jsx";
class ShoppingCart extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col>
          <Filters></Filters>
        </Col>
        <Col md="8">
          <ProductList></ProductList>
        </Col>
        <Col>
          <Cart></Cart>
        </Col>
      </Row>
    );
  }
}

export default ShoppingCart;
