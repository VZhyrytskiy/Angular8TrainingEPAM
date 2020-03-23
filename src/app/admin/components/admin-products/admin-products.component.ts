import { ProductsObservableService } from './../../../products/services/products-observable.service';
import { ProductsPromiseService } from './../../../products/services/products-promise.service';
import { Observable, Subscription } from 'rxjs';

import { Product } from 'src/app/products/models/product.model';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy, AfterViewInit {
  products: Promise<Array<Product>>;
  sub: Subscription;
  scrollHeigth = 0;

  @ViewChild('scrollContent', { static: false })
  scrollContent: ElementRef;

  @ViewChildren('allThings') things: QueryList<Product>;

  constructor(
    private productsPromiseService: ProductsPromiseService,
    private productsObservableService: ProductsObservableService,
    private router: Router
  ) {
    this.products = this.productsPromiseService.getProducts();
  }

  onEdit(event) {
    this.router.navigate(['/admin', 'products', 'edit', event.id]);
  }

  onDelete(event) {
    this.scrollHeigth = this.scrollContent.nativeElement.scrollTop;
    this.productsObservableService.removeProduct(event.id).subscribe(() =>
      this.products = this.productsPromiseService.getProducts()
    );
  }

  ngOnInit() {
  }

  addProduct() {
    this.router.navigate(['/admin', 'products', 'add']);
  }

  onOutletDeavtivate($event) {
    if ($event && $event.constructor.name === 'AdminEditProductComponent') {
      this.scrollHeigth = this.scrollContent.nativeElement.scrollTop;
      this.products = this.productsPromiseService.getProducts();
    }
  }

  ngAfterViewInit() {
    this.things.changes.subscribe(t => {
      this.ngForRendred();
    });
  }

  ngForRendred() {
    this.scrollContent.nativeElement.scrollTop = this.scrollHeigth;
  }

  ngOnDestroy(): void {
  }
}
