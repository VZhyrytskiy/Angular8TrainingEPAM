import { Action, createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { CartState, initialCartState } from '.';

const reducer = createReducer(
  initialCartState,
  on(CartActions.addProductToCatr, state => {
    console.log('ADD_PRODUCT_TO_CART action being handled!');
    return { ...state };
  }),
  // on(ProductsActions.getProductsSuccess, (state, { products }) => {
  //   console.log('GET_PRODUCTS_SUCCESS action being handled!');
  //   const data = [...products];
  //   return { ...state, data };
  // }),
  // on(ProductsActions.getProduct, state => {
  //   console.log('GET_PRODUCT action being handled!');
  //   return { ...state };
  // }),
  // on(ProductsActions.createProduct, state => {
  //   console.log('CREATE_PRODUCT action being handled!');
  //   return { ...state };
  // }),
  // on(ProductsActions.updateProduct, state => {
  //   console.log('UPDATE_PRODUCT action being handled!');
  //   return { ...state };
  // }),
  // on(ProductsActions.deleteProduct, state => {
  //   console.log('DELETE_PRODUCT action being handled!');
  //   return { ...state };
  // })
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return reducer(state, action);
}
