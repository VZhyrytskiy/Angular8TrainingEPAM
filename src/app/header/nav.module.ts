import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { CartModule } from '../cart/cart.module';
import { CommonModule } from '@angular/common';
import { OrderModule } from '../order/order.module';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, CartModule, SharedModule, OrderModule],
  exports: [NavComponent]
})
export class NavModule {}
