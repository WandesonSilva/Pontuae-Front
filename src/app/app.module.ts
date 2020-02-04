import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreRegisterComponent } from './pages/account-customer/pre-register/pre-register.component';
import { LoginClienteComponent } from './pages/account-customer/login-cliente/login-cliente.component';
import { MenuComponent } from './pages/shared/Menu.component';
import { RescueComponent } from './pages/pointing/rescue/rescue.component';
import { RegisterCustomerComponent } from './pages/account-customer/register-customer/register-customer.component';

import { PointCreateComponent } from './pages/settings/program-loyalty/config-point.ts/point-create/point-create.component';
import { AwardListComponent } from './pages/settings/program-loyalty/config-awards/award-list/award-list.component';
import { ProfileComponent } from './pages/account-company/profile/profile.component';
import { AwardCreateComponent } from './pages/settings/program-loyalty/config-awards/award-create/award-create.component';
import { ListClientPageComponent } from './pages/customer/list-client-page/list-client-page.component';

import { AuthenticationService } from './service/authentication.service';
import { ClientGuard } from './guards/client.guard';
import { AdminGuard } from './guards/Admin.guard';
import { AuthService } from './Guards/auth.service';

import { LoginComponent } from './pages/account-company/login/login.component';
import { RegisterCompanyComponent } from './pages/account-company/register-company/register-company.component';
import { PointEditComponent } from './pages/settings/program-loyalty/config-point.ts/point-edit/point-edit.component';
import { FormPointComponent } from './pages/settings/program-loyalty/form-shared/form-point/form-point.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { PointingComponent } from './pages/pointing/pointing/pointing.component';
import { PointComponent } from './pages/pointing/point/point.component';
import { DashboardCustomerModule } from './pages/dashboard-customer/dashboard-customer.module';
import { ProgramLoyaltyModule } from './pages/settings/program-loyalty/program-loyalty.module';
import { PointDeleteComponent } from './pages/settings/program-loyalty/config-point.ts/point-delete/point-delete.component';
import { AutomationCreateComponent } from './pages/marketing/automation/automation-create/automation-create.component';
import { AutomationEditComponent } from './pages/marketing/automation/automation-edit/automation-edit.component';
import { AutomationListComponent } from './pages/marketing/automation/automation-list/automation-list.component';
import { CampaignCreateComponent } from './pages/marketing/campaign/campaign-create/campaign-create.component';
import { CampaignEditComponent } from './pages/marketing/campaign/campaign-edit/campaign-edit.component';
import { ModelMessageComponent } from './pages/marketing/model-message/model-message.component';
import { CampaignListComponent } from './pages/marketing/campaign/campaign-list/campaign-list.component';

import { MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { CarregarModule } from './pages/shared/carregar/carregar.module';
import { ListProgramLoyaltyComponent } from './pages/settings/program-loyalty/config-point.ts/list-program-loyalty/list-program-loyalty.component';
import { AwardEditComponent } from './pages/settings/program-loyalty/config-awards/award-edit/award-edit.component';
import { ProgramLoyaltyComponent } from './pages/settings/program-loyalty/program-loyalty.component';
import { ProfileCustomerComponent } from './pages/account-customer/profile-customer/profile-customer.component';
import { ResetAccountComponent } from './pages/reset-account/reset-account.component';


export let options: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  declarations: [
    AppComponent,
    PreRegisterComponent,
    LoginClienteComponent,
    RegisterCompanyComponent,
    RescueComponent,
    RegisterCompanyComponent,
    LoginComponent,
    LoginClienteComponent,
    RegisterCustomerComponent,
    AppComponent,
    ProfileComponent,
    ProfileCustomerComponent,
    FormPointComponent,
    ListClientPageComponent,
    PointingComponent,
    PointComponent,
    AutomationCreateComponent,
    AutomationEditComponent,
    AutomationListComponent,
    CampaignCreateComponent,
    CampaignEditComponent,
    CampaignListComponent,
    ModelMessageComponent,
    ProgramLoyaltyComponent,
    ListProgramLoyaltyComponent,
    AwardListComponent,
    AwardCreateComponent,
    AwardEditComponent,
    PointCreateComponent,
    PointEditComponent,
    ResetAccountComponent

  ],

  imports: [
    DashboardCustomerModule,
    DashboardModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    MatDatepickerModule, MatNativeDateModule, MatInputModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgxMaskModule.forRoot(options),
    ReactiveFormsModule,
    CarregarModule
  ],
  exports: [],
  providers: [AuthenticationService, AuthService, ClientGuard, AdminGuard],
  bootstrap: [AppComponent],
  entryComponents: [
  ],

})
export class AppModule { }
