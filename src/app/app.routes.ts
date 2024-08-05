import { Routes } from '@angular/router';
import { RegistrationComponent } from '../Auth/registration/registration.component';
import { LoginComponent } from '../Auth/login/login.component';
import { DashboardComponent } from '../Auth/dashboard/dashboard.component';

export const routes: Routes = [
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent}

];
