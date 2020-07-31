import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-loyalty',
  templateUrl: './program-loyalty.component.html',
  styleUrls: ['./program-loyalty.component.css']
})
export class ProgramLoyaltyComponent implements OnInit {

  constructor(   private router: Router) { 
 
  }

  ngOnInit() {
  }
  backPage(){
    this.router.navigate(['/home']);
  }
}
