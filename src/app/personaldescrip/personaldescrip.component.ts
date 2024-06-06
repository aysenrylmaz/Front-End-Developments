import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as data from '../defaultData.json';
import { TimelineservicesService } from '../services/timelineservices.service';

interface day {
  value: Number;
  text: String;
}

@Component({
  selector: 'app-personaldescrip',
  templateUrl: './personaldescrip.component.html',
  styleUrls: ['./personaldescrip.component.css'],
})
export class PersonaldescripComponent {
  @ViewChild('personeldescripForm', { read: NgForm, static: true })
  personeldescripForm!: NgForm;
  compulsorylesson!: string;
  data: any = data;
  listPersonalData: any;
  personalDataList: any;

  constructor(private _service: TimelineservicesService) {
    //http request
  }
  resForm() {
    if (this.personeldescripForm.invalid) {
      return;
    }
  }

  ngOnInit() {
    this.listPersonalData = this._service.sendPersonallist();
  }

  watchday() {
    console.log(this.personeldescripForm.value.watchexempt);
  }

  compulsorylessonChange() {
    const compulsorylessonControls =
      this.personeldescripForm.controls['compulsorylesson'];
    if (this.personeldescripForm.value.compulsorylesson < 15) {
      compulsorylessonControls.setErrors({ compulsorylesson: false });
    }

    console.log(compulsorylessonControls.errors);
  }

  public updatePersonallist(): any {
    //create register instance
    let personalData: personalData = {
      //it creates regdata interface initialize with entering values
      Fname: this.personeldescripForm.value.Fname,
      perbranch: this.personeldescripForm.value.perbranch,
      radioC: this.personeldescripForm.value.radioC,
      perbranch2: this.personeldescripForm.value.perbranch2,
      prefClass: this.personeldescripForm.value.prefClass,
      watchexempt: this.personeldescripForm.value.watchexempt,
      perWatch: this.personeldescripForm.value.perWatch,
      compulsorylesson: this.personeldescripForm.value.compulsorylesson,
      mail: this.personeldescripForm.value.mail,
    };

    this._service.updatePersonallist(personalData); //regdata and routeID transfers to service for Update
    return personalData;
  }
}

export interface personalData {
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
