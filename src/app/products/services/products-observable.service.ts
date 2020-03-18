import { ProductsPromiseService } from './products-promise.service';
import { Product } from './../models/product.model';
import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, publish, refCount, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsObservableService {
  constructor(
    private http: HttpClient,
    private productsPromiseService: ProductsPromiseService
  ) { }

  private productsUrl = 'http://localhost:3000/products';

  getProductById(id: number | string) {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        retry(3),
        share(),
        catchError(this.handleError)
      );
  }

  // addOrEditProduct(item: Product) {
  //   const product = this.getProductById(item.id);
  //   if (product)
  //   .findIndex(prod => prod.id === item.id);

  //   if (index > -1) {
  //     this.productsData[index] = item;
  //   } else {
  //     this.productsData = [...this.productsData, item];
  //   }

  //   this.streamProducts$.next(this.productsData);
  // }

  private updateProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put<Product>(url, body, options)
      .pipe(catchError(this.handleError));
  }


  private createProduct(user: Product): Observable<Product> {
    const url = this.productsUrl;
    const body = JSON.stringify(user);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<Product>(url, body, options)
      .pipe(
        catchError(this.handleError)
      );
  }


  // deleteUser(user: UserModel) {}

  private handleError(err: HttpErrorResponse) {
    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
