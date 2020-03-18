
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

  // async getProductById(id: number | string) {
  //   return Data.find(item => item.id === +id);
  // }

  deleteProduct(item: Product) {
    const index = this.productsData.indexOf(item);
    this.productsData.splice(index, 1);
    this.streamProducts$.next(this.productsData);
  }

  addOrEditProduct(item: Product) {
    const index = this.productsData.findIndex(prod => prod.id === item.id);

    if (index > -1) {
      this.productsData[index] = item;
    } else {
      this.productsData = [...this.productsData, item];
    }

    this.streamProducts$.next(this.productsData);
  }

  getID(): number {
    let id = Math.max(...this.productsData.map(item => item.id));
    return ++id;
  }

  getEmptyProduct(): Product {
    return {
      id: this.getID(),
      isAvailable: false,
      img: 'assets/img/inf.jpg',
      name: 'New Product',
      description: '',
      price: 0,
      category: '',
      count: 0,
      sex: undefined
    };
  }
}
