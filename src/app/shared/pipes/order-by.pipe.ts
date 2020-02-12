import { CartItem } from './../../cart/models/cart.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: Array<CartItem>, key: string, order: boolean = false): any {
    const m = order ? -1 : 1;
    return value.sort((a: CartItem, b: CartItem): number => {
      const x = a[key];
      const y = b[key];
      return (x === y) ? 0 : (x < y) ? -1 * m : 1 * m;
    });
  }
}
