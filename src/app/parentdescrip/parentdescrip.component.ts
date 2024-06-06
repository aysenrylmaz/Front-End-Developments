import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as data from '../defaultData.json';
import { TimelineservicesService } from '../services/timelineservices.service';

@Component({
  selector: 'app-parentdescrip',
  templateUrl: './parentdescrip.component.html',
  styleUrls: ['./parentdescrip.component.css'],
})
export class ParentdescripComponent {
  @ViewChild('parentdescripForm', { read: NgForm, static: true })
  parentdescripForm!: NgForm;
  data: any = data;
  listParentData: any;

  constructor(private _service: TimelineservicesService) {
    //http request
  }
  resForm() {
    if (this.parentdescripForm.invalid) {
      return;
    }
  }

  ngOnInit() {
    this.listParentData = this._service.sendParentlist();
  }
  public updateParentlist(): any {
    //create register instance
    let parentData: parentData = {
      //it creates regdata interface initialize with entering values
      Pname: this.parentdescripForm.value.Pname,
      phoneNumber: this.parentdescripForm.value.phoneNumber,
      email: this.parentdescripForm.value.email,
      Attendee: this.parentdescripForm.value.Attendee,
      postcode: this.parentdescripForm.value.postcode,
      parentbirthday: this.parentdescripForm.value.parentbirthday,
      prstudent: this.parentdescripForm.value.prstudent,
      availableDays: this.parentdescripForm.value.availableDays,
    };

    this._service.updateParentlist(parentData); //regdata and routeID transfers to service for Update
    return parentData;
  }
}

export interface parentData {
  Pname: string;
  phoneNumber: any;
  email: boolean;
  Attendee: any;
  postcode: any;
  parentbirthday: string;
  prstudent: any;
  availableDays: string;
}
