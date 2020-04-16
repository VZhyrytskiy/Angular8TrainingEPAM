import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// @NgRx
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from '.';
import { CartEffects } from '../cart/cart.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('ProductsModule', productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class ProductsStoreModule { }
