import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { Product } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: Array<CartItem> = [];
  totalQuantity = 0;
  totalSum = 0;

  constructor() { }

  addCartById(id: number): void {
    this.getCartById(id).count++;
    this.updateCartData();
  }

  removeProduct(id: number): void {
    if (!this.decreaseQuantity(id)) {
      const index = this.getIndexProductById(id);
      this.cartProducts.splice(index, 1);
    }
    this.updateCartData();
  }

  removeAllProducts(): void {
    this.cartProducts = [];
    this.updateCartData();
  }

  addProduct(product: Product): void {
    const cart = this.mapProductToCart(product, 1);
    this.addCart(cart);
    this.updateCartData();
  }

  getSum(): number {
    let sum = 0;
    this.cartProducts.forEach(item => sum = sum + item.count * item.price);
    return sum;
  }

  getCount(): number {
    return this.cartProducts.length;
  }

  clearCart(): void {
    this.cartProducts = [];
    this.updateCartData();
  }

  private getIndexProductById(id: number): number {
    return this.cartProducts.findIndex(item => item.id === id);
  }

  private addCart(cart: CartItem): void {
    if (this.increaseQuantity(cart.id)) {
    } else {
      this.cartProducts.push(cart);
    }
  }

  private increaseQuantity(id: number): boolean {
    const item = this.getCartById(id);
    if (item) {
      item.count++;
      return true;
    }
    return false;
  }

  private decreaseQuantity(id: number): boolean {
    const index = this.getIndexProductById(id);
    if (index > -1 && this.cartProducts[index].count > 1) {
      this.cartProducts[index].count--;
      return true;
    }
    return false;
  }

  private mapProductToCart(product: Product, count: number): CartItem {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      count,
      img: product.img
    };
  }

  private getCartById(id: number): CartItem {
    return this.cartProducts.find(item => item.id === id);
  }

  private updateCartData(): void {
    this.totalQuantity = this.getCount();
    this.totalSum = this.getSumCount();
  }

  private getSumCount(): number {
    let count = 0;
    this.cartProducts.forEach(item => count = count + item.count);
    return count;
  }
}
