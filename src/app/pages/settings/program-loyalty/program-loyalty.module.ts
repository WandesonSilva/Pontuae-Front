import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardListComponent } from './config-awards/award-list/award-list.component';
import { AwardCreateComponent } from './config-awards/award-create/award-create.component';
import { AwardEditComponent } from './config-awards/award-edit/award-edit.component';
import { PointCreateComponent } from './config-point.ts/point-create/point-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProgramLoyaltyComponent } from './program-loyalty.component';
import { PointEditComponent } from './config-point.ts/point-edit/point-edit.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { CarregarModule } from '../../shared/carregar/carregar.module';


const maskConfig: Partial<IConfig> = {
  validation: false,
}; 

@NgModule({
  declarations: [
    ProgramLoyaltyComponent,  
    AwardListComponent,
    AwardCreateComponent,
    AwardEditComponent,
    PointCreateComponent,
    PointEditComponent
  
  ],
  imports: [
    ReactiveFormsModule,
    CarregarModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    
    NgxMaskModule.forRoot(maskConfig),
  ]
})
export class ProgramLoyaltyModule { }
