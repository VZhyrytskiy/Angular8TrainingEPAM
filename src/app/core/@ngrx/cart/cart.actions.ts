import { CartItem } from './../../../cart/models/cart.model';
import { Product } from './../../../products/models/product.model';
import { createAction, props } from '@ngrx/store';

export const addProductToCatr = createAction(
  '[ADD Product to CART] ADD_PRODUCT_TO_CART',
  props<{ product: Product }>()
);

export const addProductToCatrSuccess = createAction(
  '[ADD Product to CART] ADD_PRODUCT_TO_CART_SUCCEESS',
  props<{ cartItems: CartItem[] }>()
);

export const addProductToCatrError = createAction(
  '[ADD Product to CART] ADD_PRODUCT_TO_CART_ERROR',
  props<{ error: Error | string }>()
);
