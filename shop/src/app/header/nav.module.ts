import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [NavComponent],
  imports: [BrowserModule, CartModule],
  exports: [NavComponent]
})
export class NavModule {}
