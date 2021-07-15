using Blazor.Fluxor;

namespace Shopping_cart.Store.Cart
{
    public class CartGetDataActionReducer : Reducer<CartState, CartGetDataAction>
    {

        public override CartState Reduce(CartState state, CartGetDataAction action) =>
             new CartState(isLoading: true,
                errorMessage: null, item: null);
    }
}