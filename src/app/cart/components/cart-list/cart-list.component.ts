import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Output() clickOut = new EventEmitter();

  get sum() {
    return this.cartService.getSum();
  }

  get sumCount() {
    return this.cartService.getSumCount();
  }

  get carts() {
    return this.cartService.getCarts();
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onCange(e) {
    this.clickOut.emit(e);
  }

  onDeleteItem(id: number) {
    this.cartService.removeCart(id);
  }
}
