import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent, AdminProductsComponent, AdminAddProductComponent, AdminEditdProductComponent } from './components';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminMainComponent,
    AdminProductsComponent,
    AdminAddProductComponent,
    AdminEditdProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
