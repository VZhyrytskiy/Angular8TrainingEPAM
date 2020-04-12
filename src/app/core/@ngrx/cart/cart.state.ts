import { CartItem } from './../../../cart/models/cart.model';

export interface CartState {
  data: ReadonlyArray<CartItem>;
}

export const initialCartState: CartState = {
  data: []
};

