import { NgModule } from '@angular/core';
import { CartRoutingModule } from './cart-routing.module';
import { BasketComponent } from './components/basket/basket.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    CartRoutingModule
  ],
  declarations:
    [
      BasketComponent,
      CartListComponent,
      CartItemComponent
    ],
  exports: [
    BasketComponent, // все ли компоненты надо делать доступными за пределами модуля?
    CartListComponent,
    CartItemComponent
  ]
})
export class CartModule { }
