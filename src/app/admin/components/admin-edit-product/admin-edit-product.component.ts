import { ProductsPromiseService } from './../../../products/services/products-promise.service';
import { ProductsObservableService } from './../../../products/services/products-observable.service';
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
  createNewProduct = false;
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


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsObservableService: ProductsObservableService,
    private productsPromiseService: ProductsPromiseService
  ) {

    const route$ = route.params.subscribe(params => this.id = +params.productID);
    this.sub.add(route$);

    if (this.id) {
      const observer = {
        next: (products: Product[]) => {
          this.product = { ...products[0] };
          this._setForm(this.product);
          this.open();
        },
        error: (err: any) => console.log(err)
      };

      const product$ = this.route.paramMap
        .pipe(
          switchMap((params: ParamMap) => this.productsObservableService.getProductById(+params.get('productID'))))
        .subscribe(observer);

      this.sub.add(product$);
    } else {
      this.createNewProduct = true;
      this.productsPromiseService.getEmptyProduct().then(data => this._setForm(data));
     // this._setForm(this.productsPromiseService.getEmptyProduct());
    }
  }

  ngOnInit() {
    this.formEditProduct = new FormGroup(this.controls);
    this.open();
  }

  onSubmit() {
    const id = this.product.id;
    const formData = { id, ...this.formEditProduct.value };

    formData.img = this.product.img;

    if (Object.values(formData).some(item => item === null)) {
      return;
    }

    if (this.createNewProduct) {
      this.sub = this.productsObservableService.createProduct(formData as Product).subscribe();
    } else {
      this.sub = this.productsObservableService.createProduct(formData as Product).subscribe()
    }
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

  private _setForm(product: Product) {
    this.product = product;
    this.controls.isAvailable.setValue(product.isAvailable);
    this.controls.name.setValue(product.name);
    this.controls.description.setValue(product.description);
    this.controls.category.setValue(product.category);
    this.controls.count.setValue(product.count);
    this.controls.price.setValue(product.price);
    this.controls.sex.setValue(product.sex);
  }
}
