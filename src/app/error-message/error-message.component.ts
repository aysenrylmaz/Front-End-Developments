import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent implements OnInit  {
  @Input()
  errorInput: any;
  errorMessage:any;
  errObj:any;
  errResults:any;
  //Error list structure

  errorList = [
    //Insurance companies list
    { name: "Fname", errors: "Inserted name does not have the correct format."},
    { name: "mail", errors: "Please enter a valid email."},
    { name: "postK", errors: "Please enter a valid Postcode." },
    { name: "telNum", errors: "Please enter a valid Telephone." },
    { name: "bday", errors: "Age must be greater than 18." },
    { name: "iban", errors: "Please enter a valid Iban." },
    { name: "dlday", errors:{dldayChange:"Driver's License Date must be before today.", licenage:"Those under the age of 16 cannot get a driver's license."}},
    { name: "insurance", errors: "Your Insurance Company is unreliable." },
    { name: "vecval", errors: "Your car is too expensive." }
  ];


  ngOnInit(): void { 
  }

  onSubmit(): void {}

  constructor() {}
  ngDoCheck(): void { 

    if(this.errorInput.value==undefined || this.errorInput.value=="")
      {
        this.errorMessage = 'Please fill out the mandatory field.';
             return;
            }
    else 
      { 
        this.errResults = this.errorList.filter(obj => {
          return obj.name === this.errorInput.name;
        });
        
        if(this.errorInput.name=="dlday" && this.errorInput.control.errors!=null)
            {    
              console.log(this.errResults[0].errors[Object.keys(this.errorInput.control.errors)[0]])
              this.errorMessage = this.errResults[0].errors[Object.keys(this.errorInput.control.errors)[0]];      
            } 
        else
            this.errorMessage = this.errResults[0].errors; 

      }
    }
}
  
