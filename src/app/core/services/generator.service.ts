import { InjectionToken } from '@angular/core';

export const GeneratorService = new InjectionToken<string>('GeneratorService');

// Суть задания немного не в этом.
// Не функция должна генерить последовательность, а некий сервис, а функция должна использовать этот сервис и вернуть значение
// тоесть тело функции ниже надо вынести в отдельный метод сервиса и задействовать этот сервис внутри функции
export function GeneratorFactory(n: number) {
  // tslint:disable-next-line:no-bitwise
  return () => [...Array(n)].map(i => (~~(Math.random() * 36)).toString(36)).map(i => Math.random() > 0.5 ? i : i.toUpperCase()).join('');
}
