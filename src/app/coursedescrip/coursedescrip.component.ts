import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TimelineservicesService } from '../services/timelineservices.service';
import * as data from '../defaultData.json';

@Component({
  selector: 'app-coursedescrip',
  templateUrl: './coursedescrip.component.html',
  styleUrls: ['./coursedescrip.component.css'],
})
export class CoursedescripComponent {
  @ViewChild('coursedescripForm', { read: NgForm, static: true })
  coursedescripForm!: NgForm;

  compulsorylesson!: string;
  data: any = data;
  listcourseData: any;
  personalDataList: any;

  constructor(private _service: TimelineservicesService) {
    //http request
  }

  resForm() {
    if (this.coursedescripForm.invalid) {
      return;
    }
  }

  ngOnInit() {
    this.listcourseData = this._service.sendCourselist();
  }

  watchday() {
    console.log(this.coursedescripForm.value.watchexempt);
  }

  compulsorylessonChange() {
    const compulsorylessonControls =
      this.coursedescripForm.controls['compulsorylesson'];
    if (this.coursedescripForm.value.compulsorylesson < 15) {
      compulsorylessonControls.setErrors({ compulsorylesson: false });
    }

    console.log(compulsorylessonControls.errors);
  }

  public updateCourselist(): any {
    //create register instance
    let courseData: courseData = {
      //it creates regdata interface initialize with entering values
      Cname: this.coursedescripForm.value.Cname,
      coursecredit: this.coursedescripForm.value.coursecredit,
      courseakts: this.coursedescripForm.value.courseakts,
      courseclass: this.coursedescripForm.value.courseclass,
      courseobligation: this.coursedescripForm.value.courseobligation,
      coursefield: this.coursedescripForm.value.coursefield,
      courselanguage: this.coursedescripForm.value.courselanguage,
      coursepersonal: this.coursedescripForm.value.coursepersonal,
    };

    this._service.updatePersonallist(courseData); //regdata and routeID transfers to service for Update
    return courseData;
  }
}

export interface courseData {
  Cname: string;
  coursecredit: any;
  courseakts: any;
  courseclass: string;
  courseobligation: boolean;
  coursefield: string;
  courselanguage: string;
  coursepersonal: string;
}
