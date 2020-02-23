import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/admin/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() { }

  clickLogOut() {
    if (this.userService.isAutorize) {
      this.userService.logOut();
    } else {
      this.router.navigate(['/login']);
    }
  }

}
