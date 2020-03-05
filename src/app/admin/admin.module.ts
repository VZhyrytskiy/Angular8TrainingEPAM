import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AdminMainComponent,
  AdminProductsComponent,
  AdminEditProductComponent,
} from './components';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { ProductsModule } from '../products/products.module';
import { PloductItemComponent } from './components/ploduct-item/ploduct-item.component';

@NgModule({
  declarations: [
    AdminMainComponent,
    AdminProductsComponent,
    AdminEditProductComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    PloductItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    ProductsModule
  ],
  exports: [

  ]
})
export class AdminModule { }
