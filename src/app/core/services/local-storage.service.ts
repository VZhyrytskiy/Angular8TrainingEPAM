import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, obj: object) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  getItem(key: string): object {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
