import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TimelineservicesService } from '../services/timelineservices.service';

@Component({
  selector: 'app-branchdescrip',
  templateUrl: './branchdescrip.component.html',
  styleUrls: ['./branchdescrip.component.css'],
})
export class BranchdescripComponent {
  @ViewChild('branchdescripForm', { read: NgForm, static: true })
  branchdescripForm!: NgForm;
  listBranchData: any;

  constructor(private _service: TimelineservicesService) {
    //http request
  }

  resForm() {
    if (this.branchdescripForm.invalid) {
      return;
    }
  }
  ngOnInit() {
    this.listBranchData = this._service.sendBranchlist();
  }

  public updatebranchlist(): any {
    //create register instance
    let branchData: branchData = {
      //it creates regdata interface initialize with entering values
      Fname: this.branchdescripForm.value.Fname,
      perbranch: this.branchdescripForm.value.perbranch,
    };

    this._service.updateStudentlist(branchData); //regdata and routeID transfers to service for Update
    return branchData;
  }
}

export interface branchData {
  Fname: string;
  perbranch: any;
}
