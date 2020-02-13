import { NgModule } from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FirstComponent,
    ProductComponent,
    ProductListComponent
  ],
  exports: [
    ProductListComponent
  ]
})
export class ComponentModule { } // почему вы его так назвали?
