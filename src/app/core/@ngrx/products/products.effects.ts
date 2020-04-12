import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType, OnInitEffects, OnRunEffects, EffectNotification } from '@ngrx/effects';
import * as ProductsActions from './products.actions';
// rxjs
import { Observable } from 'rxjs';
import { switchMap, tap, map } from 'rxjs/operators';
import { ProductsPromiseService } from 'src/app/products/services/products-promise.service';

@Injectable()
export class ProductsEffects {

  getProducts$: Observable<Action> = createEffect(() =>
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

  // getProduct$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ProductsActions.getProduct),
  //     switchMap(action =>
  //       this.productsPromiseService
  //         .getProducts()
  //         .then(products => ProductsActions.getProductSuccess({ products }))
  //         .catch(error => ProductsActions.getProductError({ error }))
  //     )
  //   )
  // );

  // getProductSuccess$: Observable<Action> = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ProductsActions.getProductSuccess),
  //     map(action =>
  //       RouterActions.go({
  //         path: ['/home']
  //       })
  //     )
  //   );
  // });

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
  ) {
    console.log('[PRODUCTS EFFECTS]');
  }
}
