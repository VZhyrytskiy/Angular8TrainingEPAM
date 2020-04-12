import { Product } from 'src/app/products/models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CartActions from './cart.actions';
import * as RouterActions from './../router/router.actions';
// rxjs
import { Observable } from 'rxjs';
import { switchMap, tap, map, pluck, concatMap } from 'rxjs/operators';




@Injectable()
export class CartEffects {

  addProductToCart$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addProductToCatr),
      pluck('product'),
      switchMap(product =>
        this.cartService
          .addProduct(product)
          .then(cartItems => CartActions.addProductToCatrSuccess({ cartItems }))
          .catch(error => CartActions.addProductToCatrError({ error }))
      )
    )
  );

  getProductSuccess$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.addProductToCatrSuccess),
      map(action =>
        RouterActions.go({
          path: [{outlets: {cart: ['cart']}}],
        })
      )
    );
  });

  constructor(
    private actions$: Actions,
    private cartService: CartService,
  ) {
    console.log('[CART EFFECTS]');
  }
}
