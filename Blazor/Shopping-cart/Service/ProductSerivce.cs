using System.IO;
using System.Net;
using System.Threading.Tasks;
using Shopping_cart.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Shopping_cart.Service
{
    public class ProductService
    {

        public Task<Product[]> GetProductsAsync()
        {
            var responseString = "";
            var request = (HttpWebRequest)WebRequest.Create("http://localhost:3000/products");
            request.Method = "GET";
            request.ContentType = "application/json";
            using (var response1 = request.GetResponse())
            {
                using (var reader = new StreamReader(response1.GetResponseStream()))
                {
                    responseString = reader.ReadToEnd();
                    dynamic productList = JsonConvert.DeserializeObject<IEnumerable<Product>>(responseString);

                    return Task.FromResult(productList.ToArray());
                }
            }
        }


    }
}