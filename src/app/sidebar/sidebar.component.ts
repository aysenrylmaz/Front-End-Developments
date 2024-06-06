import { Component } from '@angular/core';
import { TimelineservicesService } from '../services/timelineservices.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private _service: TimelineservicesService) {
    //http request
  } //2 services in a constructor ?

  programBar: boolean = false;
  parameterBar: boolean = false;
  goRegisters(): any {
    this._service.registers();
  }

  goSchedules(): any {
    this._service.schedules();
  }

  openProgramBar() {
    if (this.programBar != true) {
      this.programBar = true;
    } else this.programBar = false;
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

  openParameterBar() {
    if (this.parameterBar != true) {
      this.parameterBar = true;
    } else this.parameterBar = false;
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
