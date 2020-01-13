import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { NavComponent } from './pages/shared/nav/nav.component';
import { PreRegisterComponent } from './pages/account-customer/pre-register/pre-register.component';
import { LoginClienteComponent } from './pages/account-customer/login-cliente/login-cliente.component';
import { CarregarComponent } from './pages/shared/carregar/carregar.component';
import { MenuComponent } from './pages/shared/Menu.component';
import { RescueComponent } from './pages/pointing/rescue/rescue.component';
import { RegisterCustomerComponent } from './pages/account-customer/register-customer/register-customer.component';

import { PointCreateComponent } from './pages/settings/program-loyalty/config-point.ts/point-create/point-create.component';
import { AwardListComponent } from './pages/settings/program-loyalty/config-awards/award-list/award-list.component';
import { ProfileComponent } from './pages/account-company/profile/profile.component';
import { ProgramLoyaltyComponent } from './pages/settings/program-loyalty/program-loyalty.component';
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
import { DashboardCustomerComponent } from './pages/dashboard-customer/dashboard-customer.component';
import { ListCompanyComponent } from './pages/dashboard-customer/list-company/list-company.component';
import { MenuModule } from './pages/shared/menu.module';
import { ProgramLoyaltyModule } from './pages/settings/program-loyalty/program-loyalty.module';
import { PointDeleteComponent } from './pages/settings/program-loyalty/config-point.ts/point-delete/point-delete.component';
import { CarregarModule } from './pages/shared/carregar/carregar.module';
import { ProfileCustomerComponent } from './pages/account-customer/profile-customer/profile-customer.component';


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
    FormPointComponent, 
    ListClientPageComponent,
    PointingComponent,
    PointComponent,
    PointCreateComponent,
    PointDeleteComponent,
    PointEditComponent,
    ProfileCustomerComponent,

  ],

  imports: [
    CarregarModule,
    MenuModule,
    ProgramLoyaltyModule,
    DashboardCustomerModule,
    DashboardModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxMaskModule.forRoot(options),
    ReactiveFormsModule
  ],
  exports: [],
  providers: [AuthenticationService, AuthService, ClientGuard, AdminGuard],


  bootstrap: [AppComponent],
 entryComponents: [

  DashboardCustomerComponent,
   //PointCreateComponent,
   //AwardCreateComponent,
  //MenuComponent
  ],
  

})
export class AppModule { }
