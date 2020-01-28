import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cart: Cart;
  @Output() Delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(id: number) {
    this.Delete.emit(id);
  }

}
