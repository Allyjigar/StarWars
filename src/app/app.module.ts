import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    StarshipDetailComponent,
    HeaderComponent,
    HomeComponent,
    InfoComponent,
    FormLoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
