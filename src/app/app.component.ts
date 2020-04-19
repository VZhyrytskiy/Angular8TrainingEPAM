import { AppSettingsService } from './setings/app-settings.service';

import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('title', { static: false })
  titleEl: ElementRef;

  title = 'Super-puper Shop';

  constructor(private appSettingsService: AppSettingsService) { }

  ngOnInit() {
    const key = 'title';
    this.titleEl.nativeElement.textContent = this.appSettingsService.settings[key]; // 'Super-puper Shop';
  }

  ngAfterViewInit() {

  }
}
