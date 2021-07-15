using Shopping_cart.Model;

namespace Shopping_cart.Store.Cart
{
    public class CartGetDataSuccessAction
    {

        public Carts[] carts { get; set; }


        public CartGetDataSuccessAction(Carts[] _carts) => carts = _carts;

    }
}