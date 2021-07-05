import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { Injectable } from '@angular/core';
import { cartUrl } from "src/config/api";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getCartItems():Observable<Cart[]>{
    return this.http.get<Cart[]>(cartUrl);
  }

  addProductToCart(cartItem:Cart):Observable<any>{
    return this.http.post(cartUrl,cartItem)
  }
}
