import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as data from '../defaultData.json';
import { TimelineservicesService } from '../services/timelineservices.service';

@Component({
  selector: 'app-watchdescrip',
  templateUrl: './watchdescrip.component.html',
  styleUrls: ['./watchdescrip.component.css'],
})
export class WatchdescripComponent {
  @ViewChild('watchdescripForm', { read: NgForm, static: true })
  watchdescripForm!: NgForm;
  data: any = data;
  listWatchData: any;

  constructor(private _service: TimelineservicesService) {
    //http request
  }
  resForm() {
    if (this.watchdescripForm.invalid) {
      return;
    }
  }

  ngOnInit() {
    this.listWatchData = this._service.sendWatchlist();
  }

  public updateWatchlist(): any {
    //create register instance
    let watchData: watchData = {
      //it creates regdata interface initialize with entering values
      wCode: this.watchdescripForm.value.watchcode,
      wLokation: this.watchdescripForm.value.lokationwatch,
      wDate: this.watchdescripForm.value.watchDate,
      wTime: this.watchdescripForm.value.watchTime,
      wPersonal: this.watchdescripForm.value.watchPersonal,
      wStudent: this.watchdescripForm.value.watchStudent,
    };

    this._service.updateWatchlist(watchData); //regdata and routeID transfers to service for Update
    return watchData;
  }
}

export interface watchData {
  wCode: string;
  wLokation: string;
  wDate: any;
  wTime: any;
  wPersonal: string;
  wStudent: string;
}
