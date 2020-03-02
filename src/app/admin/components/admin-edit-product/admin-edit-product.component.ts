import { FormGroup, FormControl } from '@angular/forms';
import { Product } from './../../../products/models/product.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { switchMap } from 'rxjs/operators';

declare var $: any;
@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent implements OnInit {
  product: Product;
  formEditProduct: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private productsService: ProductsService) {
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

  ngOnInit() {
    this.formEditProduct = new FormGroup({
      isAvailable: new FormControl(),
      img: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
      count: new FormControl(),
      price: new FormControl(),
      sex: new FormControl(),
    });
  }

  onSubmit() {
    const id = this.product.id;
    const formData = { id, ...this.formEditProduct.value };
    if (Object.values(formData).some(item => !item)) {
      return;
    }

    const { email, password } = formData;
    const user = { email, password };

    this.productsService.addProduct(formData as Product);
    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }

  private open() {
    $('#editModal').modal('toggle');
    $('#editModal').on('hidden.bs.modal', (e) => {
      this.onGoBack();
    });
  }
}
