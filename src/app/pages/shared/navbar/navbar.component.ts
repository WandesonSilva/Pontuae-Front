import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: User;
  public claimOfUser;
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.user = Security.getUser();
    this.claimOfUser = this.user.claim === 'Admin';
  }

  GoOut() {
    // tslint:disable-next-line: no-conditional-assignment
    if (this.claimOfUser) {
     this.Logout();
    } else {
      this.LogoutCliente();
    }
  }

  GoHome() {
    if (this.claimOfUser) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/client/dashboard']);
    }
  }

  Logout() {
    Security.clear();
    this.router.navigate(['/login']);
  }

  LogoutCliente() {
    Security.clear();
    this.router.navigate(['/loginCliente']);
  }

  ToProfile() {
    if (this.claimOfUser) {
      console.log('aqui');
      this.router.navigate(['/profile']);
    } else {
      console.log('aqui2');
      this.router.navigate(['/client/profile-customer']);
    }
  }

}
