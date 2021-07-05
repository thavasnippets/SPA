import { getByPlaceholderText } from "@testing-library/dom";
import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "./cart-item/CartItem";
import { getCartList } from "../../../service/CartService";

function Cart({ cartData, getCartList }) {
  useEffect(() => {
    getCartList();
  }, []);

  return (
    <ul className="list-group">
      {manipulateCart(cartData.cart).map((item) => (
        <li className="list-group-item">
          <CartItem key={item.id} product={item} />
        </li>
      ))}

      <li className="list-group-item active">
        Total : <strong>{getCartTotal(cartData)}</strong>
      </li>
    </ul>
  );
}

const manipulateCart = (products) => {
  var cartItems = [];
  for (let prds in products) {
    let itemExists = false;
    for (let item in cartItems) {
      if (cartItems[item].productId === products[prds].productId) {
        cartItems[item].qty++;
        itemExists = true;
        break;
      }
    }

    if (!itemExists) {
      cartItems.push({
        productId: products[prds].productId,
        productName: products[prds].productName,
        price: products[prds].price,
        qty: 1,
      });
    }
  }
  return cartItems;
};

const getCartTotal = (cartData) => {
  var total = 0;
  cartData.cart.forEach((item) => {
    total += item.price * item.qty;
  });
  return total;
};

const mapStateToProps = (state) => {
  return {
    cartData: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCartList: () => dispatch(getCartList()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

// class Cart extends Component {
//   componentDidMount() {
//     getCartList().then((result) => this.manipulateCart(result.cart));
//   }

//   getCartTotal() {
//     const { cartData2 } = this.state;
//     var total = 0;
//     cartData2.forEach((item) => {
//       total += item.price * item.qty;
//     });
//   }

//   render() {
//     const { cartData2 } = this.state;
//     return (
//       <ul class="list-group">
//         {cartData2.map((item) => (
//           <li class="list-group-item">
//             <CartItem key={item.id} product={item} />
//           </li>
//         ))}

//         <li class="list-group-item active">
//           Total : <strong>{this.getCartTotal()}</strong>
//         </li>
//       </ul>
//     );
//   }
// }
