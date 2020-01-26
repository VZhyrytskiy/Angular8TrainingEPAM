import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cart: Cart;

  constructor() { }

  ngOnInit() {
  }

}