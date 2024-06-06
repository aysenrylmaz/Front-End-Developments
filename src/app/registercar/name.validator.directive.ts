import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { Directive, Input } from '@angular/core';  
// import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';  

@Directive({  
     selector: '[NameValidator]',  
     providers: [  
       {  
         provide: NG_VALIDATORS,  
         useExisting: NameValidator,  
         multi: true  
       }  
     ]  
   }) 
  
export class NameValidator implements Validator{
  
  appnameValidator='^([a-zA-Z]+[" "]+[a-zA-Z]+)*$'

    validate(control: AbstractControl):{[key:string]:any} | null {
      const nV=new RegExp(this.appnameValidator).test(control.value);
      return nV? null:{'nameValidator':false};

        }
  
        
    }