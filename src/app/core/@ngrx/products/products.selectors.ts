import { ProductModel } from './../../../products/models/product.model';
import { selectRouterState } from './../router';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductsState } from '.';

export const selectProductsState = createFeatureSelector<ProductsState>('products');
export const selectProductsData = createSelector(selectProductsState, (state: ProductsState) => state.data);

export const selectSelectedProductByUrl = createSelector(
  selectProductsData,
  selectRouterState,
  (products, router): ProductModel => {
    const productID = router.state.params.productID;
    if (productID && Array.isArray(products)) {
      return products.find(product => product.id === +productID);
    } else {
      return null;
    }
  });
