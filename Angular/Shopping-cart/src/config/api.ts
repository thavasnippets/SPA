import { environment } from "src/environments/environment";

export const baseUrl= environment.production?"":"http://localhost:3000"
export const productUrl= "http://localhost:3000"+'/products'
export const cartUrl= "http://localhost:3000"+'/cart'
export const wishlistUrl= "http://localhost:3000"+'/wishlist'
