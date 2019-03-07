import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'ngx-avatar';
import { PopoverModule } from 'ngx-popover';
import { CookieService } from 'ngx-cookie-service';
import 'hammerjs';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { User } from './beans/user';
import { Role } from './beans/role';

import { HttpInterceptorProviders } from './http-interceptors/http-interceptor-providers';
import { UserService } from './services/user.service';
import { ClientService } from './services/client.service';
import { ApplicationService } from './services/application.service';
import { AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
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

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  declarations: []
})
export class MaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    VisualizationComponent,
    ManageApplicationsComponent,
    DetectedApplicationsComponent,
    RegisteredApplicationsComponent,
    AppSecurityPolicyComponent,
    DataSecurityPolicyComponent,
    PolicySchedulesComponent,
    ReportsComponent,
    MyAccountComponent,
    ManageUsersComponent,
    ManageClientsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({cookieName: 'Avocado-XSRF-Token', headerName: 'Avocado-XSRF-Token'}),
    AvatarModule,
    PopoverModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    ClientService,
    CookieService,
    AuthGuard,
    HttpInterceptorProviders,
    ApplicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
