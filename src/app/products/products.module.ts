import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ViewProductComponent } from './components/view-product/view-product.component';



@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    ViewProductComponent
  ],
  exports: [
    FirstComponent,
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductsModule { }
