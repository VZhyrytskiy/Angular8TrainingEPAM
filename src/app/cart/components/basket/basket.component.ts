import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  showCartList = false;

  get productsCount(): number {
    return this.cartService.getCount();
  }

  constructor(private cartService: CartService) { }

  ngOnInit() { }
}
