import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Form, User } from 'src/app/interfaces/form.interface';
import { FormServiceService } from 'src/app/services/form-service.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 
  registerForm: FormGroup;
  registeredInvalid: boolean = false;

  signUpForm: Form[] =[
    {name: "email", label: "Email address", type: "text"},
    {name: "password", label: "Password", type: "password"},
    {name: "password2", label: "Repeat Password", type: "password"},
  ]

  pwsPattern: string= `^(?=.*[A-Z])(?=.*[a-z])(?=.*\d){8,}$`

  constructor(
    private fb: FormBuilder,
    private formService: FormServiceService
    ){
    this.registerForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [
        Validators.required, 
        // Validators.pattern(this.pwsPattern)
      ]],
      password2: ["", [
        Validators.required, 
        // Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$"),
      ]],
    });
  }
response=""
 onSubmit(){
    let user: User = {"email" : this.registerForm.get('email')?.value, "password" : this.registerForm.get('password')?.value }
    
    this.formService.registerUser(user)
    .subscribe((data) => 
     this.response = data ); 
     
        
  


    if(this.registerForm.valid 
      && (this.registerForm.controls['password'].value === this.registerForm.controls['password2'].value)){
      console.log("sent");
      this.registeredInvalid=false;
    }else{
      this.registeredInvalid=true;
      console.log("not valid");
    }

    
  }
    
  isValidField(field:string): boolean|null{
    return this.formService.isValidField(field, this.registerForm);
  }

  getFieldError(field:string): string{
    return this.formService.getFieldError(field,this.registerForm);
  }
}

