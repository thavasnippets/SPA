using System.IO;
using System.Net;
using System.Threading.Tasks;
using Shopping_cart.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net.Http;
using System.Net.Http.Json;
using Shopping_cart.State;

namespace Shopping_cart.Service
{
    public class CartService
    {

        public CartState cartState { get; set; }
        public CartService(CartState state)
        {
            cartState = state;

        }
        public Task<Carts[]> GetCartAsync()
        {

            var responseString = "";
            var request = (HttpWebRequest)WebRequest.Create("http://localhost:3000/cart");
            request.Method = "GET";
            request.ContentType = "application/json";
            using (var response1 = request.GetResponse())
            {
                using (var reader = new StreamReader(response1.GetResponseStream()))
                {
                    responseString = reader.ReadToEnd();
                    dynamic cartList = JsonConvert.DeserializeObject<IEnumerable<Carts>>(responseString);

                    return Task.FromResult(cartList.ToArray());
                }
            }

        }

        public Task<string> AddToCart(Carts item)
        {
            using (var client = new HttpClient())
            {

                client.BaseAddress = new System.Uri("http://localhost:3000/");
                var response = client.PostAsJsonAsync("cart", item).Result;
                if (response.IsSuccessStatusCode)
                {

                    Console.Write("Success");
                }
                else
                    Console.Write("Error");

                var responseString = new StreamReader(response.Content.ReadAsStream()).ReadToEnd();
                return Task.FromResult(responseString);
            }
        }
    }
}