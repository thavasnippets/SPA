import axios from 'axios'
import { createCartFailure, createCartRequest, createCartSuccess, fetchCartFailure, fetchCartRequest, fetchCartSuccess } from '../actions/CartActions'
import { cartURL } from '../config/api'

export const getCartList = () => {
    return (dispatch)=>{
      dispatch(fetchCartRequest()) 
      axios
        .get(cartURL)
        .then( res =>{ 
            const cartItems=res.data
            dispatch(fetchCartSuccess(cartItems))
        })
        .catch(err=> {
            dispatch(fetchCartFailure(err.message))
        })
    } 
}

export const addToCart = (product) => {
  
    return (dispatch)=>{
      
        axios
          .post(cartURL, product)
          .then( res =>{ 
              const cartItems=res.data
             
              dispatch(createCartSuccess(cartItems))
              
          })
          .catch(err=> {
          })
      } 
}

