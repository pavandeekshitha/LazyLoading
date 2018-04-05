import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../../_models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productInfoFromParent: Product;
  @Output() productSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(){
      this.productSelected.emit();
  }
}
