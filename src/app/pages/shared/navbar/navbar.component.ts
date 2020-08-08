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

  GoOut() {
    // tslint:disable-next-line: no-conditional-assignment
    if (this.claimOfUser) {
     this.Logout();
    } else {
      this.LogoutCliente();
    }
  }

  GoHome() {
    const userLog =  this.claimOfUser 
    if( userLog === 'Administrador'){
      this.router.navigate(['/home']);
    }
    if( userLog === 'Colaborador'){
      this.router.navigate(['/homeFuncionario']);
    }
    if( userLog === 'Cliente'){
      this.router.navigate(['/home-client']);
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
    if (this.claimOfUser === "Administrador") {
      console.log('aqui');
      this.router.navigate(['/profile']);
    } if (this.claimOfUser === "Funcionario") {
      console.log('aqui3');
      this.router.navigate(['/profile']);
    } 
    else {
      console.log('aqui2');
      this.router.navigate(['/home-client/profile-customer']);
    }
  }

}
