import { selectSelectedProductByUrl } from './../../../core/@ngrx/products/products.selectors';
import { Store, select } from '@ngrx/store';
import { ProductsService } from '../../services/products.service';
import { Product, ProductModel } from 'src/app/products/models/product.model';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

// rxjs
import { switchMap, takeUntil } from 'rxjs/operators';
import { ProductsObservableService } from '../../services/products-observable.service';
import { AppState } from 'src/app/core/@ngrx';
import { Subject } from 'rxjs';

declare var $: any;

@Component({
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product: Product = null;
  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(
    // private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private productsService: ProductsService,
    private productsObservableService: ProductsObservableService
  ) {
    // this.product = this.productsService.getEmptyProduct();
  }

  ngOnInit() {

    const observer = {
      next: selectedProduct => {
        if (selectedProduct) {
          this.product = { ...selectedProduct } as ProductModel;
          this.open();
        } else {
          this.product = null; // new ProductModel();
        }
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('Stream is completed');
      }
    };


    // const observer = {
    //   next: (products: Product[]) => {
    //     if (products && products.length > 0) {
    //       this.product = { ...products[0] };
    //     }
    //     this.open();
    //   },
    //   error: (err: any) => console.log(err)
    // };
    // this.route.paramMap
    //   .pipe(
    //     switchMap((params: ParamMap) => this.productsObservableService.getProductById(+params.get('productID'))))
    //   .subscribe(observer);
    // const let observer = {…}

    this.store
      .pipe(
        select(selectSelectedProductByUrl),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(observer);
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
  }

  private open() {
    $('#productModal').modal('toggle');
    $('#productModal').on('hidden.bs.modal', (e) => {
      this.onGoBack();
    });
  }

}
