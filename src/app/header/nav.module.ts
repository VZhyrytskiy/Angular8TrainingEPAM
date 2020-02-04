import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { CartModule } from '../cart/cart.module';

// BrowserModule подключается только в AppModule, во всех остальных модулях CommonModule из @angular/common
// Это относится не только к этому модулю, а ко всем.
@NgModule({
  declarations: [NavComponent],
  imports: [BrowserModule, CartModule],
  exports: [NavComponent]
})
export class NavModule {}
