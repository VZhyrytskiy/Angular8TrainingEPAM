import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { Product } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carts: Array<CartItem> = [];

  constructor() { }

  getCarts(): Array<CartItem> {
    return this.carts;
  }

  mapProductToCart(product: Product, count: number): CartItem {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      count,
      img: product.img
    };
  }

  getCartById(id: number): CartItem {
    return this.carts.find(item => item.id === id);
  }

  addProduct(product: Product): void {
    const cart = this.mapProductToCart(product, 1);
    this.addCart(cart);
  }

  addCart(cart: CartItem): void {
    const item = this.getCartById(cart.id);
    if (item) {
      item.count++;
    } else {
      this.carts.push(cart);
    }
  }

  removeCart(id: number): void {
    const index = this.carts.findIndex(item => item.id === id);
    if (index > -1) {
      this.carts[index].count > 1 ? this.carts[index].count-- : this.carts.splice(index, 1);
    }
  }

  getSum(): number {
    let sum = 0;
    this.carts.forEach(item => sum = sum + item.count * item.price);
    return sum;
  }

  getCount(): number {
    return this.carts.length;
  }

  getSumCount(): number {
    let count = 0;
    this.carts.forEach(item => count = count + item.count);
    return count;
  }
}
