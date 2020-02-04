import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addProduct = new EventEmitter<Product>();


  constructor() { }

  ngOnInit() {
  }

  onBuy(event) {
    this.addProduct.emit(this.product);
  }

}
