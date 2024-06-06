import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistercarComponent} from './registercar/registercar.component';
import {SecondComponent} from './second/second.component'
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
   {path:'registercar/:id', component:RegistercarComponent},
   {path:'reservation', component:ReservationComponent},
   {path:'list', component:SecondComponent},
   {path:'about', component:AboutComponent},
   {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
