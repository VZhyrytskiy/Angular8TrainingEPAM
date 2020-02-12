import { NgModule } from '@angular/core';
import { BasketComponent } from './components/basket/basket.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartService } from './services/cart.service';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, SharedModule],
  // providers: [CartService], уже зарегистрирован через свой декоратор
  declarations: [BasketComponent, CartListComponent, CartItemComponent],
  exports: [BasketComponent, CartListComponent]
})
export class CartModule { }
