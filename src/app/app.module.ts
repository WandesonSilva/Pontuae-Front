import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ComponentFactoryResolver  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginClienteComponent } from './pages/account-customer/login-cliente/login-cliente.component';
import { RescueComponent } from './pages/pointing/rescue/rescue.component';


import { ProfileComponent } from './pages/account-company/profile/profile.component';
import { ListClientPageComponent } from './pages/customer/list-client-page/list-client-page.component';

import { AuthenticationService } from './service/authentication.service';
import { ClientGuard } from './guards/client.guard';


import { LoginComponent } from './pages/account-company/login/login.component';
import { RegisterCompanyComponent } from './pages/account-company/register-company/register-company.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { PointingComponent } from './pages/pointing/pointing/pointing.component';
import { PointComponent } from './pages/pointing/point/point.component';
import { DashboardCustomerModule } from './pages/dashboard-customer/dashboard-customer.module';

import {  MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';

import { CarregarModule } from './pages/shared/carregar/carregar.module';
import { ProfileCustomerComponent } from './pages/account-customer/profile-customer/profile-customer.component';
import { ResetAccountComponent } from './pages/reset-account/reset-account.component';
import { MarketingComponent } from './pages/marketing/marketing/marketing.component';
import { ClientDetailPageComponent } from './pages/customer/client-detail-page/client-detail-page.component';
import { PreRegisterComponent } from './pages/pointing/pre-register/pre-register.component';

import { RegisterEmployeeComponent } from './pages/account-employee/register-employee/register-employee.component';
import { EditEmployeeComponent } from './pages/account-employee/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './pages/account-employee/list-employee/list-employee.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterCustomerComponent } from './pages/account-customer/register-customer/register-customer.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthService } from './guards/auth.service';
import { EmployeeGuard } from './guards/employee.guard';
import { HelpPageComponent } from './pages/help-page/help-page.component';



const maskConfig: Partial<IConfig> = {
  validation: false,
};

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
    
    ListClientPageComponent,
    PointingComponent,
    PointComponent,
    HelpPageComponent,
    ResetAccountComponent,
    RescueComponent,
    MarketingComponent,
    ClientDetailPageComponent,

    RegisterEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
    PasswordRecoveryComponent,
    ForgotPasswordComponent

    

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
    NgxMaskModule.forRoot(maskConfig),
    ReactiveFormsModule,
    CarregarModule
  ],
  exports: [],
  providers: [ MatDatepickerModule, MatNativeDateModule, MatInputModule, AuthenticationService, AuthService, ClientGuard, AdminGuard, EmployeeGuard, ],
  bootstrap: [AppComponent],
  entryComponents: [
  ],

})
export class AppModule { }
