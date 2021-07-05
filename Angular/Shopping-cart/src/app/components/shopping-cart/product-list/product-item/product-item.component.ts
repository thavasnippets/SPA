import { WishlistService } from './../../../../services/wishlist.service';
import { CartService } from './../../../../services/cart.service';
import { MessengerService } from './../../../../services/messenger.service';
import { Product } from './../../../../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!:Product
  constructor(private msg:MessengerService,
    private cartService:CartService, private wishlist:WishlistService) {

   }

  wishlistAdded:boolean=false;
  ngOnInit(): void {
     this.wishlist.getWishlist().subscribe((item)=>{
      this.wishlistAdded=item.indexOf(this.productItem.id)>0
   });
  }

  handleAddToCart(){
    this.cartService.addProductToCart(
    {productId: this.productItem.id,
    productName:this.productItem.name,
    price:this.productItem.price,qty:1}).subscribe(()=>{})
    this.msg.sendMsg(this.productItem);
  }

  handleAddToWishlist(){
      this.wishlist.addToWishlist(this.productItem.id).subscribe(()=>{
        this.wishlistAdded=true;
      });
  }
  handleRemoveToWishlist(){
    this.wishlist.removeWishlist(this.productItem.id).subscribe(()=>{
      this.wishlistAdded=false;
    });
  }

}
