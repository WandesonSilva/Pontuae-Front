
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './Menu.component';
import { RouterModule } from '@angular/router';
import { CarregarComponent } from './carregar/carregar.component';
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
  entryComponents: []

})
export class MenuModule {
}
