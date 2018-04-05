import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../_models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product : Product;
  constructor(  private router: Router) { }

  ngOnInit() {
  }
  onAddProduct(){
    this.router.navigate(['/orders']);
  }
}
