import { Component, OnInit, HostBinding} from '@angular/core';
import { trigger,transition,state,animate,style,keyframes } from '@angular/animations';
import { Renderer2 } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations:[  

    trigger('balloonEffect', [
      // state('initial', style({
      //   backgroundColor: 'green',
      //   transform: 'scale(1)'
      // })),
      // state('final', style({
      //   backgroundColor: 'red',
      //   transform: 'scale(1.5)'
      // })),
      // transition('final=>initial', animate('1000ms')),
      // transition('initial=>final', animate('1500ms'))
    

    transition('initial=>final',
    animate('1000ms', keyframes([
      style({transform: 'translateX(0)    rotateY(0)',        offset: 0}),
      style({transform: 'translateX(50%)  rotateY(90deg)',    offset: 0.2}),
      style({transform: 'translateX(100%)  rotateY(270deg)',    offset: 0.4}),
      style({transform: 'translateX(150%)  rotateY(90deg)',    offset: 0.6}),
      style({transform: 'translateY(-75%) rotateY(180deg)',   offset: 0.8}),
      
      style({transform: 'translateX(-100%)',                  offset: 1.0})
    ])
  ))
]),



    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),

  ]
    
    })
export class AboutComponent implements OnInit {
  currentState = 'initial';
  mouseX!: number;
  mouseY!: number;
  constructor() { }
  currentDate:any={};
  index:any=0;

  ngOnInit(): void {
    if(localStorage.length>0)
    this.getCurrentDate();
    
  }

  saveCurrentDate(){
    
    // this.currentDate.push(moment().format('MMMM Do YYYY, h:mm:ss a'));
    if(this.index==3)
    {
        this.index=0;
    }
    
    this.currentDate[this.index]=moment().format('h:mm:ss');
    localStorage.setItem('currentDate', JSON.stringify(this.currentDate));
    localStorage.setItem('lastIndex', this.index);
    this.index++;
    // localStorage.setItem("dateData"+(JSON.stringify(this.index)), JSON.stringify(this.currentDate[this.index]))
    // console.log(localStorage.getItem("dateData"+(JSON.stringify(this.index))))
    
    
    // this.currentDate.unshift(this.dateData);
      
  }

  getCurrentDate(){

    this.currentDate=localStorage.getItem('currentDate');
    this.currentDate=JSON.parse(this.currentDate);
    this.index=localStorage.getItem('lastIndex');
    this.index++;
     // console.log(localStorage.getItem("currentDate"))
  }
  

changeState() {
  this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
}


  

}
