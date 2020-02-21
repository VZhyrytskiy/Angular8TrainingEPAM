import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/products/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

// rxjs
import { switchMap } from 'rxjs/operators';

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
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    const observer = {
      next: (product: Product) => {
        this.product = { ...product };
        this.open();
      },
      error: (err: any) => console.log(err)
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.productsService.getProductById(+params.get('productID'))))
      .subscribe(observer);
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
  }

  private open() {
    $('#productModal').modal('toggle');
    $('#productModal').on('hidden.bs.modal', (e) => {
      this.onGoBack();
    })
  }

}
