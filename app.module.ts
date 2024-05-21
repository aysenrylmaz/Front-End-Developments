import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistercarComponent } from './registercar/registercar.component';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import {RegisterService} from './services/registers.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NameValidator } from './registercar/name.validator.directive';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservlistComponent } from './reservlist/reservlist.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistercarComponent,
    NameValidator,
    SecondComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    ErrorMessageComponent,
    ReservationComponent,
    ReservlistComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    RouterModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [RegisterService,AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
