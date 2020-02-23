import { CartService } from './../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.formOrder = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl('')
    });
  }

  onDeleteItem(id: number) {
    this.cartService.removeProduct(id);
  }

  onAddItem(id: number) {
    this.cartService.addCartById(id);
  }

  onSubmit() {
    const formData = { ...this.formOrder.value };
    console.log(formData);
  }

}
