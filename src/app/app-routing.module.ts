import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { ManageCustomerDepartmentComponent } from './components/manage-customer-department/manage-customer-department.component';
import { ManageApplicationsComponent } from './components/manage-applications/manage-applications.component';
import { DetectedApplicationsComponent } from './components/detected-applications/detected-applications.component';
import { RegisteredApplicationsComponent } from './components/registered-applications/registered-applications.component';
import { AppSecurityPolicyComponent } from './components/app-security-policy/app-security-policy.component';
import { DataSecurityPolicyComponent } from './components/data-security-policy/data-security-policy.component';
import { PolicySchedulesComponent } from './components/policy-schedules/policy-schedules.component';
import { ReportsComponent } from './components/reports/reports.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { ManageClientsComponent } from './components/manage-clients/manage-clients.component';

import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'visualization', component: VisualizationComponent },
      { path: 'manage-customer-department', component: ManageCustomerDepartmentComponent },
      { path: 'manage-applications', component: ManageApplicationsComponent },
      { path: 'detected-applications', component: DetectedApplicationsComponent },
      { path: 'registered-applications', component: RegisteredApplicationsComponent },
      { path: 'app-security-policy', component: AppSecurityPolicyComponent },
      { path: 'data-security-policy', component: DataSecurityPolicyComponent },
      { path: 'policy-schedules', component: PolicySchedulesComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'myAccount', component: MyAccountComponent },
      { path: 'manageUsers', component: ManageUsersComponent },
      { path: 'manageClients', component: ManageClientsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
