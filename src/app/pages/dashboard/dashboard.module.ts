import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CardTotalSalesComponent } from './card-total-sales/card-total-sales.component';
import { CardTicketMediumComponent } from './card-ticket-medium/card-ticket-medium.component';
import { CardTotalCustomerComponent } from './card-total-customer/card-total-customer.component';
import { CardPeakDayWeekComponent } from './card-peak-day-week/card-peak-day-week.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../shared/menu.module';
import { CardGeneratedRecipeComponent } from './card-generated-recipe/card-generated-recipe.component';
import { CardGroupComponent } from './card-group/card-group.component';
import { CardPeakSalesComponent } from './card-peak-sales/card-peak-sales.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CardTotalSalesComponent,
    CardGroupComponent,
    CardTicketMediumComponent,
    CardTotalCustomerComponent,
    CardPeakDayWeekComponent,
    CardGeneratedRecipeComponent,
    CardPeakSalesComponent
    
  ],
  imports: [
    RouterModule ,
    
  ]
})
export class DashboardModule { }
