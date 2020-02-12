import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop'; // значение должно устанавливатся через доступ к шаблону с помощью декоратора и шаблонной переменной. задание ко второй теме

  constructor() { }
}
