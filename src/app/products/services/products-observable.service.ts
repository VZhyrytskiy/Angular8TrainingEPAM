import { ProductsPromiseService } from './products-promise.service';
import { Product } from './../models/product.model';
import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, publish, refCount, share, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsObservableService {
  constructor(
    private http: HttpClient,
  ) { }

  private productsUrl = 'http://localhost:3000/products';

  getProductById(id: number | string) {
    const url = `${this.productsUrl}`;
    const params = new HttpParams().set('id', `${id}`);
    return this.http.get<Product[]>(url, { params })
      .pipe(
        retry(3),
        share(),
        catchError(this.handleError)
      );
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put<Product>(url, body, options)
      .pipe(catchError(this.handleError));
  }

  removeProduct(id: number | string) {
    const url = `${this.productsUrl}/${+id}`;
    return this.http.delete<Product[]>(url)
      .pipe(
        share(),
        catchError(this.handleError),
      );
  }

  createProduct(product: Product): Observable<Product> {
    const url = this.productsUrl;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<Product>(url, body, options)
      .pipe(
        catchError(this.handleError)
      );
  }


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
