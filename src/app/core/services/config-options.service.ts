import { Injectable } from '@angular/core';
import { UserOptions } from '../models/user-options';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  userOptions: UserOptions;

  constructor() { }

  setUserOptions(obj: UserOptions) {
    this.userOptions = {...this.userOptions, ...obj };
  }

  getUserOptions() {
    return this.userOptions;
  }
}
