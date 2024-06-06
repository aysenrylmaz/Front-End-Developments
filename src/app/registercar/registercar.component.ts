import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/registers.service';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { trigger,transition,state,animate,style, query } from '@angular/animations';

@Component({
  selector: 'app-registercar',
  templateUrl: './registercar.component.html',
  styleUrls: ['./registercar.component.css'],
  providers: [RouterModule],
  animations:[
    
      trigger('buttonnEffect', [
       state('initial', style({
         transform: 'scale(1)'
        })),
       state('final', style({
         transform: 'scale(1.1)'
       })),
       transition('initial=>final', animate('200ms')),
       transition('final=>initial', animate('200ms'))
      ]),



    //  trigger('buttonnEffect', [
    //   transition('initial=>final', [
    //     // hide the inner elements
    //     query('Fname', [
    //       animate('1500ms', style({ transform: 'scale(1.1)'})),
    //       ])

      //   query('.mail', [
      //       animate('1500ms', style({ transform: 'scale(1.1)'})),
      //       ])
      //   // query('.mail', style({ transform: 'scale(1)'})),
      //   // query('mail', style({ transform: 'scale(1)' })),

      //   // animate the inner elements in, one by one
      //  query('Fname', animate('1500ms', style({ transform: 'scale(1.1)' }))),
      //  query('mail', animate('1500ms', style({ transform: 'scale(1.1)' }))),
    //   ])
    // ])
         ]
})
export class RegistercarComponent implements OnInit {
  @ViewChild('regcarForm', { read: NgForm, static: true })
  regcarForm!: NgForm;

  state: any = {
     currentState: 'initial',
     currentState2: 'initial',
     currentState3: 'initial',
     currentState4: 'initial',
     currentState5: 'initial',
     currentState6: 'initial',
     currentState7: 'initial',
     currentState8: 'initial',
     currentState9: 'initial',
     currentState10: 'initial'
  }


  updateregisters: any;

  //create constructor for routing, service and http request
  constructor(
    private _router: Router,
    private _service: RegisterService,
    private http: HttpClient
  ) {
    //http request
  } //2 services in a constructor ?

  // @ViewChild('regcarForm', {static:true})
  // regcarForm!: NgForm;

  // Define variable names

  Fname!: string;
  mail!: string;
  adress!:string;
  postK!:string;
  telNum!:string;
  radioC!: boolean;
  insurance!: string;
  iban!: string;
  vecval!: string;
  parked!: string;
  errorMsg!: string;
  submitted!: boolean;
  MaxvalueValidator: any;
  Insurancevalidation = true;
  updateData: any;
  routeid!: any;
  selectedTeam!: any;
  insuranceitem!: any;
  Bdate: any;


  ngOnInit() {
    // this.updateData=this._service.getupdatedata()
    this.routeid = this._router.url.split('/')[2]; //which element of array
    //  console.log(this.routeid)

    this.updateData = this._service.updateReg(); //take wants to be updated data from second component & service
    if (this.routeid >= 0) {
      //if localstorage has array convert
      const updatedata = localStorage.getItem('registers');
      if (updatedata) {
        this.updateregisters = JSON.parse(updatedata); //updating, write variables on registration component
        // console.log(this.updateregisters[this.routeid].name)
        this.regcarForm.value.Fname = this.updateregisters[this.routeid].name;
        this.regcarForm.value.adress =this.updateregisters[this.routeid].adress;
        this.regcarForm.value.postK =this.updateregisters[this.routeid].postK;
        this.regcarForm.value.telNum =this.updateregisters[this.routeid].telNum;
        this.regcarForm.value.bday = this.updateregisters[this.routeid].bday;
        this.regcarForm.value.dlday = this.updateregisters[this.routeid].dlday;
        this.regcarForm.value.mail = this.updateregisters[this.routeid].mail;
        this.regcarForm.value.iban = this.updateregisters[this.routeid].iban;
        this.regcarForm.value.radioC =
          this.updateregisters[this.routeid].insured;
        this.insuranceitem = this.updateregisters[this.routeid].insureCompany;
        this.regcarForm.value.vecval =
          this.updateregisters[this.routeid].vecValue;
        this.regcarForm.value.parked =
          this.updateregisters[this.routeid].parkGarage;

        // localStorage.setItem("registers", JSON.stringify(this.updateregisters));
      }
    }

    //  this.regcarForm.form.valueChanges.subscribe(() => {
    //   console.log('form changed');})
  }



  onSubmit() {}

   //Beginning time age was wrong but after it is made correct, should check again licence age is 16 years after
   
   focusAnim(key: string /* for example */) {  

    this.state[key] = (this.state[key] === 'initial' ? 'final' : 'initial');

}





  //Iban validation with http request
  ibanValidate(product: { iban: string }) {
    //iban validator it request to openiban webpage
    const Ibancontrols = this.regcarForm.controls.iban;
    this.http
      .get(
        'https://openiban.com/validate/' +
          this.regcarForm.value.iban +
          '?getBIC=true&validateBankCode=true'
      )
      .subscribe((res: ibanResult) => {
        // console.log(res.valid);

        if (res.valid == true) {
          return;
        } else {

          Ibancontrols.setErrors({ validateIban: true });
        }
      });
  }

  regCar() {
    this.submitted = true; // submitting page
    if (this.regcarForm.invalid) {
      return;
    }

    this.updateLocalstorage();
  }

  //Insurance company list
  insuranceCompaniesList = [
    //Insurance companies list
    { value: 1, text: 'Insurance Company A' },
    { value: 2, text: 'Insurance Company B' },
    { value: 4, text: 'Insurance Company C' },
    { value: 5, text: 'Insurance Company D' },
    { value: 9, text: 'Bad Insurance company' },
  ];

  //If select bad insurance company it will give us error

  validateInsurance() {
    const insuranceControls = this.regcarForm.controls.insurance;
    for (const insurance in insuranceControls) {
      //@ViewChild('insurance') regcarform: NgForm;
      if (this.regcarForm.value.insurance == 'Bad Insurance company') {
        //  regcarForm.value.insurance==9
        insuranceControls.setErrors({ validateInsurance: false }); //errror declaration
        // console.log(this.insuranceCompaniesList)
      }
    }
  }

  //It takes input data from registarcomponent and write services

  bdayChange() {
    //It compares bday with current date differencies
    const bdayControls = this.regcarForm.controls.bday;
    console.log(this.regcarForm)
    this.Bdate = moment(this.regcarForm.value.bday).format('DD MMM YYYY');
    var yearDiff = moment().diff(this.Bdate, 'years');
    if (yearDiff < 18) {
      // this.regcarForm.controls['bday'].setErrors({ 'incorrect': true});;
      bdayControls.setErrors({ bdayChange: true });
    }
    this.dldayChange();
  }

  dldayChange() {
    //It compares Drice licence day with current date with before-after
    const dldayControls = this.regcarForm.controls.dlday;
    const Dldate = moment(this.regcarForm.value.dlday).format('DD MMM YYYY');
    if (moment().isBefore(Dldate)) {
      dldayControls.setErrors({dldayChange: true});
    }
    else
    {
        if ((moment(Dldate).diff(this.Bdate,'years') <= 16) && this.regcarForm.controls.dlday.valid ) {
                  // console.log(moment(Dldate).diff(this.Bdate,'years'));

      // console.log("If age is smaller than he/she doesn't have driver licence")
                  dldayControls.setErrors({licenage: true});} }

  }

  VecvalChange() {
    const vecvalControls = this.regcarForm.controls.vecval;
    if (this.regcarForm.value.vecval > 200000) {
      vecvalControls.setErrors({ vecval: false });
    }
  }

  public setregisters: any = [];

  public updateLocalstorage(): any {
    //create register instance
    let regdata: regData = {
      //it creates regdata interface initialize with entering values
      name: this.regcarForm.value.Fname,
      mail: this.regcarForm.value.mail,
      adress: this.regcarForm.value.adress,
      postK: this.regcarForm.value.postK,
      telNum: this.regcarForm.value.telNum,
      bday: this.regcarForm.value.bday,
      dlday: this.regcarForm.value.dlday,
      iban: this.regcarForm.value.iban,
      insured: this.regcarForm.value.radioC,
      insureCompany: this.regcarForm.value.insurance,
      vecValue: this.regcarForm.value.vecval,
      parkGarage: this.regcarForm.value.parked,
    };
    //  console.log(this.routeid)
    this._service.updateLocalstorage(regdata, this.routeid); //regdata and routeID transfers to service for Update
    return regdata;
  }



  //It controlling if all validator is unerror, than it continues secondcomponent
  register(): void {
    if (
      this.regcarForm.value.vecval > 100000 &&
      this.regcarForm.value.parked == false
    ) {
      alert(
        'To insure a car worth 100.000 € or more it needs to be parked in a private garage'
      );
      this.errorMsg =
        'To insure a car worth 100.000 € or more it needs to be parked in a private garage';
      // this.resColor.style.color="#A92828";
    } else {

      alert('Your car is now successfully registered');
      //  this.resColor.style.color="#28A828";
      this.errorMsg = 'Your car is now successfully registered';
    }

    this._router.navigate(['/list']);
  }

}

//create interface for Iban Validator
export interface ibanResult {
  valid?: boolean;
  iban?: string;
  bankData?: any;
  checkResults?: any;
  messages?: any;
}

//register Variables
export interface regData {
  name: string;
  mail: string;
  adress:string;
  postK:string;
  telNum:string;
  bday: Date;
  dlday: Date;
  iban: string;
  insured: boolean;
  insureCompany: string;
  vecValue: string;
  parkGarage: boolean;
}
