import { Component, OnInit, Input } from '@angular/core';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  show: boolean;
  public claimValid;
  constructor() { }

  ngOnInit() {
    this.claimValid = Security.getUser().claimValue;
    console.log(this.claimValid)
    if (this.claimValid === 'Cliente') {
      this.show = true;
    } if (this.claimValid === 'Funcionario') {
      this.show = true;
    }
  }
}
