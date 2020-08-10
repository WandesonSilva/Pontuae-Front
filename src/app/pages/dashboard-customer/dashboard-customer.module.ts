import { NgModule } from '@angular/core';
import { DashboardCustomerComponent } from './dashboard-customer.component';
import { ListCompanyInBalanceComponent } from './list-company-in-balance/list-company-in-balance.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from '../shared/Menu.component';
import { MenuModule } from '../shared/menu.module';
import { CarregarComponent } from '../shared/carregar/carregar.component';
import { AppModule } from '../../app.module';
import { CarregarModule } from '../shared/carregar/carregar.module';
import { ListCardCompanyComponent } from './list-card-company/list-card-company.component';



@NgModule({
  declarations: [
    DashboardCustomerComponent,
    ListCardCompanyComponent,
    ListCompanyInBalanceComponent,
  ],
  imports: [
    CarregarModule,
    MenuModule,
    RouterModule,
    BrowserModule
  ],
  
})
export class DashboardCustomerModule { }
