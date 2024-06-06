import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as data from '../defaultData.json';
import { TimelineservicesService } from '../services/timelineservices.service';

@Component({
  selector: 'app-classdescrip',
  templateUrl: './classdescrip.component.html',
  styleUrls: ['./classdescrip.component.css'],
})
export class ClassdescripComponent {
  @ViewChild('classdescripForm', { read: NgForm, static: true })
  classdescripForm!: NgForm;
  data: any = data;
  listclassData: any;
  placeholder: any = 1;
  constructor(private _service: TimelineservicesService) {
    //http request
  }

  resForm() {
    if (this.classdescripForm.invalid) {
      return;
    }
  }

  ngOnInit() {
    this.listclassData = this._service.sendClasslist();
  }

  lok() {
    this.placeholder++;
  }

  public updateClasslist(): any {
    //create register instance
    let classData: classData = {
      //it creates regdata interface initialize with entering values
      Cname: this.classdescripForm.value.Cname,
      classgrade: this.classdescripForm.value.classgrade,
      classgradebranch: this.classdescripForm.value.classgradebranch,
      lokation: this.classdescripForm.value.lokation,
    };

    this._service.updateClasslist(classData); //regdata and routeID transfers to service for Update
    return classData;
  }
}

export interface classData {
  Cname: string;
  classgrade: string;
  classgradebranch: string;
  lokation: string;
}
