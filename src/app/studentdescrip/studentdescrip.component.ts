import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as data from '../defaultData.json';
import { TimelineservicesService } from '../services/timelineservices.service';

@Component({
  selector: 'app-studentdescrip',
  templateUrl: './studentdescrip.component.html',
  styleUrls: ['./studentdescrip.component.css'],
})
export class StudentdescripComponent {
  @ViewChild('studentdescripForm', { read: NgForm, static: true })
  studentdescripForm!: NgForm;
  listStudentData: any;
  data: any = data;

  constructor(private _service: TimelineservicesService) {
    //http request
  }

  resForm() {
    if (this.studentdescripForm.invalid) {
      return;
    }
  }

  ngOnInit() {
    this.listStudentData = this._service.sendStudentlist();
  }

  public updateStudentlist(): any {
    //create register instance
    let studentData: studentData = {
      //it creates regdata interface initialize with entering values
      Fname: this.studentdescripForm.value.Fname,
      perbranch: this.studentdescripForm.value.perbranch,
      radioC: this.studentdescripForm.value.radioC,
      perbranch2: this.studentdescripForm.value.perbranch2,
      prefClass: this.studentdescripForm.value.prefClass,
      watchexempt: this.studentdescripForm.value.watchexempt,
      perWatch: this.studentdescripForm.value.perWatch,
      compulsorylesson: this.studentdescripForm.value.compulsorylesson,
      mail: this.studentdescripForm.value.mail,
    };

    this._service.updateStudentlist(studentData); //regdata and routeID transfers to service for Update
    return studentData;
  }
}

export interface studentData {
  Fname: string;
  perbranch: any;
  radioC: boolean;
  perbranch2: any;
  prefClass: any;
  watchexempt: string;
  perWatch: any;
  compulsorylesson: string;
  mail: string;
}
