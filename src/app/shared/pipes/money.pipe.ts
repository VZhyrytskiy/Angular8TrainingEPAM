import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appMoney'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number, currency: string = 'BYN'): string {
    return value.toFixed(2) + ' ' + currency;
  }

}
