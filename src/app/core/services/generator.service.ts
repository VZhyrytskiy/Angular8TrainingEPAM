import { InjectionToken } from '@angular/core';

export const GeneratorService = new InjectionToken<string>('GeneratorService');

export function GeneratorFactory(n: number) {
  // tslint:disable-next-line:no-bitwise
  return () => [...Array(n)].map(i => (~~(Math.random() * 36)).toString(36)).map(i => Math.random() > 0.5 ? i : i.toUpperCase()).join('');
}
