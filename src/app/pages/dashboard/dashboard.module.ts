import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CardTotalSalesComponent } from './card-total-sales/card-total-sales.component';
import { CardGroupComponent } from './card-group/card-group.component';
import { CardTicketMediumComponent } from './card-ticket-medium/card-ticket-medium.component';
import { CardTotalCustomerComponent } from './card-total-customer/card-total-customer.component';
import { CardPeakDayWeekComponent } from './card-peak-day-week/card-peak-day-week.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    CardTotalSalesComponent,
    CardGroupComponent,
    CardTicketMediumComponent,
    CardTotalCustomerComponent,
    CardPeakDayWeekComponent,
    
  ],
  imports: [

   RouterModule

  ]
})
export class DashboardModule { }
