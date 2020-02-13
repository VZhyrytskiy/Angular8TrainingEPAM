import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('title', { static: false })
  title: ElementRef;

  constructor() { }

  ngOnInit() {
    this.title.nativeElement.textContent = 'Super-puper Shop';
  }
}
