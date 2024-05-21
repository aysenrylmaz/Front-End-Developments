import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  [x: string]: any;
  @ViewChild('reservForm', { read: NgForm, static: true })
  reservForm!: NgForm;

  constructor() {}

  //Insurance company list
  processList = [
    //Insurance companies list
    { value: 1, text: 'Prosthetic Nails and Nailart', price: 200 },
    { value: 2, text: 'Laser Epilation', price: 1000 },
    { value: 3, text: 'Skin Care', price: 500 },
    { value: 4, text: 'Regional Slimming', price: 5000 },
    { value: 5, text: 'Permanent Lip Coloring', price: 1500 },
    { value: 6, text: 'Silk Eyelashes', price: 700 },
    { value: 7, text: 'Permanent Eyebrow Design', price: 2500 },
    { value: 8, text: 'Permanent Dipliner & Babyliner', price: 3000 },
    { value: 9, text: 'Massage', price: 500 },
    { value: 10, text: 'Spa & Sauna', price: 300 },
  ];

  validateProcess() {
    // const processControls = this.reservForm.controls.processitem;
    // console.log(this.processList[this.reservForm.value.processitem].price);
    // for (const process in processControls) {
    //   if (this.reservForm.value.processitem == 'Bad Insurance company') {
    //     processControls.setErrors({ validateProcess: false }); //errror declaration
    //   }
    // }
  }
  ngOnInit(): void {}

  resForm() {
    if (this.reservForm.invalid) {
      return;
    }
  }
}
