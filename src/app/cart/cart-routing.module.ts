import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ProductListComponent } from '../products/components/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent,
    outlet: 'cart'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
