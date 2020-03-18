import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/products/models/product.model';
import { Component, OnInit } from '@angular/core';
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
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private productsService: ProductsService,
    private productsObservableService: ProductsObservableService
  ) {
    const observer = {
      next: (product: Product) => {
        this.product = { ...product };
        this.open();
      },
      error: (err: any) => console.log(err)
    };
    this.route.paramMap
      .pipe(
       // switchMap((params: ParamMap) => this.productsObservableService.getProductById(+params.get('productID'))))
        switchMap(() => this.productsObservableService.getProductById(99)))
      .subscribe(observer);
  }

  ngOnInit() { }

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
