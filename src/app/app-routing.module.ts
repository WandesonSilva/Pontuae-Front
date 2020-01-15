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
import { PreRegisterComponent } from './pages/account-customer/pre-register/pre-register.component';
import { RegisterCompanyComponent } from './pages/account-company/register-company/register-company.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PointCreateComponent } from './pages/settings/program-loyalty/config-point.ts/point-create/point-create.component';
import { AwardCreateComponent } from './pages/settings/program-loyalty/config-awards/award-create/award-create.component';
import { ListProgramLoyaltyComponent } from './pages/settings/program-loyalty/config-point.ts/list-program-loyalty/list-program-loyalty.component';
import { PointEditComponent } from './pages/settings/program-loyalty/config-point.ts/point-edit/point-edit.component';
import { AwardEditComponent } from './pages/settings/program-loyalty/config-awards/award-edit/award-edit.component';
import { PointingComponent } from './pages/pointing/pointing/pointing.component';
import { DashboardCustomerComponent } from './pages/dashboard-customer/dashboard-customer.component';
import { AutomationCreateComponent } from './pages/marketing/automation/automation-create/automation-create.component';
import { AutomationEditComponent } from './pages/marketing/automation/automation-edit/automation-edit.component';
import { AutomationListComponent } from './pages/marketing/automation/automation-list/automation-list.component';
import { CampaignCreateComponent } from './pages/marketing/campaign/campaign-create/campaign-create.component';
import { CampaignEditComponent } from './pages/marketing/campaign/campaign-edit/campaign-edit.component';
import { CampaignListComponent } from './pages/marketing/campaign/campaign-list/campaign-list.component';
import { ModelMessageComponent } from './pages/marketing/model-message/model-message.component';


const routes: Routes = [

  {
    path: '',
    component: MenuComponent,
    //canActivate: [AuthService, ],
    children: [
      
      { path: '', component: DashboardComponent  },
      { path: 'home', component: DashboardComponent },


      { path: 'preCadastro', component: PreRegisterComponent},
      { path: 'perfil', component: ProfileComponent},
      { path: 'pointing', component: PointingComponent },

      { path: 'listClientPage', component: ListClientPageComponent },     

      {
        path: 'config', component: ProgramLoyaltyComponent,
        children: [
          { path: 'listProgram/Index', component: ListProgramLoyaltyComponent},
          { path: 'Point/Create', component: PointCreateComponent },
          { path: 'ConfigPoint/Edit', component: PointEditComponent },
          { path: 'Award/Create', component: AwardCreateComponent },
          { path: 'Award/Edit', component: AwardEditComponent },
          { path: 'listAward/Index', component: AwardListComponent },    
          { path: '', redirectTo: '/config', pathMatch: 'full' },
        ]
      },

      { path: 'Automation/Create', component: AutomationCreateComponent},
      { path: 'Automation/Edit', component: AutomationEditComponent},
      { path: 'Automation/Index', component: AutomationListComponent},

      { path: 'Campaign/Create', component: CampaignCreateComponent},
      { path: 'Campaign/Edit', component: CampaignEditComponent},
      { path: 'Campaign/Index', component: CampaignListComponent},
      
      { path: 'Message/Index', component: ModelMessageComponent}, 
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
