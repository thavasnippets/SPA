using Shopping_cart.Model;

namespace Shopping_cart.Store.Cart
{
    public class CartState
    {
        public bool IsLoading { get; private set; }
        public string ErrorMessage { get; private set; }

        public Carts[] carts { get; }

        public CartState(bool isLoading, string errorMessage, Carts[] item)
        {
            IsLoading = isLoading;
            ErrorMessage = errorMessage;
            carts = item;
        }
    }
}