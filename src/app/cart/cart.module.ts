import { NgModule } from '@angular/core';
import { BasketComponent } from './components/basket/basket.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartService } from './services/cart.service';
import { MoneyPipe } from '../shared/pipes/money.pipe';

@NgModule({
  imports: [BrowserModule],
  providers: [CartService],
  declarations: [BasketComponent, CartListComponent, CartItemComponent, MoneyPipe],
  exports: [BasketComponent, CartListComponent]
})
export class CartModule { }
