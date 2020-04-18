import {CartItem} from "../../cart/models/cart.model";

export class OrderModel {
  dataOrder: string;
  totalSum: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  bas: Array<CartItem>;

  constructor(busket: Array<CartItem>) {
    this.bas = busket.slice();
  }
}

export class Order {
  public firstName: string;
  public lastName: string;
  public phone?: number;
  public email?: string;
  public address: string;
  bas: Array<CartItem>;

  constructor(busket: Array<CartItem>) {
    this.bas = busket.slice();
  }
}
