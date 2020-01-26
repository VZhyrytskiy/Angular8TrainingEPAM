import { Injectable } from '@angular/core';
import { Data } from './../../shared/commonData';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<Product> {
    return Data;
  }

  getProductById(id: number) {
    return Data.find(item => item.id === id);
  }
}
