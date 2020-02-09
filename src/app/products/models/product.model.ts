import { Sex } from 'src/app/shared/enums/sex.enum';

export interface Product {
  id: number;
  isAvailable: boolean;
  img: string;
  name: string;
  description: string;
  price: number;
  category: string;
  sex: Sex;
}
