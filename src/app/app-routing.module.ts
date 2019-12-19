import { AuthService } from './Guards/auth.service';
import { ClientGuard } from './guards/client.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminGuard } from './guards/Admin.guard';
import { MenuComponent } from './pages/shared/Menu.component';
import { RegisterCustomerComponent } from './pages/account-customer/register-customer/register-customer.component';
import { LoginClienteComponent } from './pages/account-customer/login-cliente/login-cliente.component';
import { LoginComponent } from './pages/account-company/login/login.component';
import { ListCompanyComponent } from './pages/dashboard-customer/list-company/list-company.component';
import { AwardListComponent } from './pages/settings/program-loyalty/config-awards/award-list/award-list.component';
import { ProgramLoyaltyComponent } from './pages/settings/program-loyalty/program-loyalty.component';
import { ListClientPageComponent } from './pages/customer/list-client-page/list-client-page.component';

import { ProfileComponent } from './pages/account-company/profile/profile.component';
import { PointComponent } from './pages/pointing/point/point.component';
import { PreRegisterComponent } from './pages/account-customer/pre-register/pre-register.component';
import { RegisterCompanyComponent } from './pages/account-company/register-company/register-company.component';
import { CardGroupComponent } from './pages/dashboard/card-group/card-group.component';
import { FormPointComponent } from './pages/settings/program-loyalty/form-shared/form-point/form-point.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PointingComponent } from './pages/pointing/pointing/pointing.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { DashboardCustomerModule } from './pages/dashboard-customer/dashboard-customer.module';
import { DashboardCustomerComponent } from './pages/dashboard-customer/dashboard-customer.component';

const routes: Routes = [

  {
    path: '',
    component: MenuComponent,
    canActivate: [AuthService, ],
    children: [

      { path: '', component: DashboardComponent, canActivate: [AdminGuard] },
      { path: 'home', component: DashboardComponent , canActivate: [AdminGuard]},

      { path: 'preCadastro', component: PreRegisterComponent , canActivate: [AdminGuard]},
      { path: 'perfil', component: ProfileComponent , canActivate: [AdminGuard]},
      { path: 'pointing', component: PointingComponent, canActivate: [AdminGuard] },

      { path: 'listClientPage', component: ListClientPageComponent, canActivate: [AdminGuard] },

      {
        path: 'config', component: ProgramLoyaltyComponent , canActivate: [AdminGuard] ,
        children: [
          { path: 'listProgram', component: ProgramLoyaltyComponent },
          { path: 'formRulePoint', component: FormPointComponent },
          { path: 'formAward', component: FormPointComponent },
          { path: 'listAward', component: AwardListComponent },
          { path: '', redirectTo: '/config', pathMatch: 'full' },
        ]
      },
    ]
  },
  {
    path: 'home-client', component: MenuComponent,
   // canActivate: [AuthService, ClientGuard],
    children: [
      { path: 'Dash', component: DashboardCustomerComponent  },
      { path: 'list', component: ListCompanyComponent }
    ]

  },

  { path: 'login', component: LoginComponent },
  { path: 'loginCliente', component: LoginClienteComponent },
  { path: 'cadastrar', component: RegisterCompanyComponent },
  { path: 'registerCustomer', component: RegisterCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
