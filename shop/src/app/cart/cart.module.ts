import { NgModule } from '@angular/core';
import { BasketComponent } from './components/basket/basket.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [BasketComponent, CartListComponent],
  exports: [BasketComponent, CartListComponent]
})
export class CartModule {}
