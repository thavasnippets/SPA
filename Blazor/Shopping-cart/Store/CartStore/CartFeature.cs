using System.Threading.Tasks;
using Blazor.Fluxor;
using Shopping_cart.Model;
using Shopping_cart.Service;

namespace Shopping_cart.Store.Cart
{
    public class CartFeature : Feature<CartState>
    {
        private CartService cartService { get; set; }
        public CartFeature(CartService service)
        {
            cartService = service;
        }
        public override string GetName() => "Cart";

        protected override CartState GetInitialState() => new CartState(isLoading: false,
                                                                        errorMessage: null,
                                                                        item: null);

    }
}