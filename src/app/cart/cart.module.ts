import { NgModule } from '@angular/core';
import { BasketComponent } from './components/basket/basket.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartService } from './services/cart.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [BrowserModule, SharedModule],
  providers: [CartService],
  declarations: [BasketComponent, CartListComponent, CartItemComponent],
  exports: [BasketComponent, CartListComponent]
})
export class CartModule { }
