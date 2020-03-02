import { Category } from './enums/category.enum';
import { Product } from '../products/models/product.model';
import { Sex } from './enums/sex.enum';

export let Data: Array<Product> = [
  {
    id: 1,
    isAvailable: true,
    img: 'assets/img/Shirt1.jpg',
    name: 'Shirt1',
    description: 'Shirt1',
    price: 10.99,
    category: Category.shirts,
    count: 10,
    sex: Sex.man
  },
  {
    id: 2,
    isAvailable: false,
    img: 'assets/img/4564303-1.jpg',
    name: 'Shirt 4564303',
    description: '4564303',
    price: 15.99,
    category: Category.shirts,
    count: 10,
    sex: Sex.man
  },
  {
    id: 3,
    isAvailable: true,
    img: 'assets/img/5047597-1.jpg',
    name: 'Shirt 5047597',
    description: '5047597',
    price: 17.99,
    category: Category.shirts,
    count: 10,
    sex: Sex.man
  },
  {
    id: 4,
    isAvailable: true,
    img: 'assets/img/6478493-1.jpg',
    name: 'Shirt 6478493',
    description: '6478493',
    price: 23.21,
    category: Category.shirts,
    count: 10,
    sex: Sex.man
  },
  {
    id: 5,
    isAvailable: true,
    img: 'assets/img/6532495-1.jpg',
    name: 'Shirt 6532495',
    description: '6478493',
    price: 50.99,
    category: Category.shirts,
    count: 10,
    sex: Sex.man
  },
  {
    id: 6,
    isAvailable: true,
    img: 'assets/img/9659178-1.jpg',
    name: 'Shirt 9659178',
    description: '9659178',
    price: 33.99,
    category: Category.shirts,
    count: 10,
    sex: Sex.man
  },
  {
    id: 7,
    isAvailable: true,
    img: 'assets/img/6372943-1.jpg',
    name: 'Shirt 6372943',
    description: '6372943',
    price: 41.77,
    category: Category.shirts,
    count: 10,
    sex: Sex.woman
  },
  {
    id: 8,
    isAvailable: true,
    img: 'assets/img/6548945-1.jpg',
    name: 'Shirt 6548945',
    description: '6548945',
    price: 22.99,
    category: Category.shirts,
    count: 10,
    sex: Sex.woman
  },
  {
    id: 9,
    isAvailable: true,
    img: 'assets/img/6824190-1.jpg',
    name: 'Shirt 6824190',
    description: '6824190',
    price: 26.99,
    category: Category.shirts,
    count: 10,
    sex: Sex.woman
  },
  {
    id: 10,
    isAvailable: true,
    img: 'assets/img/5170406-1.jpg',
    name: 'Shirt 5170406',
    description: '5170406',
    price: 49.99,
    category: Category.shirts,
    count: 10,
    sex: Sex.woman
  },
  {
    id: 11,
    isAvailable: true,
    img: 'assets/img/Pants1.jpg',
    name: 'Pants1',
    description: 'Pant1',
    price: 19.99,
    category: Category.pants,
    count: 10,
    sex: Sex.woman
  },
  {
    id: 12,
    isAvailable: true,
    img: 'assets/img/Shoes1.jpg',
    name: 'Shoes1',
    description: 'Shoes1',
    price: 43.89,
    category: Category.shoes,
    count: 10,
    sex: Sex.man
  },
  {
    id: 13,
    isAvailable: false,
    img: 'assets/img/10777422-1.jpg',
    name: 'Shoes1',
    description: 'Addidas 10777422-1',
    price: 77.89,
    category: Category.shoes,
    count: 10,
    sex: Sex.man
  },
  {
    id: 14,
    isAvailable: true,
    img: 'assets/img/10200449-1.jpg',
    name: 'Shoes1',
    description: 'Addidas 10200449',
    price: 98.09,
    category: Category.shoes,
    count: 10,
    sex: Sex.man
  },
  {
    id: 15,
    isAvailable: false,
    img: 'assets/img/10520169-1.jpg',
    name: 'Shoes1',
    description: 'Addidas 10520169',
    price: 88.89,
    category: Category.shoes,
    count: 10,
    sex: Sex.man
  },
  {
    id: 16,
    isAvailable: true,
    img: 'assets/img/Socks1.jpg',
    name: 'Socks1',
    description: 'Socks1',
    price: 11.12,
    category: Category.socks,
    count: 10,
    sex: Sex.man
  },
  {
    id: 17,
    isAvailable: true,
    img: 'assets/img/4598367-1.jpg',
    name: 'Socks 4598367',
    description: '4598367',
    price: 9.15,
    category: Category.socks,
    count: 10,
    sex: Sex.unisex
  },
  {
    id: 18,
    isAvailable: true,
    img: 'assets/img/6463874-1.jpg',
    name: 'Socks 6463874',
    description: '6463874',
    price: 8.52,
    category: Category.socks,
    count: 10,
    sex: Sex.unisex
  },
  {
    id: 19,
    isAvailable: true,
    img: 'assets/img/6798696-1.jpg',
    name: 'Socks 6798696',
    description: '6798696',
    price: 11.12,
    category: Category.socks,
    count: 10,
    sex: Sex.man
  },
  {
    id: 20,
    isAvailable: true,
    img: 'assets/img/8689117-2.jpg',
    name: 'Socks 8689117',
    description: '8689117',
    price: 11.55,
    category: Category.socks,
    count: 10,
    sex: Sex.man
  },
  {
    id: 21,
    isAvailable: true,
    img: 'assets/img/10699920-1.jpg',
    name: 'Socks 10699920',
    description: '10699920',
    price: 5.55,
    category: Category.socks,
    count: 10,
    sex: Sex.woman
  },
  {
    id: 22,
    isAvailable: true,
    img: 'assets/img/10699929-1.jpg',
    name: 'Socks 10699929',
    description: '10699929',
    price: 7.99,
    category: Category.socks,
    count: 10,
    sex: Sex.unisex
  },
  {
    id: 23,
    isAvailable: true,
    img: 'assets/img/Suit1.jpg',
    name: 'Suit1',
    description: 'Suit1',
    price: 29.99,
    category: Category.suits,
    count: 10,
    sex: Sex.man
  },
  {
    id: 24,
    isAvailable: true,
    img: 'assets/img/9881835-1.jpg',
    name: 'Suit 9881835',
    description: '9881835',
    price: 48.40,
    category: Category.suits,
    count: 10,
    sex: Sex.woman
  },
  {
    id: 25,
    isAvailable: false,
    img: 'assets/img/9883277-1.jpg',
    name: 'Suit 9883277',
    description: '9883277',
    price: 58.30,
    category: Category.suits,
    count: 10,
    sex: Sex.woman
  },
  {
    id: 26,
    isAvailable: true,
    img: 'assets/img/9443496-1.jpg',
    name: 'Suit 9443496',
    description: '9443496',
    price: 89.20,
    category: Category.suits,
    count: 10,
    sex: Sex.woman
  },
  {
    id: 27,
    isAvailable: false,
    img: 'assets/img/10392472-1.jpg',
    name: 'Suit 10392472',
    description: '10392472',
    price: 90.10,
    category: Category.suits,
    count: 10,
    sex: Sex.man
  },
  {
    id: 28,
    isAvailable: true,
    img: 'assets/img/10871570-1.jpg',
    name: 'Suit 10871570',
    description: '10871570',
    price: 57.10,
    category: Category.suits,
    count: 10,
    sex: Sex.man
  },
  {
    id: 29,
    isAvailable: true,
    img: 'assets/img/8810958-1.jpg',
    name: 'Suit 8810958',
    description: '8810958',
    price: 39.99,
    category: Category.suits,
    count: 10,
    sex: Sex.man
  },
  {
    id: 30,
    isAvailable: true,
    img: 'assets/img/8699776-1.jpg',
    name: 'Suit 8699776',
    description: '8699776',
    price: 87.99,
    category: Category.suits,
    count: 10,
    sex: Sex.man
  },
  {
    id: 31,
    isAvailable: true,
    img: 'assets/img/6957732-1.jpg',
    name: 'Suit 6957732',
    description: '6957732',
    price: 78.99,
    category: Category.suits,
    count: 10,
    sex: Sex.man
  }
];
