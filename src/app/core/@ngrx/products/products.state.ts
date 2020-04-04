import { Product, ProductModel } from './../../../products/models/product.model';
import { Category } from 'src/app/shared/enums/category.enum';
import { Sex } from 'src/app/shared/enums/sex.enum';

export interface ProductsState {
  data: ReadonlyArray<Product>;
}

export const initialProductsState: ProductsState = {
  data: [
    new ProductModel(
      1,
      true,
      'assets/img/Shirt1.jpg',
      'Shirt1',
      'Shirt1',
      10.99,
      Category.shirts,
      10,
      Sex.man
    ),
    new ProductModel(
      2,
      false,
      'assets/img/4564303-1.jpg',
      'Shirt 4564303',
      '4564303',
      15.99,
      Category.shirts,
      10,
      Sex.man
    ),
    new ProductModel(
      3,
      true,
      'assets/img/5047597-1.jpg',
      'Shirt 5047597',
      '5047597',
      17.99,
      Category.shirts,
      10,
      Sex.man
    )
  ]
};
