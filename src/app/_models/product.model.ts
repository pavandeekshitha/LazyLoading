export class Product {
    public name: string;
    public description: string;
    public imagePath: string;
    public amount:number;
    public quantity:number;
  
    constructor(name: string, desc: string,
       imagePath: string, amount:number,quantity:number) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.amount=amount;
      this.quantity=quantity;
    }
  }