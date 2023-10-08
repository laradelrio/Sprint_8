import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { Form } from 'src/app/interfaces/form.interface';
import { FormServiceService } from 'src/app/services/form-service.service';
// import { __values } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  successfulRegistration: boolean = false;
  registerErrorMsg: string = "";

  signUpForm: Form[] = [
    { name: "email", label: "Email address", type: "text" },
    { name: "password", label: "Password", type: "password" },
    { name: "password2", label: "Repeat Password", type: "password" },
  ]

  // pwsPattern: string = `^(?=.*[A-Z])(?=.*[a-z])(?=.*\d){8,}$`

  constructor(
    private fb: FormBuilder,
    private formService: FormServiceService
  ) {
    this.registerForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [
        Validators.required,
        Validators.minLength(6),
        // Validators.pattern(this.pwsPattern)
      ]],
      password2: ["", [
        Validators.required,
        Validators.minLength(6),
        // Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$"),
      ]],
    });
  }

  samePassword() {
    return this.registerForm.get('password')?.value === this.registerForm.get('password2')?.value
  }

  
  onSubmit() {
    let errors: HttpErrorResponse;
    let response: Object;

    if (this.registerForm.valid && this.samePassword()) {
      console.log("sent");
      this.formService.registerUser(this.registerForm)
        .pipe(
          finalize(() => {
            if (errors) {
              this.successfulRegistration = false;
              this.registerErrorMsg = errors.error;
            } else {
              this.successfulRegistration=true;
              this.formService.token = response;
            }
          })
        )
        .subscribe({
          next: (resp) => (response = resp, console.log("resp", resp)),
          error: (error) => (errors = error, console.log('error', error))
        });
    } else {
      if (!this.samePassword()) {
        this.successfulRegistration = false;
        this.registerErrorMsg = "Passwords don't match";
      }
    }
  }

  isValidField(field: string): boolean | null {
    return this.formService.isValidField(field, this.registerForm);
  }

  getFieldError(field: string): string {
    return this.formService.getFieldError(field, this.registerForm);
  }
}

