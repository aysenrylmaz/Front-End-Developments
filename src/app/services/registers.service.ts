import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public setregisters: {
    id: any;
    Fname: string;
    mail: string;
    iban: string;
    radioC: string;
    insurance: string;
    vecval: string;
    parked: string;
  }[] = [];

  public key!: string;

  private url =
    'https://openiban.com/validate/IBAN_NUMBER?getBIC=true&validateBankCode=true';
  registerdata: any;
  updt: any;
  updtdata: any;
  routeid!: any;

  constructor(private _router: Router, private http: HttpClient) {
    console.log('Register Service is working!');
  }

  updateLocalstorage(setregisters: any, routeid: any) {
    const data = localStorage.getItem('registers'); //get data from localstorage
    if (data) {
      //if localstorage has data, if it is empty continues from else
      this.setregisters = JSON.parse(data); //it converts localstorage to array
      if (routeid >= 0) {
        // if it has variable
        this.setregisters[routeid] = setregisters;
      } //write same place for update
      else {
        this.setregisters.push(setregisters); // if it is addition, push it
      }
    } else {
      this.setregisters.push(setregisters); //if localstorage doesnt have any array
    }

    localStorage.setItem('registers', JSON.stringify(this.setregisters));
    // console.log(localStorage.getItem("registers"))
  }

  getRegisters() {
    return this.setregisters;
  }

  updateReg() {
    // console.log(this.updt)
    return this.updt;
  }

  // getUpdateData(){
  //   const updatedata=localStorage.getItem("registers");
  //      if(updatedata)
  // {
  //   console.log(updatedata)
  // }}
}
