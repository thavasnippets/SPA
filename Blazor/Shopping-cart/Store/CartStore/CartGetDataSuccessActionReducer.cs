using Blazor.Fluxor;

namespace Shopping_cart.Store.Cart
{
    public class CartGetDataSuccessActionReducer : Reducer<CartState, CartGetDataSuccessAction>
    {

        public override CartState Reduce(CartState state, CartGetDataSuccessAction action) =>
             new CartState(
                 isLoading: false,
                 errorMessage: null,
                 item: action.carts);
    }
}