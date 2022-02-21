import { LoginGuard } from './services/login.guard';
import { PilotComponent } from './components/pilot/pilot.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { InfoComponent } from './components/info/info.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'spaceships', component: HomeComponent},
  {path: 'spaceship/:id', component: StarshipDetailComponent, canActivate:[LoginGuard]},
  {path: 'people/:id', component: PilotComponent},
  {path: 'login', component: FormLoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
