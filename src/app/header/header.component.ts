import { Component } from '@angular/core';
import { TimelineservicesService } from '../services/timelineservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  sidebarvisibilty: any = false;
  dropdownMenu1: boolean | undefined;
  constructor(private _service: TimelineservicesService) {
    //http request
  } //2 services in a constructor ?

  openSidebar(): any {
    if (this.sidebarvisibilty != true) {
      this.sidebarvisibilty = true;
    } else this.sidebarvisibilty = false;
    this._service.sideBar(this.sidebarvisibilty);
  }

  goRegisters(): any {
    this._service.registers();
  }

  goSchedules(): any {
    this._service.schedules();
  }

  goPrograms1(): any {
    this._service.programs1();
  }

  goPrograms2(): any {
    this._service.programs2();
  }

  goPrograms3(): any {
    this._service.programs3();
  }

  goPrograms4(): any {
    this._service.programs4();
  }

  gocoursedescrip(): any {
    this._service.gocoursedescrip();
  }

  goclassdescrip(): any {
    this._service.goclassdescrip();
  }
  gopersonaldescrip(): any {
    this._service.gopersonaldescrip();
  }
  gostudentdescrip(): any {
    this._service.gostudentdescrip();
  }
  goparentdescrip(): any {
    this._service.goparentdescrip();
  }
  gobranchdescrip(): any {
    this._service.gobranchdescrip();
  }
  gowatchdescrip(): any {
    this._service.gowatchdescrip();
  }

  goParameters(): any {
    this._service.parameters();
  }
}
