import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-patch-value',
  imports: [CommonModule, ReactiveFormsModule,JsonPipe],
  templateUrl: './set-patch-value.html',
  styleUrl: './set-patch-value.css',
})
export class SetPatchValue implements OnInit {
  myReactiveForm!: FormGroup;

  mySetValueObj: any;

  myPathcValueObj: WritableSignal<any> = signal({});
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialReactiveForm();
  }

  initialReactiveForm() {
    this.myReactiveForm = this.fb.group({
      firstname: this.fb.control('', Validators.required),
      lastname: this.fb.control('', Validators.required),
      emailaddress: this.fb.control('', Validators.required),
      contactnumber: this.fb.control('', Validators.required),
    })
  }

  // set form Control value
  onSetFormValue() {
    this.myReactiveForm.setValue({
      firstname: 'abhishek',
      lastname: 'kale',
      emailaddress: 'abhi@gmail.com',
      contactnumber: 232323222
    });

    this.mySetValueObj = this.myReactiveForm.value;
  }

  // patch form control value
  onPatchFormValue() {
     this.myReactiveForm.patchValue({
      firstname:'meena',
      emailaddress:'meena@gmail.com'
     });

     this.myPathcValueObj.set(this.myReactiveForm.value);
  }

}
