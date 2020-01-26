import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  cartList = false;
  productsCount = 0;

  constructor() { }

  ngOnInit() { }

  onCartClick($event) {
    this.cartList = !this.cartList;
  }
}
