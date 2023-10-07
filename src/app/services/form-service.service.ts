import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { User } from '../interfaces/form.interface';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  formInvalid: boolean = false;
  // baseUrl = window.location.origin
  baseUrl = "http://localhost:3000"

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
        case 'pattern':
          errorMessage = 'Invalid password';
          break;
      }
    }

    return errorMessage;
    
  }

  registerUser(user: User) {
    return this.http
    .post<User>(`${this.baseUrl}/users`, user)
    .pipe(catchError(this.errorHandler))
  }
    
 
  errorHandler(error: HttpErrorResponse){
    
    // if (error.error instanceof ErrorEvent) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   console.error('An error occurred:', error.error.message);
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong,
    //   console.error(
    //     `Backend returned code ${error.status}, ` +
    //     `body was: ${error.error}`);
    // }

   
    // return an observable with a user-facing error message
    return  ([error.error]);
  }

  
    
    

  getUser(form: FormGroup){
    console.log(this.http.get<User>(`${this.baseUrl}/users`, form.value))
     return this.http.get<User>(`${this.baseUrl}/users`, form.value);
  }


}
