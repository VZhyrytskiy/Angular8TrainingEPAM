import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductsPromiseService } from './../../services/products-promise.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsPromiseService]
})
export class ProductListComponent implements OnInit {
  products: Promise<Array<Product>>;

  constructor(
    private router: Router,
    private cartService: CartService,
    productsPromiseService: ProductsPromiseService
  ) {
    this.products = productsPromiseService.getProducts();
  }

  ngOnInit() { }

  onAddProduct(event) {
    this.cartService.addProduct(event);
  }

  onViewProduct(product: Product): void {
    const link = ['/home', 'product', product.id];
    this.router.navigate(link);
  }
}
