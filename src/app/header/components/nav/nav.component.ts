import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None  // с какой целью? если это стили для приложения, почему бы их не перенести в специальный файл стилей
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
