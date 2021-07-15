using System;
using System.Threading.Tasks;
using Blazor.Fluxor;
using Shopping_cart.Model;
using Shopping_cart.Service;

namespace Shopping_cart.Store.Cart
{
    public class CartGetDataEffect : Effect<CartGetDataAction>
    {
        public CartService cartService { get; set; }
        public CartGetDataEffect(CartService service)
        {
            cartService = service;
        }
        protected async override Task HandleAsync(CartGetDataAction action,
                                                  IDispatcher dispatcher)
        {
            try
            {
                var cartItems = await cartService.GetCartAsync();
                System.Console.WriteLine("Read");
                dispatcher.Dispatch(new CartGetDataSuccessAction(cartItems));
            }

            catch (Exception e)
            {
                dispatcher.Dispatch(new CartGetDataFailedAction(errorMessage: e.Message));
            }
        }

    }
}