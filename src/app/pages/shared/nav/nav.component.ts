import { Component, OnInit, Input } from '@angular/core';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  show: boolean;

  constructor() { }

  ngOnInit() {
    if (Security.getUser().claim === 'Cliente') {
      this.show = true;
    }
  }



}
