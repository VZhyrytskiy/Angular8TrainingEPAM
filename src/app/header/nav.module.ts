import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { CartModule } from '../cart/cart.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, CartModule],
  exports: [NavComponent]
})
export class NavModule {}
