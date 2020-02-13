import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
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

  constructor(public cartService: CartService) { }

  ngOnInit() { }

  onCange(e) {
    this.clickOut.emit(e);
  }

  onDeleteItem(id: number) {
    this.cartService.removeProduct(id);
  }

  onAddItem(id: number) {
    this.cartService.addCartById(id);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  onDirectionCahnge() {
    this.orderDirection = !this.orderDirection;
  }

  onSortChange(key: string) {
    this.orderKey = key;
  }
}
