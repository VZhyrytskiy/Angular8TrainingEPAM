import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  cartList = false;
  service: CartService;

  get productsCount(): number {
    return this.cartService.getCount() || 0;
  }

  constructor(private cartService: CartService) { }

  ngOnInit() { }

  onCartClick($event) {
    this.cartList = !this.cartList;
  }
}
