import { Component, OnInit, Input } from '@angular/core';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  show: boolean;
private claimValid;
  constructor() { }

  ngOnInit() {
    this.claimValid = Security.getUser().claim === 'Cliente';
    if (this.claimValid) {
      this.show = true;
     }
  }
}
