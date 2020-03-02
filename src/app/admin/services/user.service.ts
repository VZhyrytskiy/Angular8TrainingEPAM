import { LocalStorageService } from './../../core/services/local-storage.service';
import { UserOptions } from './../../core/models/user-options';
import { Injectable } from '@angular/core';
import { UserModel } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isAutorize = false;
  user: UserModel;
  userOptions: UserOptions;

  constructor(private localStorageService: LocalStorageService, ) {
    this.readUserLocalStorage()
      .then((user) => {
        this.user = user as UserModel;
        this.isAutorize = user && user.email ? true : false;
        return user ? user.email : null;
      })
      .then(this.readUserLocalOptionsStorage)
      .then((options) => { this.userOptions = options as UserOptions; });
  }

  signIn(user: UserModel, remember: boolean) {
    if (remember) {
      this.saveUser(user);
    } else {
      this.localStorageService.removeItem(user.email);
    }
    this.user = user;
    this.isAutorize = true;
  }

  logOut() {
    this.user = null;
    this.isAutorize = false;
  }

  private async readUserLocalStorage() {
    const localUser = this.localStorageService.getItem('login') as UserModel;
    return localUser;
  }

  private saveUser(user: UserModel) {
    this.localStorageService.setItem(user.email, user);
  }

  private async readUserLocalOptionsStorage(login: string) {
    if (!login) {
      return null;
    }
    const localUserOptions = this.localStorageService.getItem(login) as UserOptions;
    return localUserOptions;
  }

}
