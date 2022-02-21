

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PilotComponent } from './components/pilot/pilot.component';
import { SpinnerComponent } from './components/spinner/spinner.component';





@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    StarshipDetailComponent,
    HeaderComponent,
    HomeComponent,
    InfoComponent,
    FormLoginComponent,
    RegisterComponent,
    PilotComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
