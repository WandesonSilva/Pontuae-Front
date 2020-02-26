import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CampaignCreateComponent } from '../campaign/campaign-create/campaign-create.component';
import { CampaignEditComponent } from '../campaign/campaign-edit/campaign-edit.component';
import { CampaignListComponent } from '../campaign/campaign-list/campaign-list.component';
import { AutomationCreateComponent } from '../automation/automation-create/automation-create.component';
import { AutomationEditComponent } from '../automation/automation-edit/automation-edit.component';
import { AutomationListComponent } from '../automation/automation-list/automation-list.component';

@NgModule({
  declarations: [
    CampaignCreateComponent,
    CampaignEditComponent,
    CampaignListComponent,
    AutomationCreateComponent,
    AutomationEditComponent,
    AutomationListComponent,
  
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class MarketingModule { }