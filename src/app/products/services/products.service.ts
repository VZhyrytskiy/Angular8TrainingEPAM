import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Data } from './../../shared/commonData';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Array<Product>> {
    return new Observable<Array<Product>>((observer: Observer<Array<Product>>) => {
      observer.next(Data);
    });
  }

  async getProductById(id: number | string) {
    return Data.find(item => item.id === +id);
  }
}
