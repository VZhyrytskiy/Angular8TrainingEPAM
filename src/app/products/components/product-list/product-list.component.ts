import { getProducts } from './../../../core/@ngrx/products/products.actions';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, ProductsState } from './../../../core/@ngrx';
// rxjs
import { Observable } from 'rxjs';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // products: Promise<Array<Product>>;
  productsState$: Observable<ProductsState>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private cartService: CartService,
    // private productsPromiseService: ProductsPromiseService
  ) {
    // this.products = productsPromiseService.getProducts();
  }

  ngOnInit() {
    this.productsState$ = this.store.pipe(select('products'));
    this.store.dispatch(getProducts());
  }

  onAddProduct(event) {
    this.cartService.addProduct(event);
  }

  onViewProduct(product: Product): void {
    const link = ['/home', 'product', product.id];
    this.router.navigate(link);
  }
}
