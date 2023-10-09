import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Form, respToken } from 'src/app/interfaces/form.interface';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  loginInvalid: boolean = false;
  loginErrorMsg: string = ""
  
  signInForm: Form[] =[
    {name: "email", label: "Email address", type: "text"},
    {name: "password", label: "Password", type: "password"},
  ]


  constructor(
    private fb: FormBuilder,
    private formService: FormServiceService,
    private router: Router,

  ){
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [
        Validators.required, 
        Validators.minLength(6),
      ]],
    });
  }

  onSubmit(){
    let errors: HttpErrorResponse;
    let response: respToken;
    if(this.loginForm.valid){
      this.formService.loginUser(this.loginForm.value)
      .pipe(
        finalize(()=>{
       if(errors){
        this.loginErrorMsg = errors.error;
       } else {
        localStorage.setItem("token",response.accessToken)
        this.router.navigate(['/starships']);       
      } 
      })
      )
      .subscribe({
        next: (resp: any) => (response = resp),
        error: (error: HttpErrorResponse)  => (errors = error),
      })
    }else{
     this.loginErrorMsg = "Incorrect email or Password";
    }
  }

  isValidField(field:string): boolean|null{
    return this.formService.isValidField(field, this.loginForm);
  }

  getFieldError(field:string): string{
    return this.formService.getFieldError(field,this.loginForm);
  }
}

  


