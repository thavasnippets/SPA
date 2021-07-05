export class Product {

  
    constructor(id,name,description="",price=0,imageUrl="https://th.bing.com/th/id/OIP.3pS5RvU7PYMTbOLQRjaCIgHaHa?pid=ImgDet&rs=1"){
      this.id=id;
      this.name=name;
      this.price=price;
      this.imageUrl=imageUrl;
      this.description=description;
  
    }
  }
  export default Product;
  
  