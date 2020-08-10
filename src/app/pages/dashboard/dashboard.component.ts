import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(   private router: Router, ) { }

  ngOnInit() {
    this.goNavigateHomeRole();
      }
    
      goNavigateHomeRole(){
        const user = Security.getUser(); 
        if(user.claimValue === "Cliente"){
          this.router.navigate(['/home-client']);
        } if(user.claimValue === "Administrador"){
          this.router.navigate(['/home']);
        }if(user.claimValue === "Funcionario"){
          console.log('func')
          this.router.navigate(['/insert-point-employee']);
        }
        
      }
}
