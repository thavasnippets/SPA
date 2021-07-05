export class Cart {

  productId:number;
  productName:string;
  price:number;
  qty:number;

  constructor(productId: number, productName:string, price:number,qty:number){
    this.productId=productId;
    this.productName=productName;
    this.price=price;
    this.qty=qty;
  }
}
