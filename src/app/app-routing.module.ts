import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageHeaderComponent } from './main-page-header/main-page-header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginsuccesComponent } from './loginsucces/loginsucces.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  //{ path:'loginsucces',component: LoginsuccessComponent ,canActivate: [RpgGuardGuard] },
  { path:'loginsucces',component: LoginsuccesComponent} ,
  { path:'registration', component: RegistrationComponent},
  { path:'**', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
