import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../_models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedProduct: Product;
  @Output() productSelected = new EventEmitter<Product>();
  products: Product[] = [
    new Product('Red Gram', 'Organic red gram good for health','',250,100),
    new Product('Rice', 'Organic rice','',300,1000)
  ];
  constructor() { }

  ngOnInit() {

  }

  getAddressOfTheFarmer(){

  }

  onSelected(product:Product){
   // this.selectedProduct = product; 
   this.productSelected.emit(product);
  }
}
