import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-async-validator',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './async-validator.html',
  styleUrl: './async-validator.css',
})
export class AsyncValidator implements OnInit {
  myReactiveForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialReactiveForm();
  }


  initialReactiveForm() {
    this.myReactiveForm = this.fb.group({
      username: new FormControl('', Validators.required),
    });


    // 👉 Apply async validator dynamically

    this.myReactiveForm.get('username')?.setAsyncValidators(this.usernameValidator);


    // 👉 Important

    this.myReactiveForm.get('username')?.updateValueAndValidity();

  }


  // 🔹 Async Validator Function

  usernameValidator(control: AbstractControl): Observable<ValidationErrors | null> {

    const fakeApiResponse = ['admin', 'test', 'user123']; // already taken usernames

    return of(fakeApiResponse).pipe(
      delay(1000),
      map(users => {
        if (users.includes(control.value)) {
          return { username: true }
        }

        return null;
      })
    )
  }


}
