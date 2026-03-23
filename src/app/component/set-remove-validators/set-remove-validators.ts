import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-set-remove-validators',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './set-remove-validators.html',
  styleUrl: './set-remove-validators.css',
})
export class SetRemoveValidators implements OnInit {
  myReactiveForm!: FormGroup;

  passwordPatternValidator = Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialReactiveForm();
  }

  initialReactiveForm() {
    this.myReactiveForm = this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      emailaddress: this.fb.control(''),
      contactnumber: this.fb.control(''),
      password: this.fb.control(''),
    })
  }

  // ✅ SET VALIDATORS
  setValidation() {
    console.log('set validators...')
    // firstname
    this.myReactiveForm.get('firstname')?.setValidators([Validators.required, Validators.minLength(3)]),

      // lastname
      this.myReactiveForm.get('lastname')?.setValidators([Validators.required, Validators.minLength(3)]),

      // email
      this.myReactiveForm.get('emailaddress')?.setValidators([Validators.required, Validators.email]),

      //contactnumber
      this.myReactiveForm.get('contactnumber')?.setValidators([Validators.required, Validators.pattern(/^[0-9]{10}$/)])

    // password
    this.myReactiveForm.get('password')?.setValidators([
      Validators.required,
      this.passwordPatternValidator
    ]);

    // IMPORTANT: update validity

    this.myReactiveForm.get('firstname')?.updateValueAndValidity();
    this.myReactiveForm.get('lastname')?.updateValueAndValidity();
    this.myReactiveForm.get('emailaddress')?.updateValueAndValidity();
    this.myReactiveForm.get('contactnumber')?.updateValueAndValidity();
    this.myReactiveForm.get('password')?.updateValueAndValidity();
    
  }

  // ❌ clear VALIDATORS firs using clearValidators() and last written updateValueAndValidity

  clearValidation() {

    console.log('remove validators....');

    this.myReactiveForm.get('firstname')?.clearValidators();
    this.myReactiveForm.get('lastname')?.clearValidators();
    this.myReactiveForm.get('emailaddress')?.clearValidators();
    this.myReactiveForm.get('contactnumber')?.clearValidators();



    // IMPORTANT: update validity
    this.myReactiveForm.get('firstname')?.updateValueAndValidity();
    this.myReactiveForm.get('lastname')?.updateValueAndValidity();
    this.myReactiveForm.get('emailaddress')?.updateValueAndValidity();
    this.myReactiveForm.get('contactnumber')?.updateValueAndValidity();
  }


  // removeValidators
  removeValidation() {
    this.myReactiveForm.get('password')?.removeValidators(this.passwordPatternValidator);

    this.myReactiveForm.get('password')?.updateValueAndValidity();
  }
}
