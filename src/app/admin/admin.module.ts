import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AdminMainComponent,
  AdminProductsComponent,
  AdminAddProductComponent,
  AdminEditdProductComponent,
  LoginComponent
} from './components';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminMainComponent,
    AdminProductsComponent,
    AdminAddProductComponent,
    AdminEditdProductComponent,
    LoginComponent
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
