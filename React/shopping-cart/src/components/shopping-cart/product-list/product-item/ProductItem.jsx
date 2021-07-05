import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { connect } from "react-redux";

import NumberFormat from "react-number-format";
import { addToCart } from "../../../../service/CartService";

class ProductItem extends Component {
  handleAddToCart = (e) => {
    e.preventDefault();

    const { product } = this.props;
    let cartItem = {
      productId: product.id,
      productName: product.name,
      price: product.price,
      qty: 1,
    };
    console.log(this.props);
    this.props.addCart(cartItem);
  };

  render() {
    const { product } = this.props;

    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src={product.imageUrl}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">{product.name}</CardTitle>
            <CardText tag="h5">
              <strong>
                <NumberFormat
                  value={product.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </strong>
            </CardText>
            <CardText>{product.description}</CardText>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-primary product-btn"
                  onClick={this.handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary product-btn"
                >
                  View Details
                </button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartData: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  //store.dispatch
  return {
    addCart: (data) => {
      dispatch(addToCart(data));
    },
  };
};

// export default connect(null, { AddCartAction })(ProductItem);
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
