import { wishlistUrl } from './../../config/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) {

  }


  addToWishlist(productid:number){
return this.http.post(wishlistUrl,{id:productid})
  }

  removeWishlist(productid:number){
    return this.http.delete(wishlistUrl+'/'+productid);
  }

  getWishlist() {
    return this.http.get<any[]>(wishlistUrl).pipe(
      map(result => {
        let productIds: any[] = [];
        result.forEach(item => {
          productIds.push(item.id)
          });
        return productIds;
      })
    )

  }
}
