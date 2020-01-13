import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarregarComponent } from './carregar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CarregarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ CarregarComponent ]
})
export class CarregarModule { 
 
}

