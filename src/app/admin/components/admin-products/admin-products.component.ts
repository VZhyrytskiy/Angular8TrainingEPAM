import { Observable, Subscription } from 'rxjs';

import { Product } from 'src/app/products/models/product.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Observable<Array<Product>>;
  sub: Subscription;

  constructor(private productService: ProductsService, private router: Router) {
    // можно перенести в ngOnInit
    this.sub = this.productService.streamProducts$
      .subscribe(date => this.products = this.productService.makeStream(date));
  }

  onEdit(event) {
    this.router.navigate(['/admin', 'products', 'edit', event.id]);
  }

  onDelete(event) {
    this.productService.deleteProduct(event);
  }

  ngOnInit() {
  }

  addProduct() {
    this.router.navigate(['/admin', 'products', 'add']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
