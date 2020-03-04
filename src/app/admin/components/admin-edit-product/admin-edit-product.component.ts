import { FormGroup, FormControl } from '@angular/forms';
import { Product } from './../../../products/models/product.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

declare var $: any;
@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent implements OnInit, OnDestroy {
  product: Product;
  formEditProduct: FormGroup;
  sub: Subscription = new Subscription();
  id: number;

  private controls = {
    isAvailable: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    count: new FormControl(),
    price: new FormControl(),
    sex: new FormControl(),
  };


  constructor(private router: Router, private route: ActivatedRoute, private productsService: ProductsService) {

    const route$ = route.params.subscribe(params => this.id = +params.productID);
    this.sub.add(route$);

    if (this.id) {
      const observer = {
        next: (product: Product) => {
          this.product = { ...product };
        },
        error: (err: any) => console.log(err)
      };

      const product$ = this.route.paramMap
        .pipe(
          switchMap((params: ParamMap) => this.productsService.getProductById(+params.get('productID'))))
        .subscribe(observer);

      this.sub.add(product$);
    } else {
      this.product = this.productsService.getEmptyProduct();
    }
  }

  ngOnInit() {
    this.formEditProduct = new FormGroup(this.controls);
    this.setForm(this.product);
    this.open();
  }

  setForm(product: Product): void {
    this.controls.isAvailable.setValue(product.isAvailable);
    this.controls.name.setValue(product.name);
    this.controls.description.setValue(product.description);
    this.controls.category.setValue(product.category);
    this.controls.count.setValue(product.count);
    this.controls.price.setValue(product.price);
    this.controls.sex.setValue(product.sex);
  }

  onSubmit() {
    const id = this.product.id;
    const formData = { id, ...this.formEditProduct.value };

    formData.img = this.product.img;

    if (Object.values(formData).some(item => item === null)) {
      return;
    }

    this.productsService.addOrEditProduct(formData as Product);
    this.onClose();
  }

  onClose(): void {
    $('#editModal').modal('toggle');
    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private open() {
    $('#editModal').modal('toggle');
    $('#editModal').on('hidden.bs.modal', (e) => {
      this.onGoBack();
    });
  }
}
