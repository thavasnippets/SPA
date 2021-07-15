using Blazor.Fluxor;

namespace Shopping_cart.Store.Cart
{
    public class CartGetDataFailedActionReducer : Reducer<CartState, CartGetDataFailedAction>
    {

        public override CartState Reduce(CartState state, CartGetDataFailedAction action) =>
             new CartState(
                 isLoading: false,
                 errorMessage: action.ErrorMessage,
                 item: null);
    }
}