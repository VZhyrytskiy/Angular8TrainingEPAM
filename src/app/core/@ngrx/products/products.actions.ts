import { createAction, props } from '@ngrx/store';

import { Product } from './../../../Products/models/Product.model';

export const getProducts = createAction('[Product List Page (App)] GET_PRODUCTS');

export const getProduct = createAction(
  '[Add/Edit Product Page (App)] GET_PRODUCT',
  props<{ ProductID: number }>()
);

export const createProduct = createAction(
  '[Product List Page] CREATE_PRODUCT',
  props<{ Product: Product }>()
);

export const updateProduct = createAction(
  '[Product List Page] UPDATE_PRODUCT',
  props<{ Product: Product }>()
);

export const deleteProduct = createAction(
  '[Product List Page] DELETE_PRODUCT',
  props<{ Product: Product }>()
);
