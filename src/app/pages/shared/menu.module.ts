
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './Menu.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    MenuComponent,
    NavComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

})
export class MenuModule {
}
