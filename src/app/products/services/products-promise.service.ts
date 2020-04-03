import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsPromiseService {

  private tasksUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Promise<Product[]> {
    return this.http
      .get(this.tasksUrl)
      .toPromise()
      .then(response => response as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getID(): Promise<number> {
    return this.getProducts().then(data => Math.max(...data.map(item => item.id)));
  }

  async getEmptyProduct(): Promise<Product> {
    let id = await this.getID().then();
    return {
      id: ++id,
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
