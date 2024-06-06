import { Component, Input, OnInit } from '@angular/core';
import { RegisterService } from '../services/registers.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
// import { del } from './animations';
import { trigger,transition,state,animate,style } from '@angular/animations';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers: [RouterModule],
  animations:[

    trigger('EnterLeave', [
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ])
         ]
})
export class SecondComponent implements OnInit {
  //define variables
  name!: string;
  mail!: string;
  bday!: string;
  adress!:string;
  postK!:string;
  telNum!:string;
  dlday!: string;
  iban!: string;
  insured!: string;
  insureCompany!: any;
  vecValue!: string;
  parkGarage!: string;
  setregisters: any = [];
  RegisterService: any;
  updtdata: any;
  birthday!: any;
  
  constructor(
    private _router: Router, //It creates constructor with router, service
    public _service: RegisterService
  ) {} //2 services in a constructor ?  //injection dependency

  ngOnInit() {
    this.setregisters = this._service.getRegisters();
    // console.log(this.setregisters);
  }

  updateRegister() {
    // this.setregisters=this._service.getRegisters();
    const showdata = localStorage.getItem('registers');
    if (showdata) {
      this.setregisters = JSON.parse(showdata);
    }
  }

  deleteReg(id: any) {
    let result: any = this.setregisters.splice(id, 1);
    localStorage.setItem('registers', JSON.stringify(this.setregisters));
  }

  public updateReg(id: any) {
    const updt: any = this.setregisters.splice(id, 1);
    // console.log(updt[0]);
    this._router.navigate(['/registercar/', id], updt);
    this._service.updateReg();
  }
}
