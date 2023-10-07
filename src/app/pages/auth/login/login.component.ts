import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form } from 'src/app/interfaces/form.interface';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  loginInvalid: boolean = false;

  signInForm: Form[] =[
    {name: "email", label: "Email address", type: "text"},
    {name: "password", label: "Password", type: "password"},
  ]

  constructor(
    private fb: FormBuilder,
    private formService: FormServiceService,
  ){
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [
        Validators.required, 
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.\-_])[A-Za-z\d@$!%*?&\.\-_]{8,}$"),
      ]],
    });
  }

  onSubmit(){

    if(this.loginForm.valid){
      console.log("sent");
      this.loginInvalid=false;
    }else{
      this.loginInvalid=true;
      console.log("not valid");
    }
  }

  isValidField(field:string): boolean|null{
    return this.formService.isValidField(field, this.loginForm);
  }

  getFieldError(field:string): string{
    return this.formService.getFieldError(field,this.loginForm);
  }
}

  


