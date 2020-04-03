import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/products/models/product.model';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

// rxjs
import { switchMap } from 'rxjs/operators';
import { ProductsObservableService } from '../../services/products-observable.service';

declare var $: any;

@Component({
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product: Product = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private productsService: ProductsService,
    private productsObservableService: ProductsObservableService
  ) {
    // this.product = this.productsService.getEmptyProduct();
  }

  ngOnInit() {
    const observer = {
      next: (products: Product[]) => {
        if (products && products.length > 0) {
          this.product = { ...products[0] };
        }
        this.open();
      },
      error: (err: any) => console.log(err)
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.productsObservableService.getProductById(+params.get('productID'))))
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
