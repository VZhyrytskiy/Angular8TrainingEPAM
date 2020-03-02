import { Product } from 'src/app/products/models/product.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ploduct-item',
  templateUrl: './ploduct-item.component.html',
  styleUrls: ['./ploduct-item.component.css']
})
export class PloductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() editProduct = new EventEmitter<Product>();
  @Output() deleteProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.editProduct.emit(this.product);
  }

  onDelete() {
    this.deleteProduct.emit(this.product);
  }
}
