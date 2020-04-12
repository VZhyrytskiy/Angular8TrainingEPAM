import { CartState } from './cart/cart.state';
import { ProductsState } from './products';

export interface AppState {
  ProductsModule: ProductsState;
  CartModule: CartState;
}
