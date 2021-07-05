import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ProductItem from "./product-item/ProductItem.jsx";
import { getProducts } from "../../../service/ProductService";

export default class ProductList extends Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    getProducts().then((products) => this.setState({ productList: products }));
  }
  render() {
    const { productList } = this.state;
    return (
      <Row>
        {productList.map((product) => (
          <Col md="4">
            <ProductItem key={product.id} product={product} />
          </Col>
        ))}
      </Row>
    );
  }
}
