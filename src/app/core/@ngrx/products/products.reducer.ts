import { Action, createReducer, on } from '@ngrx/store';

import { ProductsState, initialProductsState } from './products.state';
import * as ProductsActions from './products.actions';

const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.getProducts, state => {
    console.log('GET_PRODUCTS action being handled!');
    return { ...state };
  }),
  on(ProductsActions.getProductsSuccess, (state, { products }) => {
    console.log('GET_PRODUCTS_SUCCESS action being handled!');
    const data = [...products];
    return { ...state, data };
  }),
  on(ProductsActions.getProduct, state => {
    console.log('GET_PRODUCT action being handled!');
    return { ...state };
  }),
  on(ProductsActions.createProduct, state => {
    console.log('CREATE_PRODUCT action being handled!');
    return { ...state };
  }),
  on(ProductsActions.updateProduct, state => {
    console.log('UPDATE_PRODUCT action being handled!');
    return { ...state };
  }),
  on(ProductsActions.deleteProduct, state => {
    console.log('DELETE_PRODUCT action being handled!');
    return { ...state };
  })
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}
