
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Data } from './../../shared/commonData';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsData: Array<Product>;
  streamProducts$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.productsData);

  constructor() {
    this.productsData = [...Data];
    this.getProducts().subscribe(value => {
      this.streamProducts$.next(this.productsData);
    });
  }

  getProducts(): Observable<Array<Product>> {
    return this.makeStream(this.productsData);
  }

  makeStream(date): Observable<Array<Product>> {
    return new Observable<Array<Product>>((observer: Observer<Array<Product>>) => {
      observer.next(date);
    });
  }

  async getProductById(id: number | string) {
    return Data.find(item => item.id === +id);
  }

  deleteProduct(item: Product) {
    const index = this.productsData.indexOf(item);
    this.productsData.splice(index, 1);
    this.streamProducts$.next(this.productsData);
  }

  addProduct(item: Product) {
    this.productsData = [...this.productsData, item];
  }
}
