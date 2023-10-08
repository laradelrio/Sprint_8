import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/form.interface';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  formInvalid: boolean = false;
  // baseUrl = window.location.origin
  baseUrl = "http://localhost:3000";
  token: Object = [];

  constructor(
    private http: HttpClient,) { }
    
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
        case 'minLength':
          errorMessage = 'Invalid password';
          break;
      }
    }
    return errorMessage;
  }

  registerUser(form: FormGroup) {
    let user: User = {
      "email" : form.get('email')?.value, 
      "password" : form.get('password')?.value }; 

    return this.http.post(`${this.baseUrl}/users`, user);
  }

  loginUser(form: FormGroup){ //get one user, not all

    return this.http.post(`${this.baseUrl}/login`, form);
  }

  getAuthToken(): Observable<boolean>{
    return of(true);

  }

  verifyTokenValidity(){
    return this.http.get(`${this.baseUrl}/users`)
  }


}
