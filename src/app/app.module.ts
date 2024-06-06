import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TimelineservicesService } from './services/timelineservices.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { Program1Component } from './program1/program1.component';
import { Program2Component } from './program2/program2.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ParametersComponent } from './parameters/parameters.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursedescripComponent } from './coursedescrip/coursedescrip.component';
import { ClassdescripComponent } from './classdescrip/classdescrip.component';
import { PersonaldescripComponent } from './personaldescrip/personaldescrip.component';
import { StudentdescripComponent } from './studentdescrip/studentdescrip.component';
import { ParentdescripComponent } from './parentdescrip/parentdescrip.component';
import { BranchdescripComponent } from './branchdescrip/branchdescrip.component';
import { WatchdescripComponent } from './watchdescrip/watchdescrip.component';
import { Program3Component } from './program3/program3.component';
import { Program4Component } from './program4/program4.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    Program1Component,
    Program2Component,
    SidebarComponent,
    RegisterPageComponent,
    ParametersComponent,
    CoursedescripComponent,
    ClassdescripComponent,
    PersonaldescripComponent,
    StudentdescripComponent,
    ParentdescripComponent,
    BranchdescripComponent,
    WatchdescripComponent,
    Program3Component,
    Program4Component,
  ],
  providers: [TimelineservicesService],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
})
export class AppModule {
  constructor(
    private _router: RouterModule,
    private _service: TimelineservicesService
  ) {}
}
