import { Sex } from 'src/app/shared/enums/sex.enum';

export interface Product {
  id?: number;
  isAvailable?: boolean;
  img?: string;
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  count?: number;
  sex?: Sex;
}

export class ProductModel implements Product {
  constructor(
    public id: number = null,
    public isAvailable: boolean = false,
    public img: string = '',
    public name: string = '',
    public description: string = '',
    public price: number = 0,
    public category: string = '',
    public count: number = 0,
    public sex: Sex
  ) { }
}
