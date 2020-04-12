import { ProductsStoreModule } from './products/products-store.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { RouterEffects } from './router/router.effects';
import { CartStoreModule } from './cart/cart-store.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([RouterEffects]),
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    ProductsStoreModule,
    CartStoreModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ]
})
export class RootStoreModule { }
