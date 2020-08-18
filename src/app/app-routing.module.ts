
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { MenuComponent } from './pages/shared/Menu.component';
import { LoginClienteComponent } from './pages/account-customer/login-cliente/login-cliente.component';
import { LoginComponent } from './pages/account-company/login/login.component';
import { ListCardCompanyComponent } from './pages/dashboard-customer/list-card-company/list-card-company.component';
import { AwardListComponent } from './pages/settings/program-loyalty/config-awards/award-list/award-list.component';
import { ListClientPageComponent } from './pages/customer/list-client-page/list-client-page.component';
import { ProfileComponent } from './pages/account-company/profile/profile.component';
import { RegisterCompanyComponent } from './pages/account-company/register-company/register-company.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { DashboardCustomerComponent } from './pages/dashboard-customer/dashboard-customer.component';
import { AutomationCreateComponent } from './pages/marketing/automation/automation-create/automation-create.component';
import { AutomationEditComponent } from './pages/marketing/automation/automation-edit/automation-edit.component';
import { AutomationListComponent } from './pages/marketing/automation/automation-list/automation-list.component';
import { CampaignCreateComponent } from './pages/marketing/campaign/campaign-create/campaign-create.component';
import { CampaignEditComponent } from './pages/marketing/campaign/campaign-edit/campaign-edit.component';
import { CampaignListComponent } from './pages/marketing/campaign/campaign-list/campaign-list.component';
import { ProgramLoyaltyComponent } from './pages/settings/program-loyalty/program-loyalty.component';
import { PointEditComponent } from './pages/settings/program-loyalty/config-point.ts/point-edit/point-edit.component';
import { AwardCreateComponent } from './pages/settings/program-loyalty/config-awards/award-create/award-create.component';
import { AwardEditComponent } from './pages/settings/program-loyalty/config-awards/award-edit/award-edit.component';
import { ProfileCustomerComponent } from './pages/account-customer/profile-customer/profile-customer.component';
import { ResetAccountComponent } from './pages/reset-account/reset-account.component';
import { MarketingComponent } from './pages/marketing/marketing/marketing.component';
import { AutomationClientReturnDetailComponent } from './pages/marketing/automation/automation-client-return-detail/automation-client-return-detail.component';
import { CampaignClientReturnDetailComponent } from './pages/marketing/campaign/campaign-client-return-detail/campaign-client-return-detail.component';
import { PreRegisterComponent } from './pages/pointing/pre-register/pre-register.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { RegisterEmployeeComponent } from './pages/account-employee/register-employee/register-employee.component';
import { ListEmployeeComponent } from './pages/account-employee/list-employee/list-employee.component';
import { EditEmployeeComponent } from './pages/account-employee/edit-employee/edit-employee.component';
import { RescueComponent } from './pages/pointing/rescue/rescue.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterCustomerComponent } from './pages/account-customer/register-customer/register-customer.component';
import { AdminGuard } from './guards/admin.guard';
import { ClientDetailPageComponent } from './pages/customer/client-detail-page/client-detail-page.component';
import { AuthService } from './guards/auth.service';
import { EmployeeGuard } from './guards/employee.guard';
import { ClientGuard } from './guards/client.guard';




const routes: Routes = [

  {
    path: '',
    component: MenuComponent,
     canActivate: [AuthService],
    children: [
   
      { path: '', component: DashboardComponent },
      { path: 'home', component: DashboardComponent },
      { path: 'insert-point-employee', component: PreRegisterComponent ,  canActivate: [EmployeeGuard], },
      { path: 'insert-point', component: PreRegisterComponent , canActivate: [AdminGuard], },
      //{ path: 'rescue/:contato', component: RescueComponent },
      // {
      // children:[
      //   { path: 'rescue/:id', component: RescueComponent },
      // ]
      // },
      { path: 'rescue-point', component: RescueComponent,  canActivate: [AdminGuard], },
      { path: 'profile', component: ProfileComponent,  canActivate: [AdminGuard], },
      // tslint:disable-next-line: max-line-length
      // { path: 'pointing', component: PointingComponent },  agora será apenas rota de pontuacao, a tomada de desição de pre registra telefone fica no servidor
      { path: 'new-employee', component: RegisterEmployeeComponent,  canActivate: [AdminGuard], },
      { path: 'edit-employee/:id', component: EditEmployeeComponent,  canActivate: [AdminGuard],},
      { path: 'list-employee', component: ListEmployeeComponent,  canActivate: [AdminGuard],},
      { path: 'list-customer', component: ListClientPageComponent ,  canActivate: [AdminGuard],},
      { path: 'detail-customer/:id', component: ClientDetailPageComponent ,  canActivate: [AdminGuard],},



      {
        path: 'config', component: ProgramLoyaltyComponent,
        children: [

          { path: 'point-edit', component: PointEditComponent, canActivate: [AdminGuard],},
          { path: 'award-create', component: AwardCreateComponent, canActivate: [AdminGuard], },
          { path: 'list-award', component: AwardListComponent, canActivate: [AdminGuard], },
          { path: 'award-edit/:id', component: AwardEditComponent , canActivate: [AdminGuard],},         
          { path: '', redirectTo: '/config', pathMatch: 'full' },
        ]
      },


      {
        path: 'marketing', component: MarketingComponent,
        children: [
          { path: 'automation-create', component: AutomationCreateComponent, canActivate: [AdminGuard], },
          { path: 'automation-edit/:id', component: AutomationEditComponent,  canActivate: [AdminGuard], },
          { path: 'list-automation', component: AutomationListComponent, canActivate: [AdminGuard], },


          { path: 'campaign-create', component: CampaignCreateComponent, canActivate: [AdminGuard], },
          { path: 'campaign-edit', component: CampaignEditComponent, canActivate: [AdminGuard], },
          { path: 'list-campaign', component: CampaignListComponent , canActivate: [AdminGuard],},

          { path: 'detail-return-clients-automation/:id', component: AutomationClientReturnDetailComponent, canActivate: [AdminGuard],},
          { path: 'detail-return-clients-campaign/:id', component:  CampaignClientReturnDetailComponent, canActivate: [AdminGuard],},

        ]

      }

    ]
  },
  {
    path: 'home-client', component: MenuComponent,
     canActivate: [AuthService, ClientGuard],
    children: [
      { path: '', component: DashboardCustomerComponent },
      { path: 'list', component: ListCardCompanyComponent },
      { path: 'profile-customer', component: ProfileCustomerComponent },
    ]

  },
  {
    path: 'home-employee', component: MenuComponent,
     canActivate: [AuthService, EmployeeGuard],
    children: [
      { path: '', component: DashboardModule },
      { path: 'insert-point', component: PreRegisterComponent },
      { path: 'rescue-point', component: RescueComponent },

    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'registerCampany', component: RegisterCompanyComponent },
  { path: 'resetAccount', component: ResetAccountComponent },
  { path: 'loginCliente', component: LoginClienteComponent },
  { path: 'registerCustomer', component: RegisterCustomerComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
