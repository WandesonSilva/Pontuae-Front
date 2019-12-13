import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CardTotalSalesComponent } from './card-total-sales/card-total-sales.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CardGroupComponent } from './card-group/card-group.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CardTotalSalesComponent,
    CardGroupComponent
  ],
  imports: [
 
  ]
})
export class DashboardModule { }
