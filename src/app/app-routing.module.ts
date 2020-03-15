import { AuthService } from './Guards/auth.service';
import { ClientGuard } from './guards/client.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { AdminGuard } from './guards/Admin.guard';
import { MenuComponent } from './pages/shared/Menu.component';
import { RegisterCustomerComponent } from './pages/account-customer/register-customer/register-customer.component';
import { LoginClienteComponent } from './pages/account-customer/login-cliente/login-cliente.component';
import { LoginComponent } from './pages/account-company/login/login.component';
import { ListCompanyComponent } from './pages/dashboard-customer/list-company/list-company.component';
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
import { ClientDetailPageComponent } from './Pages/customer/client-detail-page/client-detail-page.component';
import { AutomationClientReturnDetailComponent } from './pages/marketing/automation/automation-client-return-detail/automation-client-return-detail.component';
import { CampaignClientReturnDetailComponent } from './pages/marketing/campaign/campaign-client-return-detail/campaign-client-return-detail.component';
import { PreRegisterComponent } from './pages/pointing/pre-register/pre-register.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { RegisterEmployeeComponent } from './pages/account-employee/register-employee/register-employee.component';
import { ListEmployeeComponent } from './pages/account-employee/list-employee/list-employee.component';
import { EditEmployeeComponent } from './pages/account-employee/edit-employee/edit-employee.component';
import { RescueComponent } from './pages/pointing/rescue/rescue.component';



const routes: Routes = [

  {
    path: '',
    component: MenuComponent,
    //canActivate: [AuthService, AdminGuard],
    children: [

      { path: '', component: DashboardComponent },
      { path: 'home', component: DashboardComponent },


      { path: 'insert-point', component: PreRegisterComponent },
      { path: 'rescue-point', component: RescueComponent },
      { path: 'profile', component: ProfileComponent },
      // { path: 'pointing', component: PointingComponent },  agora será apenas rota de pontuacao, a tomada de desição de pre registra telefone fica no servidor
      { path: 'new-employee', component: RegisterEmployeeComponent },
      { path: 'edit-employee', component: EditEmployeeComponent},
      { path: 'list-employee', component: ListEmployeeComponent},
      { path: 'list-customer', component: ListClientPageComponent },
      { path: 'detail-customer', component: ClientDetailPageComponent },
      
 
      
      {
        path: 'config', component: ProgramLoyaltyComponent,
        children: [

          //  
          { path: 'point-edit', component: PointEditComponent },
          { path: 'award-create', component: AwardCreateComponent },
          { path: 'award-edit', component: AwardEditComponent },
          { path: 'list-award', component: AwardListComponent },
          { path: '', redirectTo: '/config', pathMatch: 'full' },
        ]
      },


      {
        path: 'marketing', component: MarketingComponent,
        children: [
          { path: 'automation-create', component: AutomationCreateComponent },
          { path: 'automation-edit', component: AutomationEditComponent },
          { path: 'list-automation', component: AutomationListComponent },
        

          { path: 'campaign-create', component: CampaignCreateComponent },
          { path: 'campaign-edit', component: CampaignEditComponent },
          { path: 'list-campaign', component: CampaignListComponent },

          { path: 'detail-return-clients-automation', component: AutomationClientReturnDetailComponent},
          { path: 'detail-return-clients-campaign', component:  CampaignClientReturnDetailComponent},
        
        ]

      }

    ]
  },
  {
    path: 'home-client', component: MenuComponent,
    //canActivate: [AuthService, ClientGuard],
    children: [
      { path: '', component: DashboardCustomerComponent },
      { path: 'list', component: ListCompanyComponent },
      { path: 'profile-customer', component: ProfileCustomerComponent },
    ]

  },
  {
    path: 'home-employee', component: MenuComponent,
    //canActivate: [AuthService, ClientGuard],
    children: [
      { path: '', component: DashboardModule },
      { path: 'insert-point', component: PreRegisterComponent },

    ]
  },
   
  { path: 'login', component: LoginComponent },
  { path: 'loginCliente', component: LoginClienteComponent },
  { path: 'cadastrar', component: RegisterCompanyComponent },
  { path: 'registerCustomer', component: RegisterCustomerComponent },
  { path: 'resetAccount', component: ResetAccountComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
