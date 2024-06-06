import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ReservationpageComponent } from './reservationpage/reservationpage.component';
import { MemberpageComponent } from './memberpage/memberpage.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ForecastpageComponent } from './forecastpage/forecastpage.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ReservationpageComponent,
    MemberpageComponent,
    ProductpageComponent,
    ForecastpageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
