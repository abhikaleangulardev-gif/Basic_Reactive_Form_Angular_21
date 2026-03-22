import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveForm implements OnInit {
  myReactiveForm!: FormGroup;

  myDisplayFormSpecificTime: boolean = true;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.initialReactiveForm();
    // setTimeout(()=>{
    //   console.log('Timeout Triggered')
    //   this.myDisplayFormSpecificTime = true;
    //   this.cd.markForCheck();
    // },3000)
  }

  initialReactiveForm() {
    this.myReactiveForm = this.fb.group({
      username: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(19)]),
      email: this.fb.control('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password: this.fb.control('', Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)),
      skills: this.fb.array([], Validators.required)
    });
  }


  onSave() {
    if (this.myReactiveForm.valid) {
      console.log(this.myReactiveForm.value);
    } else {
      alert('plz correct enter information.....');
    }
  }

  //  formarray

  get skills(): FormArray {
    return this.myReactiveForm.get('skills') as FormArray;
  }


  addSkill() {
    const skillsControl = this.fb.control('', Validators.required);
    this.skills.push(skillsControl);
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
}
