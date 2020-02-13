import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cart: CartItem;
  @Output() delete = new EventEmitter<number>();
  @Output() add = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onAdd(id: number) {
    this.add.emit(id);
  }

}
