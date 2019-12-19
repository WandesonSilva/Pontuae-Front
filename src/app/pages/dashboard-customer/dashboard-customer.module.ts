import { NgModule } from '@angular/core';
import { DashboardCustomerComponent } from './dashboard-customer.component';
import { ListCompanyComponent } from './list-company/list-company.component';
import { ListCompanyInBalanceComponent } from './list-company-in-balance/list-company-in-balance.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from '../shared/Menu.component';
import { MenuModule } from '../shared/menu.module';



@NgModule({
  declarations: [
    DashboardCustomerComponent,
    ListCompanyComponent,
    ListCompanyInBalanceComponent,

  ],
  imports: [
    MenuModule,
    RouterModule,
    BrowserModule
  ],
  entryComponents:[
  
  ]
})
export class DashboardCustomerModule { }
