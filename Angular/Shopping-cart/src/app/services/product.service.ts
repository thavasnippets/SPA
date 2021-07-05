import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productUrl } from "src/config/api";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[]

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(productUrl);
  }
}
