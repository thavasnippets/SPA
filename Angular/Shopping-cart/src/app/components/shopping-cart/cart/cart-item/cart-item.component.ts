import { Cart } from 'src/app/models/cart';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem!:Cart;
  constructor() { }

  ngOnInit(): void {
  }

}
