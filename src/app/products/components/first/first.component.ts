import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
@Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
