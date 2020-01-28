import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Output() ClickOut = new EventEmitter();

  get sum() {
    return this.cartService.getSum() || 0;
  }

  get sumCount() {
    return this.cartService.getSumCount() || 0;
  }

  get carts() {
    return this.cartService.getCarts();
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onCange(e) {
    this.ClickOut.emit(e);
  }
}
