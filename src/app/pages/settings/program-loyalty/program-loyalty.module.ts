import { CommonModule } from '@angular/common';
import { AwardListComponent } from './config-awards/award-list/award-list.component';
import { AwardCreateComponent } from './config-awards/award-create/award-create.component';
import { AwardDeleteComponent } from './config-awards/award-delete/award-delete.component';
import { AwardEditComponent } from './config-awards/award-edit/award-edit.component';
import { PointCreateComponent } from './config-point.ts/point-create/point-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PointDeleteComponent } from './config-point.ts/point-delete/point-delete.component';
import { ListProgramLoyaltyComponent } from './config-point.ts/list-program-loyalty/list-program-loyalty.component';
import { ProgramLoyaltyComponent } from './program-loyalty.component';
import { PointEditComponent } from './config-point.ts/point-edit/point-edit.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgModule } from '@angular/core';
import { HistoricLoyaltyComponent } from '../../customer/historic-loyalty/historic-loyalty.component';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

 

@NgModule({
  declarations: [
    ProgramLoyaltyComponent,
    ListProgramLoyaltyComponent,
    HistoricLoyaltyComponent,
    AwardListComponent,
    AwardCreateComponent,
    AwardEditComponent,
    AwardDeleteComponent,
    PointCreateComponent,
    PointEditComponent,
    PointDeleteComponent
  
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    NgxMaskModule.forRoot(maskConfig),
  ]
})
export class ProgramLoyaltyModule { }
