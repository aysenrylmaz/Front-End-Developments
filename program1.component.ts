import { Component } from '@angular/core';
import { TimelineservicesService } from '../services/timelineservices.service';
import * as data from '../defaultData.json';

@Component({
  selector: 'app-program1',
  templateUrl: './program1.component.html',
  styleUrls: ['./program1.component.css'],
})
export class Program1Component {
  data: any = data;
  arr: any = [];
  lecdata: any;
  constructor(private _service: TimelineservicesService) {
    //http request
  }

  ngOnInit() {
    this.arr = [];
    this.setlecprog();
  }

  setlecprog() {
    while (this.arr.length < 18) {
      var r = Math.floor(Math.random() * 18) + 1;
      if (this.arr.indexOf(r) === -1) this.arr.push(r);
    }
    console.log(this.arr);
  }

  refreshProgram() {
    this.arr = [];
    this.setlecprog();
  }

  shows() {
    console.log('hello');
  }
}
