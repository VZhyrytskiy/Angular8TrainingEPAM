import { Injectable } from '@angular/core';
import { UseClass } from '../models/use-class';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
    return new UseClass();
   }
}
