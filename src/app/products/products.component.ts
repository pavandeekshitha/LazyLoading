import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  selectedProduct : Product;

  public title: string ="products are building soon...";//'test title';
  constructor() { }

  ngOnInit() {
  
  }

}
