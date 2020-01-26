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

  carts: Array<Cart>;

  constructor(private cartService: CartService) {
     this.carts = cartService.getCarts();
   }

  ngOnInit() {
  }

  onCange(e) {
    this.ClickOut.emit(e);
  }
}
