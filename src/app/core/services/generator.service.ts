import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {

  constructor() { }

  generatorFactory(n: number) {
    // tslint:disable-next-line:no-bitwise
    return () => [...Array(n)].map(i => (~~(Math.random() * 36)).toString(36)).map(i => Math.random() > 0.5 ? i : i.toUpperCase()).join('');
  }

}
