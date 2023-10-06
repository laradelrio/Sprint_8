import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  formInvalid: boolean = false;

  constructor() { }
    
  isValidField(field: string, form: FormGroup): boolean | null{
    return form.controls[field].errors && form.controls[field].touched;
  }

  getFieldError(field: string, form: FormGroup): string{
    
    let errors =  form.controls[field].errors  || {};
    let errorMessage: string = ""
    for(let error of Object.keys(errors)){
      switch(error){
        case 'required':
          errorMessage = "Required field";
          break;
        case 'email':
          errorMessage = 'Please enter a valid email';
          break;
        case 'pattern':
          errorMessage = 'Invalid password';
          break;
      }
    }

    return errorMessage;
    
  }
}
