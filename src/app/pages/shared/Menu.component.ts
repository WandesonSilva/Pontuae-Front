import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: '<app-nav></app-nav><app-navbar></app-navbar> <router-outlet></router-outlet>'
})
export class MenuComponent {

}

