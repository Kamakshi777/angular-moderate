import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Reactive Form</h2>

    <form [formGroup]="myForm" (ngSubmit)="saveData()">

      First Name:
      <input type="text" formControlName="firstName" />

      <span *ngIf="firstName.touched && firstName.invalid">
        First name is required
      </span>

      <br /><br />

      Last Name:
      <input type="text" formControlName="lastName" />

      <br /><br />

      <button type="submit" [disabled]="myForm.invalid">
        Submit
      </button>

    </form>
  `
})
export class ReactiveForms {

  myForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('')
  });

  get firstName() {
    return this.myForm.get('firstName')!;
  }

  saveData() {
    console.log(this.myForm.value);
  }
}
