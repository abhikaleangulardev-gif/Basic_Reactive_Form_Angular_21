import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-basic-add-control-remove-control',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic-add-control-remove-control.html',
  styleUrl: './basic-add-control-remove-control.css',
})
export class BasicAddControlRemoveControl implements OnInit {
  myReactiveForm!: FormGroup;

  myNewFields: WritableSignal<string[]> = signal<string[]>(['email', 'contact', 'password']);


  myAddFields: WritableSignal<string[]> = signal<string[]>(['username']);

  myPlaceholderName: WritableSignal<any> = signal({
    username: 'enter your username....',
    email: 'enter your email....',
    contact: 'enter your contact....',
    password: 'enter your passowrd....',

  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialReactiveForm();

    setTimeout(() => {
      alert('alert field dynamic updated...')
      this.onAddFormControl();
    }, 4000)
  }

  initialReactiveForm() {
    this.myReactiveForm = this.fb.group({
      username: this.fb.control('', Validators.required),
    })
  }


  // addcontrol method

  onAddFormControl() {
    //  1.iterate array
    this.myNewFields().forEach((field: any) => {
      this.myReactiveForm.addControl(field, this.fb.control('', Validators.required));

      this.myAddFields.update((element) => [...element, field]);
    })
  }


  onRemoveFormControl(fieldname:string){
      this.myReactiveForm.removeControl(fieldname);

      this.myAddFields.update((element: string[]) => element.filter((f) => f !== fieldname));
  }

}
