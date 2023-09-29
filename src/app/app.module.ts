import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsComponent } from './starships/starships.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component'
import { ApiInterceptorService } from './services/api-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
