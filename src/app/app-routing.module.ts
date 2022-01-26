import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { InfoComponent } from './components/info/info.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'spaceships', component: HomeComponent},
  {path: 'spaceship/:id', component: StarshipDetailComponent},
  {path: 'login', component: FormLoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
