import { OrderModel } from './models/order.model';
import { LocalStorageService } from './../core/services/local-storage.service';
import { CartService } from './../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { localStoragekeyOrder } from '../shared/consts';

declare var $: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  formOrder: FormGroup;

  get sum() {
    return this.cartService.getSum();
  }

  constructor(public cartService: CartService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.formOrder = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      phone: new FormControl()
    });
  }

  onDeleteItem(id: number) {
    this.cartService.removeProduct(id);
  }

  onAddItem(id: number) {
    this.cartService.addCartById(id);
  }

  onSubmit() {
    const dataOrder = new Date();
    const totalSum = this.sum;
    const formData: OrderModel = { ...this.formOrder.value, dataOrder, totalSum };
    const loadOrders = this.localStorageService.getItem(localStoragekeyOrder) || [];
    const orders = [...loadOrders, formData];
    this.localStorageService.setItem(localStoragekeyOrder, orders);
    console.log(orders);
  }

}
