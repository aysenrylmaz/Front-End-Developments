import { AbstractControl, NG_VALIDATORS, Validator, ValidationErrors } from '@angular/forms';
import { Directive, Input } from '@angular/core';  
// import { Validator, NG_VALIDATORS, ValidatorFn, FormControl } from '@angular/forms';  

@Directive({  
     selector: '[appibanValidator][ngModel]',  
     providers: [  
       {  
         provide: NG_VALIDATORS,  
         useExisting: ibanValidator,  
         multi: true  
       }  
     ]  
   }) 
  
export class ibanValidator implements Validator{
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    throw new Error('Method not implemented.');
  }


    
    }