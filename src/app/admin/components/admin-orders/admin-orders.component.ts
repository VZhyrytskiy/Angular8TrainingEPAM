import { localStoragekeyOrder } from './../../../shared/consts';
import { OrderModel } from './../../../order/models/order.model';
import { LocalStorageService } from './../../../core/services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders: Array<OrderModel>;

  constructor(private localStorageService: LocalStorageService) {
    this.orders = this.localStorageService.getItem(localStoragekeyOrder) || [];
  }

  ngOnInit() {
  }

}
