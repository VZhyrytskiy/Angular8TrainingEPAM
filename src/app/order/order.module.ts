import { CartModule } from './../cart/cart.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule,
    CartModule
  ],
  exports: [OrderRoutingModule]
})
export class OrderModule { }
