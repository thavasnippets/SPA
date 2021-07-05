import { FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS,CREATE_CART_FAILURE, CREATE_CART_REQUEST, CREATE_CART_SUCCESS } from "../config/cartTypes"

const initialState = {
    loading : false,
    cart:[],
    error:''
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CART_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_CART_SUCCESS:
        return {
          loading: false,
          cart: action.payload,
          error: ''
        }
      case FETCH_CART_FAILURE:
        return {
          loading: false,
          cart: [],
          error: action.payload
        }
 
      case CREATE_CART_SUCCESS:
        return {
          loading: false,
          cart: [...state.cart,action.payload],
          error: ''
        }
   
      default: return state
    }
  }
  
  export default cartReducer

// export const CartReducer = (state = initialState, action) => {
//     const {type,payload}=action
//     switch (type) {
//     case "LOAD_CART":               
//         return payload;
//     case "ADD_CART_SUCCESS":
//     return [...state,payload]    
//     default:
//     return state;
//     }


// };

// export default CartReducer;