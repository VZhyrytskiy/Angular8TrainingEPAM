import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType, OnInitEffects, OnRunEffects, EffectNotification } from '@ngrx/effects';
import * as ProductsActions from './products.actions';
// rxjs
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ProductsPromiseService } from 'src/app/products/services/products-promise.service';

@Injectable()
export class ProductsEffects {

  getTasks$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap(action =>
        this.productsPromiseService
          .getProducts()
          .then(products => ProductsActions.getProductsSuccess({ products }))
          .catch(error => ProductsActions.getProductsError({ error }))
      )
    )
  );

  // ngrxOnInitEffects(): Action {
  //   // console.log('ngrxOnInitEffects is called');
  //   // return { type: '[ProductsEffects]: Init' };
  // }

  // ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>) {
  //   // return resolvedEffects$.pipe(
  //   //   tap(val => console.log('ngrxOnRunEffects:', val)),
  //   // //  takeUntil(this.actions$.pipe(ofType(ProductsActions.createProduct)))
  //   // );
  // }

  constructor(
    private actions$: Actions,
    private productsPromiseService: ProductsPromiseService,
    private router: Router,
  ) {
    console.log('[PRODUCTS EFFECTS]');
  }
}
