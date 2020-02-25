import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AdminMainComponent,
  AdminProductsComponent,
  AdminAddProductComponent,
  AdminEditProductComponent,
  LoginComponent
} from './components';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';



@NgModule({
  declarations: [
    AdminMainComponent,
    AdminProductsComponent,
    AdminAddProductComponent,
    AdminEditProductComponent,
    LoginComponent,
    AdminOrdersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AdminModule { }
