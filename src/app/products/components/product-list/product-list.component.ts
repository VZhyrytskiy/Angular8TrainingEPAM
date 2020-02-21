import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Array<Product>>;

  constructor(
    private router: Router,
    private productsService: ProductsService,
    private cartService: CartService
  ) {
    this.products = this.productsService.getProducts();
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
