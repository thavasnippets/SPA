import { WishlistService } from './../../../services/wishlist.service';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[]=[];

  constructor(private productService:ProductService
    ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((item)=>{
      this.productList=item;
    });
  }

}
