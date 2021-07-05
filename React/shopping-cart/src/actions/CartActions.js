import { FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS,CREATE_CART_FAILURE, CREATE_CART_REQUEST, CREATE_CART_SUCCESS } from '../config/cartTypes'

export const fetchCartRequest=()=>{
    return{
        type:FETCH_CART_REQUEST
    }
}

export const fetchCartSuccess=cart=>{
    return{
        type:FETCH_CART_SUCCESS,
        payload:cart
    }
}
export const fetchCartFailure=error=>{
    return{
        type:FETCH_CART_FAILURE,
        payload:error
    }
}


export const createCartSuccess=cart=>{
    return{
        type:CREATE_CART_SUCCESS,
        payload:cart
    }
}


// export const AddCartAction = (cart) => async(dispatch) => {
//    const res =await addToCart(cart);
//    dispatch({
//        type:' ,
//        payload:res.data
//    });
//    return Promise.resolve(res.data);
//     };

    // export const GetCartListAction = () => async(dispatch) => {
    //     const res = await getCartList();
        
    //     dispatch({
    //         type:'LOAD_CART',
    //         payload:res
    //     });
        
    //      };
       