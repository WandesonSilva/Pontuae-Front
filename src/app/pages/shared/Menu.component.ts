import { Component, OnInit } from '@angular/core';
import { Security } from 'src/app/utils/security.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  template: '<app-nav></app-nav><app-navbar></app-navbar> <router-outlet></router-outlet>'
})
export class MenuComponent {


}

