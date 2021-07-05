import { Cart } from './../../../models/cart';
import { CartService } from './../../../services/cart.service';
import { Product } from './../../../models/product';
import { MessengerService } from './../../../services/messenger.service';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:Cart[]=[];
  cartTotal:number=0
  constructor(private msg: MessengerService,private cartService : CartService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product :any) =>{
      this.getCartItems();
    });
    this.getCartItems();
  }

  getCartItems(){
    this.cartService.getCartItems().subscribe((cart :Cart[]) =>{
      this.addProductToCart(cart);
      this.getCartTotal();
    });
  }
  addProductToCart(cartList:Cart[]){
    this.cartItems=[];
    for(let cart in cartList){

    let itemExists= false;
    for(let item in this.cartItems){
      if(this.cartItems[item].productId=== cartList[cart].productId){
        this.cartItems[item].qty++;
        itemExists=true;
        break;
      }
    }

    if(!itemExists){
      this.cartItems.push({
        productId:cartList[cart].productId,
        productName:cartList[cart].productName,
        price:cartList[cart].price,
        qty:1
      })
    }
  }
}
  getCartTotal(){
    this.cartItems.forEach(item=>{
      this.cartTotal += (item.price*item.qty)
    });

  }
}
