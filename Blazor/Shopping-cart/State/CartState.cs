using System;

namespace Shopping_cart.State
{
    public class CartState
    {
        public bool ItemAdded { get; private set; }

        public event Action OnChange;

        public void SetCart(bool state)
        {

            ItemAdded = state;
            NotifyStateChanged();
        }

        private void NotifyStateChanged()
        {
            Console.WriteLine("Event1");
            OnChange?.Invoke();
        }


    }
}
