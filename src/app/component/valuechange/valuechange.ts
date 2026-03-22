import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-valuechange',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './valuechange.html',
  styleUrl: './valuechange.css',
})
export class Valuechange implements OnInit {
  myReactiveForm!: FormGroup;

  myFullName: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialReactiveForm();

    this.myReactiveForm.get('fullname')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((_resp: string) => {
      this.myFullName = _resp;
    })
  }

  initialReactiveForm() {
    this.myReactiveForm = this.fb.group({
      fullname: this.fb.control('', Validators.required),
    })
  }
}
