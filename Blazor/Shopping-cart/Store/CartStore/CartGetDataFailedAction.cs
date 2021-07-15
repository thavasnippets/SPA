namespace Shopping_cart.Store.Cart
{
    public class CartGetDataFailedAction
    {
        public string ErrorMessage { get; private set; }

        public CartGetDataFailedAction(string errorMessage) => ErrorMessage = errorMessage;

    }
}