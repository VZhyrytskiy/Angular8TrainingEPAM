import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../shared/enums/category.enum'

@Component({
  selector: 'app-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
@Input() isAvailable: boolean;

  img: string = 'assets/img/Shirts1.jpg';
  name: string = 'First component';
  description: string = 'Firstt Descriprion';
  price: number = 99.90;
  category: Category = Category.shirts;


  constructor() { }

  ngOnInit() {
  }

}
