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
    this.claimOfUser = this.user.claimValue;
  }


  GoHome() {
    const userLog = this.claimOfUser
    if (userLog === 'Administrador' || userLog === 'Funcionario') {
      this.router.navigate(['/home']);
    } if (userLog === 'Cliente') {
      this.router.navigate(['/home-client']);
    }
  }

  GoOut() {
    Security.clear();
    if (this.claimOfUser === "Administrador") {
      this.router.navigate(['/login']);
    } if (this.claimOfUser === "Funcionario") {
      this.router.navigate(['/login']);
    }  else {
      this.router.navigate(['/loginCliente']);
    }
  }
  ToProfile() {
    if (this.claimOfUser === "Administrador") {
          this.router.navigate(['/profile']);
    } if (this.claimOfUser === "Funcionario") {
      this.router.navigate(['/profile']);
    }
    else {
      this.router.navigate(['/home-client/profile-customer']);
    }
  }

}
