import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Output() clickOut = new EventEmitter();

  orderKey: string;
  orderDirection = false;

  get sum() {
    return this.cartService.getSum();
  }

  get carts() {
    return this.cartService.cartProducts;
  }

  // сервис должен быть публичным, так как используется в шаблоне
  constructor(public cartService: CartService) { }

  ngOnInit() {
  }

  onCange(e) {
    this.clickOut.emit(e);
  }

  onDeleteItem(id: number) {
    this.cartService.removeProduct(id);
  }

  onSortChange(event) {
    this.orderKey = event.target.value;
    this.orderDirection = !this.orderDirection;
  }
}
