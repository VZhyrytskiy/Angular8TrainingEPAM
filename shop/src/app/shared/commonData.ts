import { Category } from "./enums/category.enum";
import { Product } from '../products/models/product.model';

export let Data: Array<Product> = [
    { id: 1, isAvailable: true, img: 'assets/img/Shirt1.jpg', name: 'Shirt1', description: 'Shirt1', price: 10.99, category: Category.shirts },
    { id: 2, isAvailable: true, img: 'assets/img/Pants1.jpg', name: 'Pants1', description: 'Pant1', price: 19.99, category: Category.pants },
    { id: 3, isAvailable: false, img: 'assets/img/Shoes1.jpg', name: 'Shoes1', description: 'Shoes1', price: 43.89, category: Category.shoes },
    { id: 4, isAvailable: true, img: 'assets/img/Socks1.jpg', name: 'Socks1', description: 'Socks1', price: 11.12, category: Category.socks },
    { id: 5, isAvailable: false, img: 'assets/img/Suit1.jpg', name: 'Suit1', description: 'Suit1', price: 29.99, category: Category.suits },
];