import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(private productsService: ProductsService, private cartService: CartService) {
    this.products = this.productsService.getProducts();
  }

  ngOnInit() { }

  addProduct(event) {
    this.cartService.addProduct(event);
  }

}
