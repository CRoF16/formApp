import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from '../../../shared/validators/validators';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {


  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern( this.validatorsService .firstNameAndLastnamePattern )]],
    // email: ['', [Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ], [ new EmailValidator() ]],
    email: ['', [Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ], [ this.emailValidator ]],
    username: ['', [Validators.required, this.validatorsService.cantBeStrider ]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  },{
    validator: [
      this.validatorsService.isFieldOneEqualFieldTwo('password', 'confirmPassword'),
    ]
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator,
  ) { }

  isValidField(field: string) {
    return this.validatorsService.isValidField( this.myForm, field );
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
