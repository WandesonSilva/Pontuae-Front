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
     console.log( Security.getUser());
    this.claimValid = Security.getUser().claimValue === 'Cliente';
    if (this.claimValid) {
     this.show = true;
   }
  }
}
