import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  // service: CartService;

  constructor(private cartService: CartService) {
    // this.service = cartService;
  }

  ngOnInit() {
  }

  onBuy(event) {
    // Лучше сделать этот компонент без зависимостей, презентационный.
    // Пусть он генерит аутпут, а родитель уже решает, что делать с продуктом
    this.cartService.addProduct(this.product);
  }

}
