import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('title', { static: false })
  titleEl: ElementRef;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.titleEl.nativeElement.textContent = 'Super-puper Shop';
  }
}
