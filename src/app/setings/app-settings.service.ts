import { LocalStorageService } from './../core/services/local-storage.service';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  settings: object;

  constructor(private localStorageService: LocalStorageService, private http: HttpClient) {
    this.settings = this.localStorageService.getItem('setings');
    if (!this.settings) {
      this.getSettings().subscribe((date) => {
        if (date) {
          this.settings = date;
        } else {
          this.settings = { title: 'super-puper-shop' };
        }
        this.localStorageService.setItem('setings', this.settings);
      });
    }
  }

  private getSettings(): Observable<object> {
    return this.http.get('./assets/app-settings.json').pipe(map((response) => response));
  }
}
