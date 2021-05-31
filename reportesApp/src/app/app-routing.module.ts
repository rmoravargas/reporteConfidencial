import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { IsAuthenticatedGuard } from './guards/is-authenticated/is-authenticated.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent, pathMatch:"full"},
  {path:'register',component:RegisterComponent, pathMatch:"full"}, 
  {path:'recovery-password',component:ForgotPasswordComponent, pathMatch:"full"}, 
   {path:'reporte',component:ReporteComponent, pathMatch:"full" ,canActivate:[IsAuthenticatedGuard]},
  {path:'**',redirectTo:'/login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
