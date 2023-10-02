import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsComponent } from './starships/starships.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './starships/components/spinner/spinner.component';
import { StarshipComponent } from './starships/components/starship/starship.component'

@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    SpinnerComponent,
    StarshipComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
