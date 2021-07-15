using System;
using System.Collections.Generic;
using Shopping_cart.Model;
using Microsoft.AspNetCore.Components;
namespace Shopping_cart.State
{
    public class CartState
    {
        public List<Carts> carts { get; set; }
        public string MyProperty { get; set; }
        public event Action OnChange;

        public void SetCart(Carts item)
        {

            MyProperty = "Thava";
            // carts.Add(item);
            NotifyStateChanged();
        }

        private void NotifyStateChanged() => OnChange?.Invoke();


    }
}
