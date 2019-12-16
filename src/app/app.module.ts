import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { NavComponent } from './pages/shared/nav/nav.component';
import { PreRegisterComponent } from './pages/account-customer/pre-register/pre-register.component';
import { LoginClienteComponent } from './pages/account-customer/login-cliente/login-cliente.component';
import { CarregarComponent } from './pages/shared/carregar/carregar.component';
import { MenuComponent } from './pages/shared/Menu.component';
import { PointComponent } from './pages/pointing/point/point.component';
import { RescueComponent } from './pages/pointing/rescue/rescue.component';
import { RegisterCustomerComponent } from './pages/account-customer/register-customer/register-customer.component';
import { ListCompanyComponent } from './pages/list-company/list-company.component';
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
// import { DashboardModule } from './pages/dashboard/dashboard.module';
import { CardGroupComponent } from './pages/dashboard/card-group/card-group.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardTotalSalesComponent } from './pages/dashboard/card-total-sales/card-total-sales.component';
import { ListProgramLoyaltyComponent } from './pages/settings/program-loyalty/config-point.ts/list-program-loyalty/list-program-loyalty.component';


export let options: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavComponent,
    PreRegisterComponent,
    LoginClienteComponent,
    MenuComponent,
    RegisterCompanyComponent,
    CardGroupComponent,
    DashboardComponent,
    CardTotalSalesComponent,
    CarregarComponent,
    PointComponent,
    RescueComponent,
    RegisterCompanyComponent,
    LoginComponent,
    LoginClienteComponent,
    RegisterCustomerComponent,
    AppComponent,
    PointCreateComponent,
    AwardListComponent,
    ProfileComponent,
    FormPointComponent, 
    ProgramLoyaltyComponent,
    ListCompanyComponent,
    AwardCreateComponent,
    ListClientPageComponent,
    PointEditComponent,
    ListProgramLoyaltyComponent 

    
  ],

  imports: [
    // DashboardModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxMaskModule.forRoot(options),
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [AuthenticationService, AuthService, ClientGuard, AdminGuard],


  bootstrap: [AppComponent]
  // entryComponents: [
  //   PointCreateComponent,
  //   AwardCreateComponent,
  // ],

})
export class AppModule { }
