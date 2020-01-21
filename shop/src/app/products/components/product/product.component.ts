import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  isAvailable: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onBuy(event) {
    console.log('Buy OK!');
  }

}
