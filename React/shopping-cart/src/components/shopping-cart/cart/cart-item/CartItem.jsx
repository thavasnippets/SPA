import React, { Component } from "react";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { product } = this.props;
    return (
      <div class="card-item">
        <span>{product.productName}</span> X <span>{product.qty}</span>:
        <strong>{product.price * product.qty}</strong>
      </div>
    );
  }
}

export default CartItem;
