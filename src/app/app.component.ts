import { Component, OnInit } from '@angular/core';
import { TimelineservicesService } from './services/timelineservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'timeline';
  updateData: any | undefined;
  sidebarvisibilt: any;

  constructor(public _service: TimelineservicesService) {
    //http request
  }

  ngOnInit() {
    if (this._service.sendDatatoapp() == true) {
      this._service.sideBar((this.sidebarvisibilt = false));
    }
    //   console.log(this.updateData);
    // }
    // if (this._service.sideBar()) {
    //   console.log('selam');
    // }
  }
}
