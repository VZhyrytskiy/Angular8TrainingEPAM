import { Router } from '@angular/router';
import { UserModel } from '../admin/components/models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/login/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSignIn: FormGroup;
  user: UserModel;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.formSignIn = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      isRemember: new FormControl('')
    });
  }

  clickSignIn() {
    const formData = { ...this.formSignIn.value } as UserModel;
  }

  onSubmit() {
    const formData = { ...this.formSignIn.value };

    if (!formData.email || !formData.password) {
      return;
    }

    const { email, password } = formData;
    const user = { email, password };

    this.userService.signIn(user, formData.isRemember);
    if (this.userService.isAutorize) {
      this.router.navigate(['/home']);
    }
  }
}
