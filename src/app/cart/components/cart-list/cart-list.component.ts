import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cart } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  // ClickOut - это экзмемпляр, значит надо писать в нижнем регистре
  @Output() ClickOut = new EventEmitter();

  get sum() {
    return this.cartService.getSum() || 0; // на сколько я вижу, то метод и так будет возвращать или 0 или сумму
    // но лучше этот ноль везде перенести из компонента в сервис. Он тут захламляет логику
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

  onDeleteItem(id: number) {
    this.cartService.removeCart(id);
  }
}
