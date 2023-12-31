import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { SpinnerComponent } from './pages/starships/components/spinner/spinner.component';
import { StarshipComponent } from './pages/starships/components/starship/starship.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmsComponent } from './pages/starships/components/starship/films/films.component';
import { PilotsComponent } from './pages/starships/components/starship/pilots/pilots.component'



@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    SpinnerComponent,
    StarshipComponent,
    RegisterComponent,
    LoginComponent,
    FilmsComponent,
    PilotsComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
